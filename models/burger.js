// import the ORM
var orm = require("../config/orm.js");

// -----------------------------------------------

var burger = {
  all: function(cbArg){
    orm.selectData("burgers", cbArg);
  }
};

// -----------------------------------------------

// Export the database functions for the controller (catsController.js).
module.exports = burger;