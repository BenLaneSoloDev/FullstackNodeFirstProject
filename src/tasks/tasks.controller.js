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
    res.status(200).json(response);
};

function handlePostTasks(req, res) {
    res.send("POST Tasks Controller");
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