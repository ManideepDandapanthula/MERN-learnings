const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const argon = require("argon2");
const session = require("express-session");
const flash = require("connect-flash");
const wrapasync = require("../util/wrapasync.js");
const { savedUrl } = require("../middleware.js");
const sessionOption = {
  secret: "weaksecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

router.use(session(sessionOption));
router.use(flash());

// -------------------- PASSPORT --------------------
router.use(passport.initialize());
router.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // 👈 IMPORTANT
    wrapasync(async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Invalid email" });
        }

        const isMatch = await argon.verify(user.password, password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }),
  ),
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// -------------------- FLASH LOCALS --------------------
router.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

router.get("/loginsite", (req, res) => {
  res.render("login.ejs");
});

// REGISTER FORM RENDERING
router.get("/registerNewuser", (req, res) => {
  res.render("register.ejs");
});

//REGISTRATION POST ROUTE
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      req.flash("error", "Email already registered");
      return res.redirect("/user/loginsite");
    }
    const hashedPassword = await argon.hash(password);

    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    await user.save();

    req.login(user, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome!");
      res.redirect("/");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/user/loginsite");
  }
});

// LOGIN

router.post(
  "/loginsite",
  savedUrl,
  passport.authenticate("local", {
    failureRedirect: "/user/loginsite",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect(res.locals.redirecturl || "/listing");
  },
);

// LOGOUT
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "Logged out successfully");
    res.redirect("/");
  });
});
module.exports = router;
