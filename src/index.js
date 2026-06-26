const express = require("express");
const tasksRouter = require("./tasks/tasks.router.js");

const app = express(); // Creates an Express App  
const port = 3001; // Ports range from 0 -> 65,535  http://localhost:3001


app.use("/", tasksRouter);

app.listen(port, () => {
    console.log("App listening on port: " + port);
}); 