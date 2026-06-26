const express = require("express");

const tasksRouter = express.Router();

tasksRouter.get("/tasks", (req, res) => {
    return res.send("Hello World!");
});

tasksRouter.post("/tasks", (req, res) => {
    console.log(req.body); 
    return res.send("Create a new task");
});

module.exports = tasksRouter;