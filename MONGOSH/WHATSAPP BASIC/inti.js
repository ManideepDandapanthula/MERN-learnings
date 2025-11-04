const express = require("express");
const db = require("mongoose");
const app = express();
const path = require("path");
const Chat = require("./models/whatsapp");

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");


db.connect("mongodb://127.0.0.1:27017/whatsapp_clone")
.then(()=>{
    console.log(`Successfully connected to the db`);
});

let allchats = [
        
  { from: "manideep", to: "sravani", msg: "Hey Sravani! How’s your day going?", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "Pretty good! Just had lunch. You?", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Busy with project work 😅", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "Oh same here, deadlines everywhere!", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Let’s go for a coffee break?", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "Sure! 5 pm works?", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Perfect 😎 see you then", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "BTW did you finish the MongoDB task?", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Almost! Got a few errors but fixed them.", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "Nice! You’re getting good at backend 😁", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Haha thanks! I just debug until it works 😂", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "Classic dev move 😅", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Wanna watch a movie this weekend?", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "Sure! Pick something good this time 😜", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Haha fine, no more boring thrillers 😅", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "Deal! Comedy or rom-com?", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Comedy! We need a break from stress.", created_at: new Date() },
  { from: "sravani", to: "manideep", msg: "Agreed 😂 let’s plan tomorrow.", created_at: new Date() },
  { from: "manideep", to: "sravani", msg: "Done! I’ll text you the details.", created_at: new Date() },

];

Chat.insertMany(allchats);

const port = 3113;
app.listen(port,()=>{
    console.log(`Sercer started at http://localhost:${port}`);
});