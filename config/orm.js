// Import MYSQL connection
var connection = require("../config/connection.js");

// Helper functions for MySQL syntax
function questionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert Object key to SQL syntax
 function objToSql(ob){
    var arr = [];
    for (var key in ob) {
      var value = ob[key];

      // Skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)){
        // Add quotes for spaced string
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value)
      }
    }
    // Array of strings translated into one string
    return array.toString()
  }
  // Object Relational Mapper
  var orm = {
    all: (tableInput, cb) => {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // Function that creates new Burgers in menu
    create: (table, cols, vals, cb) => {
      var queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += questionMarks(vals.length);
      queryString += ") ";
      
      console.log(queryString);
      connection.query(queryString, vals, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    // Function to update existing burger
    update: (table, objColVals, condition, cb) => {
      var queryString ="UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    // Function to delete burger
    delete: (table, condition, cb) => {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };

module.exports = orm;