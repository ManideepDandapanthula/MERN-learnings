const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const flash = require("connect-flash");
const app = express();
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));
// cookie parser
app.use(cookieParser("topsecret"));
const sessionOptions = {
    secret: "topsecret",
    resave: false,
    saveUninitialized: true,
  }
// session middleware
app.use(
  session(sessionOptions)
);

app.use(flash());

app.get("/register",(req,res)=>{
    let {name="Guest"} = req.query;
    req.session.name = name;
    req.flash("error","Hlo welcome to the page "+ name);
  
    res.redirect("/hlo");
  
});
app.get("/hlo",(req,res)=>{
    // console.log(req.flash("success"));
    res.locals.messages = req.flash("error");
    res.render("flash.ejs",{name :req.session.name});
})

// app.get("/requestcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }

//   res.send(`You sent a request ${req.session.count} times`);
// });

const port = 3939;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
