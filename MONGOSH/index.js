const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const methodoverride = require("method-override");
const app = express();
app.use(methodoverride("_method")); 

app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


mongoose
  .connect("mongodb://127.0.0.1:27017/mongosample")
  .then(() => {
    console.log(`Connected to MongoDB`);
    const User = require("./schemas/user");
    app.get("/", async (req, res) => {

      const users = await User.find();
      res.render("showAllUsers.ejs",{users});
    });
    app.get("/users/adduser", async (req,res)=>{
      res.render("welcome.ejs");
    });
 
    app.post("/", async (req, res) => {
      const { name, email, age } = req.body;
      const isexist = await User.findOne({email});
      if(isexist){
        res.send(`users already exist in the database try wiht other emailid`);
        
      }
      try {
        const newUser = new User({ name, email, age });
        await newUser.save();
        console.log("Successfully added");
       
        res.redirect("/");
      } catch (err) {
        console.error("❌ Error saving user:", err);
        res.status(500).send("Database error");
      }
    });

    // app.get("/users",async (req,res)=>{
    //   const users = await User.find();
    //   if(users){
    //    res.render("showAllUsers.ejs",{users});
    //   }
    //   else{
    //     console.log(`There was an error while getting the data`);
    //   }
    // });

// GET route to render update page
app.get("/users/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.send("There is no user with that ID");
    }

    res.render("update.ejs", { user });
  } catch (err) {
    console.error("Error finding user:", err);
    res.status(500).send("Internal Server Error");
  }
});

// User.updateMany({age:{$gt:22}},{$set:{name:"manideep"}})

// PATCH route to update the user
app.patch("/users/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const existuser = await User.findOne({email});
    if(existuser){
      res.send(`User already exist`);
    }
    if (!id) {
      console.log("User ID is missing");
      return res.status(400).send("User ID missing");
    }

    await User.findByIdAndUpdate(id, { name, email }, { new: true });
    res.redirect("/users");
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send("Internal Server Error");
  }
});


    const port = 1221;
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(`❎ Error connecting to MongoDB:`, err);
  });
