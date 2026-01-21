const Review = require("../models/Reviews.js");
const { ReviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const ExpressErrors = require("../util/ExpressErrors.js");

module.exports.createReview = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  const listing = await Listing.findById(id);
  if (!listing) {
    throw new ExpressErrors(404, "Listing not found");
  }

  const newReview = new Review({
    rating: req.body.rating,
    comment: req.body.reviewcomment,
    author: req.user._id,
  });
  // console.log(req.user);
  await newReview.save();
  // console.log(newReview);
  listing.reviews.push(newReview);
  await listing.save();

  res.redirect(`/listing/${id}`);
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId },
  });

  await Review.findByIdAndDelete(reviewId);

  res.redirect(`/listing/${id}`);
};
