// var bodyParser = require('body-parser');
var express = require('express');
var path = require("path");
var friends = require('./app/data/friends.js');
// express make eassy for as using node js and we are setting variable app = to the function express so we can eassly call it
var app = express();
// whatever plot is define by the deployement side like heruku or 8080. This will work on local host and we don't have to reconfigure it whenever we have to deploy it in live
var PORT = process.env.PORT || 8080;

//  use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// parse application/x-www-form-urlencoded json form,it's is eassy to manipulate
// bodyParser - is allow us to recive our information back in 

// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

// app.use(bodyParser.json())




// api routing - from api_routs.js

require("./app/routing/apiRoutes.js")(app);
// to navigate html file - from html_routs.js
require("./app/routing/htmlRoutes.js")(app);





app.listen(PORT, function () {
  console.log("App listing to PORT:" + PORT);
});