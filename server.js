// Use Express
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// Set up the public directory for the app
app.use(express.static("public"));

// Parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Handlebars
const exphbs = require("express-handlebars");

// Set handlebars as main HTML file
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect burgers_controller.js file


