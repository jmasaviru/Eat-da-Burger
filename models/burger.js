// Import ORM to interact with DB
var orm = require("../config/orm.js");

var burger = {
  //Selecting all burgers
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  // Creating a new burger 
  create: (cols, vals, cb) => {
      orm.insertOne("burgers", cols, vals, (res) => {
          cb(res);
      });
  },
  // Updating a devoured burger
  update: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;