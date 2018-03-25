// import mysql connection
var connection = require("../config/connection.js");

// orm object that queries the database based on the passed query string, escape array, and then runs the function to respond to the page request
var orm = {
  databaseQuery: function(query, escapes, response, cbFunc){
    connection.query(query, escapes, function(err, res){
      if (err) throw err;
      cbFunc(res, response);
    });
  }
};

// Export the orm object
module.exports = orm;