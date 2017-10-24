// dependencies
const express = require("express");
const bodyParser = require("body-parser");

// create express server
var app = express();

// set port process.env for deploying to heroku
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + 'app/public'));

// bodyParser helps our server to understand data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// initialize the routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// list on PORT
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});
