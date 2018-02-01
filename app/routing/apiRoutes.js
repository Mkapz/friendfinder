var express = require('express');
var router = express.Router();
var path = require("path");

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

var friends = require("../data/friends");

router.get("/api/friends", function (req, res) {

	res.json(friends);

});

router.post("/api/friends", function (req, res) {

	var newFriend = req.body;

	friends.push(newFriend);

	var match = compareFriends();

	res.json(match);




});

function compareFriends() {
	var compareDiff = 500;
	var compareScore = [];
	var totalDiff = 0;
	var newDiff = 0;
	var matchIndex = 0;


	//Grab scores of current user.
	var currentIndex = friends.length - 1;
	var currentScore = friends[currentIndex].scores;

	//Go through array of friends (not including current user...
	for (var i = 0; i < currentIndex; i++) {

		//Set variables to 0 for new comparison.
		totalDiff = 0;
		newDiff = 0;

		//Set compared score to a variable.
		compareScore = friends[i].scores;

		//compares score of current user to the score of the friend in the array.
		for (var ind = 0; ind < compareScore.length; ind++) {

			var num1 = currentScore[ind];
			var num2 = compareScore[ind];

			if (num1 > num2) {
				totalDiff = num1 - num2;
			}
			else {
				totalDiff = num2 - num1;
			};

			newDiff = newDiff + totalDiff;

		};

		if (newDiff < compareDiff) {
			compareDiff = newDiff;
			matchIndex = i;
		};
	};

	return friends[matchIndex];

};

module.exports = router;