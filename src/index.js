const express = require("express");
const app = express(); // Creates an Express App  
const port = 3001; // Ports range from 0 -> 65,535  http://localhost:3001

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello World!");
}); // Creates a GET route ("/" listens to default URL)

app.listen(port, () => {
    console.log("App listening on port: " + port);
});