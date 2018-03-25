// sets up mysql
var mysql = require("mysql");

// creates the mysql connection
var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
    port: 3307
  });
};

// connects to mysql
connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  };

  console.log(`connected as id ${connection.threadId}`);
});

// exports the connection
module.exports = connection;