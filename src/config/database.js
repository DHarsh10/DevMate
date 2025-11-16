const mongoose = require("mongoose");
require ('dotenv').config();
const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
    await mongoose.connect(dbURI)
}

module.exports = connectDB;