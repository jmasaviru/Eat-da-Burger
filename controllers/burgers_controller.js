// Importing Express
const express = require("express");
const router = express.Router();

// Importing burger.js Model
const burger = require("../models/burger.js");

// Creating the routes 
// GET method
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        console.log(data);
        var hbsObject = {burgers: data};
        console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST method
router.post("/api/burgers", (req,res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {
        console.log('Updated');
        res.json({id: result.insertId});
    });
});

// PUT method
router.put("/api/burgers/:id", (req,res) => {
    var condition = "id = " + req.params.id;
  
   console.log("condition", condition);

   burger.update({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows === 0){
         // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
  });
});

module.exports = router;