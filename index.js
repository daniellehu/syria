require('./env.js'); // defines process.env variables to hide bearer key
const express = require('express');  
const pug = require('pug');
const app = express();
const request = require('request');
const addressValidator = require('address-validator');
var Address = addressValidator.Address;

/* Defining GET Request for Twitter: https://dev.twitter.com/rest/public/search 
 * Using App Auth: https://dev.twitter.com/oauth/application-only
 */
var twitter_request = "https://api.twitter.com/1.1/search/tweets.json?q=%23syria&result_type=recent&count=20"; 
var options = {
	url: twitter_request,
	headers: {
		'Authorization': "bearer " + process.env.TWITTER_BEARER_TOKEN
	}
};

app.set('view engine', 'pug');

// defines path for when you go to localhost:3000/
app.get('/', function (req, res) {
	// make a GET request for Twitter's API
	request(options, function(error, response, body) {
		// successful GET request
		if (!error && response.statusCode == 200) {
			// from Twitter's API, you'll get a JSON of the data
			var info = JSON.parse(body);
			// render the pug file index.pug for views AND pass in a 
			// parameter through tweets containing Twitter info
			res.send(pug.renderFile('views/index.pug', {
				tweets: info
			}));
		} else console.log(error);
	});
});

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!');
    });