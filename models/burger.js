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
  create: (name, cb) => {
      orm.create("burgers", name, (res) => {
          cb(res);
      });
  },

  // Updating a devoured burger
  update: (id, devoured, cb) => {
    orm.update("burgers", id, devoured, (res) => {
      cb(res);
    });
  },

  // Deleting a burger 
  delete: (id, cb) => {
    orm.delete("burgers", id, (res) => {
      cb(res);
    });
  }
};

// Export database functions
module.exports = burger;