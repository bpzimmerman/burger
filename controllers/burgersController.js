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
    // console.log(dispObj);
    res.render("index", dispObj);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(
    [
      {devoured: req.body.devoured == "true"},
      {id: req.params.id}
    ],
    function(result){
      console.log(result.changedRows);
      if (result.changedRows === 0){
        return res.status(404).end();
      };
      res.status(200).end();
    }
  );
});

// -----------------------------------------------------

// export routes for server.js to use
module.exports = router;