// Create & Export MYSQL connections
var mysql = require("mysql");

// Connection to MYSQL db & Heroku connection
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Ma$terviru6",
      database: "burgers_db",
    });
  }

  // Initiate MySQL Connection
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use
module.exports = connection;