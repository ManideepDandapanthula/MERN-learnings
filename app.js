const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const flash = require("connect-flash");
require("dotenv").config();

const dburl = process.env.ATLAS_URL;
const store = MongoStore.create({
  mongoUrl: dburl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600, // ✅ correct key
});

store.on("error", () => {
  console.log("There was an error with connect-mongo package", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

const listings = require("./routes/listing.js");
const reviews = require("./routes/reviews.js");
const userRoutes = require("./routes/user.js");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dburl)
  .then(() => console.log("✅ Connected to database"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use("/", listings);
app.use("/user", userRoutes);
app.use("/listing/:id/reviews", reviews);

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

const port = 4518;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
