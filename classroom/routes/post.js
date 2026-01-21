const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("Hellwo i a the root in post")
});

router.get("/post",(req,res)=>{
    res.send("this is the post rout");
});

router.post("/post/new",(req,res)=>{
    res.send("This is the route for the new post");
});

router.delete("/post/delete/:id",(req,res)=>{
    res.send("htis is the route to delete a particular post")
});


module.exports = router;
