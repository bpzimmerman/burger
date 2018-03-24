// import mysql connection
var connection = require("../config/connection.js");

var orm = {
  databaseQuery: function(query, update, cb){
    connection.query(query, update, function(err, res){
      if (err) throw err;
      cb(res);
    });
  }
};

// Export the orm object
module.exports = orm;