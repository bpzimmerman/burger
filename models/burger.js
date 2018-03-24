// import the ORM
var orm = require("../config/orm.js");

var burger = {
  table: "burgers",
  update: function(rte, updateArr, cbArg){
    var queryStr = "";
    updateArr.unshift(this.table);
    switch (rte){
      case "get":
        queryStr = "SELECT * FROM ??";
        break;
      case "put":
        queryStr = "UPDATE ?? SET ? WHERE ?";
        break;
      case "post":
        queryStr = "INSERT INTO ?? SET ?";
        break;
      case "delete":
        queryStr = "DELETE FROM ?? WHERE ?";
    }
    orm.databaseQuery(queryStr, updateArr, cbArg);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;