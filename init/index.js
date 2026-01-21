const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/majorProject")
  .then(() => {
    console.log(`connected to the databse`);
  })
  .catch((err) => {
    console.log(`there was ann error `);
  });
const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data.data);
  console.log("data was initialized");
};

initDB();
