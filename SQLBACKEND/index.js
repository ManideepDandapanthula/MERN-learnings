const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mani@1811',
  database: 'sravani',
});

connection.connect((err) => {
  if (err) return console.error('❌ Connection error:', err);
  console.log('✅ Connected to MySQL Database!');
});

let createRandomUser = () => [
  faker.string.uuid(),
  faker.internet.username(),
  faker.internet.email(),
  faker.internet.password(),
];

let params = [];
for (let i = 0; i < 100; i++) {
  params.push(createRandomUser());
}

let insertQuery = "INSERT INTO users (id, name, email, password) VALUES ?";
if (params.length > 0) {
  connection.query(insertQuery, [params], (err, result) => {
    if (err) console.error("Error inserting users:", err);
    else console.log(`✅ Inserted ${result.affectedRows} users`);
  });
}

app.get("/", (req, res) => {
  const q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, (err, result) => {
    if (err) return res.status(500).send("Database error");
    const count = result[0].count;
    res.render("home.ejs", { count });
  });
});

app.get("/users", (req, res) => {
  const queryShowAll = "SELECT * FROM users";
  connection.query(queryShowAll, (err, result) => {
    if (err) return res.status(500).send("Database error");
    res.render("showusers.ejs",{result});
  });
});

app.get("/users/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `select * from users where id='${id}'`;
  connection.query(q,(err,respon)=>{
      if(err){
        console.log(`there was an error occured ${err}`);
        res.status(500).send(`Database error`);
      }
      let user = respon[0];
      res.render("edit.ejs",{user});
  });
});

app.patch("/users/:id",(req,res)=>{
   let {id} = req.params;
   let {manipass:formpass,maniname:newUserName} = req.body;
  let q = `select * from users where id='${id}'`;
  connection.query(q,(err,respon)=>{
      if(err){
        console.log(`there was an error occured ${err}`);
        res.status(500).send(`Database error`);
      }
      let user = respon[0];
      if(formpass != user.password){
        res.send(`Wrong password entered, access denied`); 
      }else{
       let q2 =`update users set name = "${newUserName}" where id ='${id}' `;
connection.query(q2, (err, perfect) => {
  if (err) {
    console.log("Error while updating:", err);
    return res.status(500).send("Database error while updating");
  }
  res.redirect("/users");
});
      }
      
  });
});
app.get("/users/new",(req,res)=>{
  res.render("new.ejs");
});

app.post("/users/newuser",(req,res)=>{
  let {name,email,password} = req.body;

  let id = faker.string.uuid();

let q = 'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)';

  let params = [id,name,email,password];
  connection.query(q,params,(err,result)=>{
    if(err){
      res.status(500).send("there whas an error");
    }
    console.log(`successfully added the user`);
    res.redirect("/users");
  });
});

app.delete("/users/:id",(req,res)=>{
  let {id} = req.params;
  let q = `DELETE FROM users WHERE id='${id}'`;
  connection.query(q,(err,result)=>{
    if(err){
      res.status(500).send("there was an error while deleting the user from the databse");
      console.log(err);
    }
    
    res.redirect("/users");
  });
});


const port = 8989;
app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
