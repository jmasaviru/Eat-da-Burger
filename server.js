// Use Express, Handlebars & MySQL
var express = require('express');
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 3000;

// Parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars as main HTML file
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes to connect burgers_controller.js file
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start server to listen to client requests
app.listen(PORT, function () {
    // Notification to confirm server 
    console.log("Server listening on: http://localhost:" + PORT);
  });
