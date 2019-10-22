// Dependencies
var express = require("express");
// Create instance of express app.
var path = require('path');
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Simple home page
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "mainpage.html"));
})

// Added a comment


// Routes
app.get("/another-route", function(req, res) {
    res.sendFile(path.join(__dirname, "anotherroute.html"));
  });

app.get("/how-cool-is-express", function(req, res) {
    res.sendFile(path.join(__dirname, "expressiscool.html"));
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
