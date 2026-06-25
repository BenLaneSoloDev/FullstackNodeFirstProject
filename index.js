const fs = require("fs");  

fs.readFile("example.txt", "utf8", (err, data) => {
    if(err) {
        console.log("Error reading the file: " + err);
        return;
    }
    console.log("File contains: " + data);
});

const content = "Hello, world!";
fs.writeFile("example.txt", content, (err) => {
    if(err) {
        console.log("Error writing to file: " + err);
    } 
    console.log("File written to successfully");
});

fs.rename("example.txt", "new_example.txt", (err) => {
    if(err) {
        console.log("Error renaming file: " + err);
    } 
    console.log("File renamed successfully");
});