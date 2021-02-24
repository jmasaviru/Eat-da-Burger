// Import MYSQL connection
var connection = require("./connection.js");

// Object Relational Mapper
var orm = {
// Function to select all MySQL queries
all: (tableInput, cb) => {
  var queryAll = `SELECT * FROM ${tableInput};`
  connection.query(queryAll, (err, result) => {
   // console.log(result);
    if (err) throw err;
    cb(result);
})
},

// Function that creates new Burgers in menu
create: (tableInput, name, cb) => {
  var queryCreate = `INSERT INTO ${tableInput} (burger_name) VALUES ('${name}');`
  connection.query(queryCreate, (err, result)=>{
    // console.log(result);
    if (err) throw err;
    cb(result);
})
},

// Function to update burger as 'devoured'
update: (tableInput, id, devoured, cb)=> {
  var queryUpdate = `UPDATE ${tableInput} SET devoured = ${devoured}  WHERE id = ${id};`
  connection.query(queryUpdate, (err, result) => {
    if (err) throw err;
    console.log(result);
    cb(result);
  })
},

// Function to delete burger
delete: (tableInput, id, cb)=>{
  var queryDelete = `DELETE FROM ${tableInput} WHERE id = ${id};`
  connection.query(queryDelete, (err, result) => {
      if (err) throw err;
      cb(result);
  })
}
};


module.exports = orm;