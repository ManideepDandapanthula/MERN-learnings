const express = require("express"); // Use proper variable name
const app = express();
const port = 6996;

app.get("/:userId/:id",(req,res)=>{
    const {userId} = req.params;
    console.log(userId);
    res.send(`u have logged in with user ame ${userId}`)
});

app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1> there is no search request</h1>");
    }
    else{

        res.send(`Search results for ${q}`);
    }
});

app.get("/", (req, res) => {
    console.log(`Request received for the webpage`);
    res.send(`Welcome to the Website <br> Thanks for visiting`);
});

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
