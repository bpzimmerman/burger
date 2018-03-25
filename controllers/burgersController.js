var express = require("express");

var router = express.Router();

// import the burger.js model to use its database functions
var burger = require("../models/burger.js");

// response function for the api routes
var apiResponse = function(result, response){
  if (result.affectedRows === 0){
    return response.status(404).end();
  };
  response.status(200).end();
};

// get route to load the initial page -- the * allows any single / to load the main page (e.g. /, /home, etc.) -- adding a second level will cause the application css and js to not load (e.g. /home/index, etc.)
router.get("*", function(req, res){
  var arr = [];
  // calls the update function in burger object (located in burger.js)
  burger.update(
    // route argument
    "get",
    // array containing the escapes (minus the table) for the query string
    arr,
    // get response as an argument
    res,
    // function that responds to the page request
    function(result, response){
      var dispObj = {
        burgers: result
      };
      response.render("index", dispObj);
    }
  );
});

// put route to change the 'devoured' boolean for an existing burger - the basic structure of all the routes is the same - see comments for the get route
router.put("/api/burgers", function(req, res){
  burger.update(
    "put",
    [
      // this will force the value of the 'devoured' property to be a boolean rather than a string
      {devoured: req.body.devoured == "true"},
      {id: req.body.id}
    ],
    res,
    apiResponse
  );
});

// post route to add a new burger to the list - the basic structure of all the routes is the same - see comments for the get route
router.post("/api/burgers", function(req, res){
  burger.update(
    "post",
    [
      {burger_name: req.body.name}
    ],
    res,
    apiResponse
  );
});

// delete route to completely remove a burger from the list - the basic structure of all the routes is the same - see comments for the get route
router.delete("/api/burgers", function(req, res){
  burger.update(
    "delete",
    [
      {id: req.body.id}
    ],
    res,
    apiResponse
  );
});

// export routes for server.js to use
module.exports = router;