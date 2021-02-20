// Import ORM to interact with DB
var orm = require("../config/orm.js");

var burger = {
  //Selecting all burgers
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },

  // Creating a new burger 
  create: (cols, vals, cb) => {
      orm.create("burgers", cols, vals, (res) => {
          cb(res);
      });
  },

  // Updating a devoured burger
  update: (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },

  // Deleting a burger 
  delete: (condition, cb) => {
    orm.delete("burgers", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;