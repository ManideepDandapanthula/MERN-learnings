const express = require("express");
const db = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
const Chat = require("./models/whatsapp");

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",async (req,res)=>{
   let chatss =await Chat.find();
  res.render("index.ejs",{chatss});
});



db.connect("mongodb://127.0.0.1:27017/whatsapp_clone")
.then(()=>{
    console.log(`Successfully connected to the db`);
});

app.get("/users/newchat",(req,res)=>{
    res.render("newchat.ejs");
});

app.post("/users",(req,res)=>{
    let { from, to, msg } = req.body;
    let newchat = { from, to, msg, created_at:new Date()};
    const chat = new Chat(newchat);
    chat.save();
    res.redirect("/");
});

app.get("/users/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let convo = await Chat.findById(id);
    res.render("edit.ejs",{convo});
});

app.patch("/users/:id",async (req,res)=>{
    let {id} = req.params;
    let{from,msg,to} = req.body;
   let updateChat = await Chat.findByIdAndUpdate(id,{from:from,to:to,msg:msg});

    res.redirect("/");
})

const port = 1331;
app.listen(port,()=>{
    console.log(`Sercer started at http://localhost:${port}`);
});