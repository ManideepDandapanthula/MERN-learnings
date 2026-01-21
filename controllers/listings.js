const Listing = require("../models/listing.js");
const Review = require("../models/Reviews.js");
const { populate } = require("../models/User.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapBoxToken });

const { listingSchema } = require("../schema.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
// const ExpressErrors = require("../util/ExpressErrors.js");
module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  res.render("index.ejs", { allListing });
};

module.exports.renderNewForm = (req, res) => {
  res.render("newlist.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let place = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  res.locals.listing = place;
  res.render("showplace.ejs", { place });
};

module.exports.createNewListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let result = listingSchema.validate(req.body);
  // console.log(result);
  let url = req.file.path;
  let filename = req.file.filename;
  // console.log(url,"  ",filename);
  const newlistings = new Listing(req.body.listing);
  // // console.log(req.user);
  newlistings.owner = req.user._id;
  newlistings.image = { url, filename };
  newlistings.geometry = response.body.features[0].geometry;
  let savedlisting = await newlistings.save();

  req.flash("success", "successfully saved the new listing ");
  res.redirect("/listing");
};

module.exports.renderEditForm = async function (req, res) {
  const { id } = req.params;

  const list = await Listing.findById(id);
  if (!list) {
    req.flash("error", "Listing not found");
    return res.redirect("/listing");
  }

  res.render("edit.ejs", { list });
};

module.exports.updateListing = async (req, res) => {
  let { title, description, price, location, country } = req.body;
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(req.user._id)) {
    req.flash("error", "You dont have permission to do that");
    return res.redirect(`/listing/${id}`);
  }
  listing.title = title;
  listing.description = description;
  listing.price = price;
  listing.location = location;
  listing.country = country;
  let url = req.file.path;
  let filename = req.file.filename;
  listing.image = { url, filename };
  await listing.save();

  req.flash("success", "successfully edited the listing ");
  res.redirect(`/listing/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let user = await Listing.findByIdAndDelete(id).then(() => {
    console.log(`DEleted users`);
  });
  res.redirect("/listing");
};
