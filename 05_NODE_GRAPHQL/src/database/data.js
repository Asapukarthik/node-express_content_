const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected successfully");
  } catch (e) {
    console.error("Mongo connection failed!", e);
  }
};

module.exports = {connectToDB};