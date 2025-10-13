const exp = require("express");
const app = exp();
const path = require("path");
const methodOverride = require("method-override");
const {v4:uuidv4} = require("uuid");
app.use(exp.urlencoded({extended: true}));
app.use(exp.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));

app.set("view engine","ejs");
app.use(methodOverride("_method"));

let posts =[ {
    id:uuidv4(),
    username : "manideep",
    content:"i love coding",
},{
    id:uuidv4(),
    username:"sravani gunda",
    content:"i ma working in realpage",
},
{
    id:uuidv4(),
    username:"phanisree",
    content:"i am studying in class 12",
}

]

app.get("/post",(req,res)=>{
  
    res.render("index.ejs",{posts})
});

app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
});

app.get("/post/:id",(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let cont = posts.find((p) => id === p.id);
    // console.log(post)
    res.render("show.ejs",{cont});
})

app.post("/post", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  console.log(req.body); 
  posts.push({ id,username, content });

 
  res.redirect("/post");
});

app.patch("/post/:id",(req,res)=>{
    let {id} = req.params;  
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/post");
});

app.get("/post/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

app.delete("/post/:id",(req,res)=>{
    const {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
   res.redirect("/post");
})


const port = 8080;

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});