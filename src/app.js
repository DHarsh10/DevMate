const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    console.log("middleware executed");
    res.send("middleware executed")
})

app.post("/data", (req, res) => {
    const newUser = new User(req.body)
    try{
        newUser.save();
        res.send("data saved successfully");
    }catch(err){
        res.send("error while saving data");
    }
})

connectDB().then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
        console.log(`server is now running on port ${port}`)
    })
}).catch((err) => {
    console.log("Database connection failed", err);
})

