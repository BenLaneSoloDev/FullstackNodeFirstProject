const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const tasksRouter = require("./tasks/tasks.router.js");
const cors = require("cors");

const app = express(); // Creates an Express App  
const port = 3001; // Ports range from 0 -> 65,535  http://localhost:3001

app.use(express.json()); // Middleware that converts incoming request body into JSON format

app.use(cors());

let accessLogStream = fs.createWriteStream(path.join(__dirname, "..", "access.log"), { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.use("/", tasksRouter);

app.listen(port, () => {
    console.log("App listening on port: " + port);
}); 