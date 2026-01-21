const Listing = require("./models/listing.js");
const Review = require("./models/Reviews.js");

module.exports.isLoggedIn = (req,res,next)=>{

    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
    req.flash("error","You must be logged in first");
   return res.redirect("/user/loginsite");
  }
  next();
};

module.exports.savedUrl = (req,res,next)=>{
    if(req.session.redirectUrl){  
        res.locals.redirecturl = req.session.redirectUrl; 
    }
    next();
};

module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    console.log(res.locals.currentUser);
    console.log("owner is ",listing.owner);
    if(!listing.owner._id.equals(res.locals.currentUser._id)){
      req.flash("error","You dont have permission to do that");
      return res.redirect(`/listing/${id}`);
    }
    next();
};
module.exports.isAuthor = async function (req,res,next){
    let {reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currentUser._id)){
      req.flash("error","You dont have permission to do that");
      return res.redirect(`/listing/${review.listing}`);
    }
    next();
};