const express = require("express");
const router = express.Router();
const Review = require("../models/Reviews.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../util/wrapasync.js");
const ExpressErrors = require("../util/ExpressErrors.js");
const session = require("express-session");
const { listingSchema, reviewSchema } = require("../schema.js");
const listingController = require("../controllers/listings.js");
const { isLoggedIn } = require("../middleware.js");
const passport = require("passport");
const flash = require("connect-flash");
const { populate } = require("../models/User.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressErrors(400, msg);
  } else {
    next();
  }
};

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

router.use(passport.initialize());
router.use(passport.session());

router.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

router.get("/listing", wrapAsync(listingController.index));

router.get("/listing/:id", listingController.showListing);

router.get("/addnewlist", isLoggedIn, listingController.renderNewForm);

router.post(
  "/listing/addedlist",
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.createNewListing),
);

router.get("/listing/:id/edit", isLoggedIn, listingController.renderEditForm);
router.patch(
  "/listing/:id",
  upload.single("listing[image]"),
  listingController.updateListing,
);

router.delete("/listing/delete/:id", listingController.deleteListing);

router.use((err, req, res, next) => {
  let { statuscode = 500, message = "Something was wrong" } = err;
  res.render("error.ejs", { message });
});

module.exports = router;
