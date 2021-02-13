var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // Inserting a new burger 
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) =>{
            cb(res);
        });
    },
    // Updating a devoured burger
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
          cb(res);
        });
    },
    // Deleting a burger
    deleteOne: (condition, cb) => {
        orm.deleteOne("burgers", condition, (res) => {
          cb(res);
        });
    },
};

module.exports = burger;

