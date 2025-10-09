const exp = require("express");
const app = exp();
const instaData = require("./data.json");
const path = require("path");
app.use(exp.static(path.join(__dirname,"/public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.send("manideep dandapanthula")
    res.render("welcome.ejs");
});

app.get("/userId",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6 ) + 1;
    res.render("rolldice.ejs",{ diceVal});
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const data = instaData[username];
    console.log(data)
    res.render("instagram.ejs",{data})
});

const port = 9889;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});