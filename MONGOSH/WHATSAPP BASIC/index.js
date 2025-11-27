const express = require("express");
const db = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");


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
    // throw new ExpressError(200,"there was an error");
    res.render("newchat.ejs");
});

app.post("/users",(req,res)=>{
try{
    let { from, to, msg } = req.body;
    let newchat = { from, to, msg, created_at:new Date()};
    const chat = new Chat(newchat);
    chat.save();
    res.redirect("/");
}catch(err){
   next(err)
}
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
});

app.use((err,req,res,next)=>{
    let {status=500,message = "There is an error"} = err;
    res.status(status).send(message);
});

app.get("/users/:id",async(req,res,next)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
      if(!chat){
        next(new ExpressError(404,"chat not found"));
    }
    res.render("show.ejs",{chat});
});

app.delete("/users/:id",async(req,res)=>{
    let {id} = req.params;
    let user = await Chat.findByIdAndDelete(id);
    console.log("user deleted");
    res.redirect("/");
});

app.use((err, req, res, next) => {
    const { status = 500, message = "There is a problem in the chat" } = err;
    res.status(status).send(message);
});

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        console.log("This is beacuse of viloting the validation, do please follow the validations");
    }
    next(err);
})


const port = 1331;
app.listen(port,()=>{
    console.log(`Sercer started at http://localhost:${port}`);
});