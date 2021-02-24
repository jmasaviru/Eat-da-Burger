// Use Express, Handlebars & MySQL
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

// Set handlebars as main HTML file
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

// Parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes to connect burgers_controller.js file
var routes = require("./controllers/burgers_controller")
app.use(routes);

// Start server to listen to client requests
app.listen(PORT, ()=>{
  // Notification to confirm server 
  console.log("Server listening on port " + PORT)
});




