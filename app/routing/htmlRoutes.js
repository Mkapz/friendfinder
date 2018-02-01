var express = require('express');
var router = express.Router();
var path = require("path");

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.get("/survey", function (req, res) {

	console.log("get survey");

	res.sendFile(path.join(__dirname, "../public/survey.html"));

});

router.get("/", function (req, res) {

	res.sendFile(path.join(__dirname, "../public/home.html"));

});

module.exports = router;