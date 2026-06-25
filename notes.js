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








// -------- Technologies --------
// Site to view most used technologies:
// Link: https://survey.stackoverflow.co/2021#technology-most-popular-technologies

