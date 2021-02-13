var connection = require("../config/connection.js");

// Helper functions for MySQL syntax
function questionMarks(num) {
    var array = [];
    for (var i = 0; i < num; i++){
        array.push("?");
    }
    return array.toString();
}
// Helper function to convert Object key to SQL syntax
 function objToSql(ob) {
    var array = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
               value = "'" + value + "'";
            }
            array.push(key + "=" + value + "'")
        }
    }
    return array.toString()
}
// Object Relational Mapper
var orm = {
  selectAll: (tableInput, cb) => {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: (table, cols, vals, cb) => {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += questionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: (table, objColVals, condition, cb) => {
    var queryString ="UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
      console.log(queryString);
      connection.query(queryString,(err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };

module.exports = orm;