// require the node modules
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// import routes
var routes = require("./controllers/burgersController.js");

// create the express app
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static content for the app from the "public" directory
app.use(express.static("public"));

// sets up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// give the server access to the routes
app.use(routes);

// opens the local server
app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost: ${PORT}`);
});