const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const responseFormatter = require("./middleware/responseFormatter.js");
const { StatusCodes } = require("http-status-codes");
const tasksRouter = require("./tasks/tasks.router.js");
const authRouter = require("./auth/auth.router.js");
const usersRouter = require("./users/users.router.js");
const mongoose = require("mongoose");


const app = express(); // Creates an Express App  
const port = 3001; // Ports range from 0 -> 65,535  http://localhost:3001

// ADDED MIDDLEWARE
app.use(express.json()); // Middleware that converts incoming request body into JSON format

app.use(cors());

let accessLogStream = fs.createWriteStream(path.join(__dirname, "..", "access.log"), { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.use(responseFormatter);

// ADDED ROUTES
app.use("/", tasksRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

// BLANK ROUTE TO CATCH "NOT FOUND" ERRORS (and have a valid response back)
app.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).json(null);
});    

// Starts application only if MongoDB Connection works
async function bootstrap() {
    try {
        await mongoose.connect("mongodb+srv://nodejs.cv4c23e.mongodb.net/", 
        { dbName: "fullstackTasks" });
        console.log("SUCCESS CONNECTING TO MONGODB");
        // START APP
        app.listen(port, () => {
            console.log("App listening on port: " + port);
        }); 
    } 
    catch (error) {
        console.log(error);
        process.exit(1); // Closes the app, with error code 1 (error causes shutdown)
    }
}

bootstrap();
