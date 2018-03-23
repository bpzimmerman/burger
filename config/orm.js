// import mysql connection
var connection = require("../config/connection.js");

// ---------------------------------------------------

var orm = {
  selectData: function(tbl_input, cb){
    var queryStr = "SELECT * FROM ??";
    connection.query(queryStr, [tbl_input], function(err, res){
      if (err) throw err;
      cb(res);
    });
  }
};

// ---------------------------------------------------

// Export the orm object
module.exports = orm;