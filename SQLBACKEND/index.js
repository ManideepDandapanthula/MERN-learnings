const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mani@1811',
  database: 'sravani',
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL Database!');
});

let q = "INSERT INTO users (id, name, email, password) VALUES ?";

let params = [];

// Function to create one random user
let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Generate 100 fake users
for (let i = 0; i < 100; i++) {
  params.push(createRandomUser());
}

// Insert all at once
connection.query(q, [params], (err, results, fields) => {
  if (err) {
    console.error('❌ Query error:', err);
    return;
  }
  console.log('✅ Insert successful!');
  console.log('📦 Rows inserted:', results.affectedRows);
  connection.end();
});
