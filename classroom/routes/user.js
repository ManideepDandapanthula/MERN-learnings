const express = require("express");

const router = express.Router();
router.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("this is the main root in user route");
});

router.get('/new',(req,res)=>{
    res.send("this is the route for the new user creation")
});

router.get("/:id",(req,res)=>{
    res.send("This is the route for a particular user ");
});

router.get("/delete/:id",(req,res)=>{
    res.send("This is the route to delete a user");
});

module.exports = router;