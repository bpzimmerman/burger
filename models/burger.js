// import the ORM
var orm = require("../config/orm.js");

// -----------------------------------------------

var burger = {
  all: function(cbArg){
    orm.selectData("burgers", cbArg);
  },
  update: function(updateArr, cbArg){
    updateArr.unshift("burgers");
    orm.updateData(updateArr, cbArg);
  },
  add: function(updateArr, cbArg){
    updateArr.unshift("burgers");
    orm.addData(updateArr, cbArg);
  }
};

// -----------------------------------------------

// Export the database functions for the controller (catsController.js).
module.exports = burger;