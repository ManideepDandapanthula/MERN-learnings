const express = require("express");
const app = express();

// app.use((req,res,next)=>{
//     let {query} = req.query;
//   console.log("i am the 1st middle ware");
  
//     next();
// });

// app.use((req,res,next)=>{
//     let {query} = req.query;
//   console.log("i am the 2nd middle ware");
   
//     next();
// });
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now());
//     console.log(req.method,req.hostname,req.path,req.time);
// })

app.use("/err",(err,req,res,next)=>{
    console.log("-------err-------");
    next();
});



app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        return next();
    }
    res.send("ACCESS DENIED!");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.get("/api",(req,res)=>{
    res.send("data");
}) 

app.get("/",(req,res)=>{
    res.send();
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.get("/admin",(req,res)=>{
    throw new ExpressError("access to admnis forbidden");
})

const port = 8000
app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`)
})