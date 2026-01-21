const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

const session = require("express-session");
const ejsMate = require("ejs-mate");
const flash = require("connect-flash");
const methodOverride = require("method-override");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

const listings = require("../routes/listing.js");
const reviews = require("../routes/reviews.js");
const User = require("../models/User.js");

// -------------------- MIDDLEWARE --------------------
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// -------------------- DATABASE --------------------
mongoose
  .connect("mongodb://127.0.0.1:27017/majorProject")
  .then(() => console.log("✅ Connected to database"))
  .catch(err => console.log(err));

// -------------------- SESSION --------------------
const sessionOption = {
  secret: "weaksecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

app.use(session(sessionOption));
app.use(flash());

// -------------------- PASSPORT --------------------
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // 👈 IMPORTANT
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
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
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// -------------------- VIEWS --------------------
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

// -------------------- AUTH ROUTES --------------------

// REGISTER
app.get("/loginsite", (req, res) => {
    res.render("login.ejs");
});
app.get("/registerNewuser", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
     const existuser = await User.findOne({ email });
     if(existuser){ 
      req.flash("error", "Email already registered");
       res.redirect("/loginsite");
    } 

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    await user.save();

    req.login(user, err => {
      if (err) return next(err);
      req.flash("success", "Welcome!");
      res.redirect("/");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/loginsite");
  }
});

// LOGIN


app.post(
  "/loginsite",
  passport.authenticate("local", {
    failureRedirect: "/loginsite",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect("/");
  }
);

// LOGOUT
app.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    req.flash("success", "Logged out successfully");
    res.redirect("/");
  });
});

// -------------------- ROUTES --------------------
app.use("/", listings);
app.use("/listing/:id/reviews", reviews);

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// -------------------- SERVER --------------------
const port = 4518;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
