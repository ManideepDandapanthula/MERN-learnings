const exp = require("express");
const app = exp();

const port = 8080;

app.use(exp.urlencoded({extended: true}));

app.get("/register",(req,res)=>{
    let {user,password} = req.query;

    res.send(`standerd get response, welcome to ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,password} = req.body;

    res.send(`Welcome to the user with the username ${user} and the password is ${password}`);
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})