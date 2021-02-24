// Importing Express
var express = require("express");
var router = express.Router();

// Importing burger.js Model
const burger = require("../models/burger.js");

// Creating the routes for burgers
// GET method
router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObj = {burgers: data};
        console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

//POST method for new burger in the menu
router.post("/api/burgers", (req, res) => {
    burger.create(`${req.body.name}`, function (response) {
        console.log('Updated');
        res.status(200).end();
    });
});

// PUT method to update menu
router.put("/api/burgers/:id", (req, res) => {

    var id = req.params.id;
  
   console.log("the id is" + id);
   console.log(req.body.devoured);
   burger.update(id, req.body.devoured, (result) => {
    if (result.changedRows == 0){
         // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        return res.status(200).end();
      }
   });
});

// Delete Burger from menu
router.delete("/api/burgers/:id", (req, res) => {
  var id = req.params.id;

  burgers.delete(id, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;