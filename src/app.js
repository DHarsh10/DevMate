const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("middleware executed");
    res.send("middleware executed")
})

app.listen(port, () => {
    console.log(`server is now running on port ${port}`)
})