// Importing Express
const express = require("express");
const router = express.Router();

// Importing burger.js Model
const burger = require("../models/burger.js");

// Creating the routes for burgers
// GET method
router.get("/", (req, res) => {
    burger.all((data) => {
        console.log(data);
        var hbsObject = {burgers: data};
        console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST method for new burger in the menu
router.post("/", (req,res) => {
    burger.create(["burger_name"], [req.body.burger_name], (result) => {
        console.log('Updated');
        res.redirect("/");
    });
});

// PUT method to update menu
router.put("/:id", (req,res) => {
    var condition = "id = " + req.params.id;
  
   console.log("condition", condition);

   burger.update({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows == 0){
         // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
   });
});

// Delete Burger from menu
router.delete("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;