const mongoose = require("mongoose");
require("dotenv").config();

const dbConfig = process.env.DB_URL;

mongoose
  .connect(dbConfig, {})
  .then(() => {})
  .catch((error) => {});

const database = mongoose.connection;

database.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

database.once("open", () => {
  console.log("Connected to the database");
});


module.exports = mongoose;