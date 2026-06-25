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





// -------- Technologies --------
// Site to view most used technologies:
// Link: https://survey.stackoverflow.co/2021#technology-most-popular-technologies

