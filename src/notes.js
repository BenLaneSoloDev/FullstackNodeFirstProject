// ------- NPM Packages -------

// Find Nod/NPM Packages
// Link: https://www.npmjs.com/

// Imported NPM packages can be gathered by name with Common Modules
const dateFns = require("date-fns");




// ------- Node.JS API's --------
// Node.js has many API's to offer. For this project we are learning how they work by looking at the File System
// one, but the process should be the same for others.

// These API's are accessed like any Common Module, and act as custom Node.JS packages

// File System API
// Accessed through:
const fs = require("fs");




// ------- RESTful API'S --------
// REST = Representational State Transfer
// It is a type of API that requires client/server separation where communication only happens through url/data

// Design Principles

// 1. Client Server Decoupling
// We want the front and back ends to be separated so they can be developed and scaled independantly,
// using the 5 HTTP requests to do so.
// GET | POST | DELETE | PUT | PATCH

// 2. Statelessness
// The requests must incorporate all data required by the server to perform its task, so it does not have to store,
// any information (state). The server should never need to hold information for future requests.  

// 3. Cacheability
// Both the client and server can maintain their own cache. Servers can hold commonly accessed data by
// multiple clients in cache, and clients can do the same for their own frequently recieved responses.

// 4. Uniform Interface
// Each client gets the same interface as well as the same data from the server. The same request for each client,
// will use the same url, and give the same result.

// 5. Layered System Architecture
// A layered architecture allows neither the server or client to directly know if they are communicating with the 
// other end or intermediaries, ensuring that seperation.

// Anatomy of API endpoint
// Endpoint: GET https://apiurl.com/posts/author/?limit=10&offset=20
// GET | HTTP Request Verb Type
// https://apiurl.com/ | Domain
// /posts/ | Route
// /author/ | Parameters (categories)
// /?limit=10&offset=20 | Query (filters)
// Hidden Part:
// body: {"author": "John"} // Data sent when required, is json format

// We can use Node.JS packages to locally test the REST API
// The below options are the mosy popular:
// - HttpYak (used in this course)
// - Postman

// How to use HttpYak for testing RESTful API'S:

// Setup
// 1. Install HttpYak Extnesion in VSCode
// 2. Create .http file in the root folder
// 3. Enter requests into that file (will also be saved within a repo for others to easily use too)
// 4. Press the "send" command above it
// 5. View results in opened file

// Settings (for the HttpYak extension)
// 1. Ensure "Response View Column" is set to "current"
// 2. Ensure "Response View Mode" is set to "open"



// -------- Express -------
// Minimal and flexible Node.js fraemwork that simplifies a lot of the server functionality
// It provides a simplified API for: Routing, Middleware, Error Handling, Templating Engines 

// Imports express and creates an Express app that recieves a GET request
const express = require("express");
const app = express(); 
const port = 3001; // Ports range from 0 -> 65,535  http://localhost:3001 (URL for listen)

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello World!");
}); // Creates a GET route ("/" listens to default URL: http://localhost:3001)

app.listen(port, () => {
    console.log("App listening on port: " + port);
}); // This stays running while it is connected (use "ctrl + c" to stop terminal running it)

// How it works:
// When a GET response is sent to for the Default URL (http://localhost:3001), is goes through this GET route,
// as it is set up to respond to it. The console then prints the request (data needed for server to know what
// to send back). It then responds with the return data, in this case that is "Hello World!". This app.listen 
// runs the server so that when any request is made, it makes sure to answer it. The app.get would not work 
// alone, but is ran when the server hears something sent to that port.

// ROUTING
// The following line demonstrates how to indicate a route/param/query (has to follow order)
app.get("/route/:param/:optional_param?/?key=value&key=param")

// BONUS ROUTING INFO: 
// 1. "/route?" makes the final character optional
// 2. "/route*" allows any characters to follow it
// 3. "/route/*" allows any sub route to be found
// 4. /.*fly$/ allows any routes that end with "fly" to be found

// Handle Routing Better By adding to a parent object in a file
const express = require("express");
const tasksRouter = express.Router();

tasksRouter.get("/tasks", (req, res) => {
    res.send("All Tasks");
});

module.exports = tasksRouter;

// Then importing it to a main file and attach to the app
const  tasksRouter = require("./tasks/tasks.router.js");
app.use("/", tasksRouter);

// MIDDLEWARE
// Creating and using MiddleWare
const middleWare = function (req, res, next) {
    req.info = {appname: "Tasks Manager", author: "Cloudaffle"};
    next();
}

app.use(middleWare)

// A path can be added to have this middleWare only work on specific URL's

// Good Defaults
app.use(express.json()); // Middleware that converts incoming request body into JSON format

// CONTROLLERS
// Controllers are unique files per entity (route) that controls what happens with the request, and gives
// a response. Much like having an individual router.js file for each entity/route, we then create a
// controller.js file for each type of entity/route, to handle responses in a more separated way

// Controller File Setup
function handleGetTasks(req, res) {
    res.send("GET Tasks Controller");
};
module.exports = { handleGetTasks };

// Router File Additions
const tasksController = require("./tasks.controller.js");
tasksRouter.get("/tasks", tasksController.handleGetTasks);

// This allows every single GET request for the tasks route to be processed in the controller







// --------- Activty Logging with Morgan Package --------
// Once Morgan is installed the following imports are required in the main file
const fs = require("fs");               // Node.js API
const path = require("path");           // Node.js API
const morgan = require("morgan");

// With the following code setting up the logging MiddleWare
let accessLogStream = fs.createWriteStream(path.join(__dirname, "..", "access.log"), { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

// This creates a writing stream to the joined path, and implements it as middleware



// ------- Cross Origin Resource Sharing (CORS) --------
// This ensures the safe access of API's. By default servers can only be accessed by the same origing (same
// site). CORS allows other origins (other sites) to sen requests to the server, which can then delegate if 
// access should be given. This is how public API's like google maps works.

// There is a CORS npm package that can be installed
// -> npm install CORS

// This is a package that sets this functionality up via a middleware, which can be used to give full access to
// the server, or limit it to specific origins
// E.G.
const corsOptions = { origin: ["example.com"] }; // Only allows requests from example.com | "*" allows all sites
app.use(cors(corsOptions)); // Adds the cors middleware 

// When releaseing a product, this should always contain your limited sites





// -------- Nodemon Package -------
// This package can be added as a dev dependency using npm and allows running apps to update while running
// I.e. Any changes made cause the app to restart for us, so we dont have to manually do it

// To set this up
// 1. Intall Nodemon as a dev dependency (npm i -D nodemon@X-X-X)
// 2. Add a dev script to the package to JSON ("dev": "nodemon src/index.js")
// 3. Run the app through this script (npm run dev)

// This essentially creates a dev version of running it that is quicker, whilst still allowing the 
// standard way of starting the app.




// ------- HTTP-Status-Codes Package --------
// This package allows you to access objects that handle the different status codes and their meaning
// E.G.
// StatusCodes.OK can be used instead of 200
// ReasonPhrases.OK can be used instead of the written message of this being a success
// Just used to make development clearer






// -------- Request / Response --------

// Anatomy of Request / Response
// 1. Request/Status Line | First line in HTTP request specifying method, url and protocol version. This
// indicating the action, resource and protocol used
// 2. Request/Response Headers | Metadata sent to provide additional context, including; content type, 
// authentication, client type and response preferences
// 3. Request/Response Body | The data sent to the server, such as form data or json with the POST or PUT
// methods.

// Response Line = HTTP/1.1 200 OK
// HHTP/1.1 | HTTP version of the server
// Status Code | 3 digit number representing the outcome, 200 representing success
// Reason Phrase | Human-readable answer textual description of the Status Code

// Status Code + (Most used of each type)

// 2XX Codes: Success
// 200 OK | Success and all requested data is there
// 201 Created | Request fulfilled, resource created
// 204 No Content | Success but no data is returned (not available)

// 3XX Codes: Redirection
// 301 Moved Permanently | URL of requested resource has permanently moved, returns the new URL
// 302 Found | Server is redirecting to a different temporary URL
// 304 Not Modified | Client can use the cache as the resource has not changed

// 4XX Codes: Client Error
// 400 Bad Request | Server will not process request (could be URL or syntax error)
// 401 Unauthorised | Authentication is required and not provided or failed
// 403 Forbidden | Server understand the request but refuses to authorise it
// 404 Not Found | Resoure could not be found on the server, but may exist later
// 409 Conflict | Request could not be completed due to the current state of the resource

// 5XX Codes: Server Error
// 500 Internal Server Error | General error for server failure
// 501 Not implemented | Server does nto understand request or canot fulfill it
// 503 Service Unavailable | Server currently unavailable (will happen suring maintenance)

// Key Components of Pipeline

// TO BE FILLED!

// 1. Response Formatter | Middleware that changes json response to contain status info




// -------- MONGO DATABASE --------
// This is a noSQL databse, meaning it is not tables and accessed with SQL, instead it is data files

// Advantages:
// Document-Oriented Storage | JSON like document storage, making it easier to read and integrate
// Schema Flexibility | Easily modified data structure that allows for easy model evolution
// Scalability | Sharding and replication make it great for large-scale, high-volume apps
// Development Speed | Faster to setup without need for rigid data structure, perfect for agile development

// ! DISCLAIMER
// Applications with high integrity as a requirement should not use a noSQL database, 
// these apps might be things like financial or booking services.

// MongoDB Connections
// You can connect to MongoDB in different ways, but this course uses the MongoDB Compass Software (GUI App)
// and MongoDB Shell (Custom Shell Command Line Tool)

// Using MongoDB
// 





// -------- Technologies --------
// Site to view most used technologies:
// Link: https://survey.stackoverflow.co/2021#technology-most-popular-technologies

