var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));	
});

app.get("/survery", function(req, res){
	res.sendFile(path.join(__dirname, "survery.html"))
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});