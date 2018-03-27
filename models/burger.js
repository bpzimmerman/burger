// import the ORM
var orm = require("../config/orm.js");

// burger object that adds the table to the escape array and sets the query string based on the rte argument then calls the databaseQuery function in orm object (located in orm.js)
var burger = {
  table: "burgers",
  update: function(rte, escapeArr, response, cbFunc){
    var queryStr = "";
    escapeArr.unshift(this.table);
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
    orm.databaseQuery(queryStr, escapeArr, response, cbFunc);
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;