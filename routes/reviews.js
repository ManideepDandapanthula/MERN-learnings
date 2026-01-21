const express = require("express");
const router = express.Router({ mergeParams: true });

const Review = require("../models/Reviews.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../util/wrapasync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const reviewContoller = require("../controllers/review.js");
const { isLoggedIn, isAuthor } = require("../middleware.js");
const ExpressErrors = require("../util/ExpressErrors.js");
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressErrors(400, msg);
  } else {
    next();
  }
};
router.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

router.post(
  "/",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewContoller.createReview),
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewContoller.deleteReview),
);

module.exports = router;
