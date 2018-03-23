var express = require("express");

var router = express.Router();

// import the burger.js model to use its database functions
var burger = require("../models/burger.js");

// -----------------------------------------------------

router.get("/", function(req, res){
  burger.all(function(data){
    var dispObj = {
      burgers: data
    };
    console.log(dispObj);
    res.render("index", dispObj);
  });
});

// -----------------------------------------------------

// export routes for server.js to use
module.exports = router;