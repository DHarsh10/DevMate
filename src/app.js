const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("middleware executed");
    res.send("middleware executed")
})

app.post("/data", (req, res) => {
    const newUser = new User({
        firstName: "Poorna",
        lastName: "Naik",
        email: "pn@gmail.com",
        password: "bbb",
        age: 26
    })

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

