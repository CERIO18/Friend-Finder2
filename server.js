var express = require('express');
var path = require("path");
var friends = require('./app/data/friends.js');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));

//Express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
  console.log("App listening to PORT:" + PORT);
});