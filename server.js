// var bodyParser = require('body-parser');
var express = require('express');
var path = require("path");
var friends = require('./FriendFinder/app/data/friends');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));

//Express app 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./FriendFinder/app/../routing/apiRoutes")(app);

require("./FriendFinder/app/../routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listing to PORT:" + PORT);
});