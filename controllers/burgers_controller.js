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
    burger.insertOne('burger_name', [req.body.burger_name], result => {
        console.log('Updated');
        res.redirect("/");
    });
});

// UPDATE method
router.put("/api/burgers/:id", (req,res) => {
    var condition = "Id = " + req.params.id;
  
   console.log("condition", condition);

   burger.updateOne({ devoured: true }, condition, (result) => {
    if (result.changedRows == 0){
         // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
  });
});

// DELETE method
router.delete("/api/burgers/:id", (req,res) => {
    var condition = "Id = " + req.params.id;

    burger.deleteOne(condition, (result) => {
        if (result.affectedRows == 0) {
           // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }); 
});

module.exports = router;

