const friends = require("../data/friend.js");

// function for getting the total score of a user or friend
var getScoreTotal = (scores) => {
	var scoreTotal = 0;
	for (var i = 0; i < scores.length; i++) {
		scoreTotal += parseInt(scores[i]);
	}
	return scoreTotal;
};

// export the app to be used by express server
module.exports = (app) => {
	app.get('/api/friends', (req, res) => {
		// send all friends to the client as JSON object
		res.json(friends);
	});
	// find friend match when POST method is called on the /api/friends route
	// from the survey page
	app.post('/api/friends', (req, res) => {
		// get the user's score
		var userScore = getScoreTotal(req.body.scores);
		// define variable to hold bestFriend object to respond to client with
		var bestFriend;
		// set best friendScore far above max possible score so that
		// eveny friend will be checked
		var bestFriendScore = 1000;
		// loop through all friends
		for (var i = 0; i < friends.length; i ++) {
			// get the friend's scoreTotal
			var friendScore = getScoreTotal(friends[i].scores);
			// get the absolute value of the difference between user
			// and friend
			var matchScore = Math.abs(userScore - friendScore);
			console.log(friends[i].name, matchScore)
			// if matchScore is less than current best friend score then...
			if (matchScore <= bestFriendScore) {
				// set bestFriendScore to the friend's matchScore
				bestFriendScore = matchScore;
				// set the bestFriend to the friend with the closer matchScore
				bestFriend = friends[i];
			}
		}

		// push the user's info to the friends array
		friends.push(req.body);
		// send bestFriend JSON object as response to be used in client
		res.json(bestFriend);
	});
};
