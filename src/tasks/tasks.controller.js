const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const Task = require("./task.schema.js");

function handleGetTasks(req, res) {
    let response = [
        {
            title: "Title of the task",
            date: "2026-06-26T12:00:00Z",
            description: "Description of the task",
            priority: "normal",
            status: "todo"
        },
    ];
    res.status(StatusCodes.OK).json(response);
};

async function handlePostTasks(req, res) {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        dueDate: req.body.dueDate
    });
    
    await task.save();
    
    res.status(StatusCodes.CREATED).json(task);
};

function handlePatchTasks(req, res) {
    res.send("PATCH Tasks Controller");
};

function handleDeleteTasks(req, res) {
    res.send("DELETE Tasks Controller");
};

module.exports = { 
    handleGetTasks,
    handlePostTasks,
    handlePatchTasks,
    handleDeleteTasks
};