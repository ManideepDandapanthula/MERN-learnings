const express= require("express");
const db = require("mongoose");
const app = express();
const path = require("path");
const Listing = require("../models/listing.js");
const ejsMate = require("ejs-mate");
 const {sampleListings} = require("../init/data.js");
const wrapAsync = require("../util/wrapasync.js")
const ExpressErrors = require("../util/ExpressErrors.js")
const {listingSchema,reviewSchema} = require("../schema.js");
const Review = require("../models/Reviews.js");
const methodOverride = require("method-override");
const { count } = require("console");
const session = require("express-session");
const cookieParser = require("cookie-parser");



app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
db.connect("mongodb://127.0.0.1:27017/majorProject").then(()=>{
    console.log("✅ Connected to database");
})
.catch((err)=>{
    console.log(`There was an error`,err);
});


const sessionOptions = {
  secret :"topsecret",
  resave: false,
  saveUninitializaed: true,
}



app.get("/loginsite", (req, res) => {
    res.render("login.ejs");
});


app.get("/",(req,res)=>{
  res.render("home.ejs");
});

const validateListing = (req,res,next)=>{
    const {error} = listingSchema.validate(req.body);
    if(error){
      const msg = error.details.map(el=>el.message).join(",");
      throw new ExpressErrors(400,msg);
    }else{
      next();   
        
    }
  };
const validateReview = (req,res,next)=>{
    const {error} = reviewSchema.validate(req.body);    
    if(error){
      const msg = error.details.map(el=>el.message).join(",");
      throw new ExpressErrors(400,msg);
    }
    else{
      next();
    }
  };

app.get("/listing",async (req,res)=>{
  const allListing = await Listing.find({});
  res.render("index.ejs",{allListing});
});


app.get("/listing/:id",async(req,res)=>{
  let {id} = req.params;
  let place = await Listing.findById(id).populate("reviews");
  res.render("showplace.ejs",{place});
});


app.get("/addnewlist",(req,res)=>{
  res.render("newlist.ejs");
});

app.post("/listing/addedlist",validateListing,wrapAsync(async (req,res,next)=>{
      // if(!req.body.listing){
      //   next(new ExpressErrors(404,"Send valid data to save"));
      // }
      
      // if(!newlistings.title){
      //    next(new ExpressErrors(404,"Title is missing"));
      // }
      // if(!newlistings.description){
      //    next(new ExpressErrors(404,"description is missing"));
      // }
      // if(!newlistings.location){
      //    next(new ExpressErrors(404,"location is missing"));
      // }
      // let {title,description,image,price,location,country} = req.body;
      // let newlistings =new Listing({title,description,image,price,location,country});
      let result = listingSchema.validate(req.body);
      console.log(result);
      const newlistings = new Listing(req.body.listing);
      await newlistings.save();
      res.redirect("/listing");

})
);

app.get("/listing/:id/edit",async (req,res)=>{
  let {id} = req.params;
  let list =await Listing.findById(id);
  res.render("edit.ejs",{list});
});
app.patch("/listing/:id",async(req,res)=>{
  let {title,description,image,price,location,country} = req.body;
  let {id} = req.params;
  let ediedlist = await Listing.findByIdAndUpdate( id,
  {
    title,
    description,
    image,
    price,
    location,
    country,
  },{new:true,runValidators:true});

  res.redirect(`/listing/${id}`);
});

app.delete("/listing/delete/:id",async(req,res)=>{
      let {id} = req.params;
      let user = await Listing.findByIdAndDelete(id).then(()=>{
        console.log(`DEleted users`);
      });
      res.redirect("/listing")
});

// app.all("*",(req,res,next)=>{
//   next(new ExpressErrors(404,"page not found"));
// });

app.use((err,req,res,next)=>{
  let {statuscode=500,message= "Something was wrong"} = err;
  // res.status(statuscode).send(message);
  res.render("error.ejs",{message});
  
});

app.post("/listing/:id/reviews",validateReview,wrapAsync(async (req,res)=>{
  let {id} = req.params;
  let listing = await Listing.findById(id);
 let newReview = new Review({
  rating: req.body.rating,
  comment: req.body.reviewcomment,
 });
  await newReview.save();
  listing.reviews.push(newReview);
  await listing.save();
  res.redirect(`/listing/${id}`)
  
}));

app.delete("/listing/:id/reviews/:reviewId",wrapAsync(async (req,res)=>{

  let {id,reviewId} = req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listing/${id}`);
}));

const port = 4518;
app.listen(port,()=>{
    console.log(`Server listining at http://localhost:${port}`);
});
