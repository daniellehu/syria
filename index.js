const express = require('express');  
const pug = require('pug');
const app = express();
require('dotenv').config()
const twitter = require('twitter');

var client = new twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});
app.set('view engine', 'pug');

app.get('/', function (req, res) {
	client.get('search/tweets', {q: '%23syria', result_type: 'recent'}, function(error, tweets, response) {
		if (error) console.log(error);
		res.send(pug.renderFile('views/index.pug', {
			tweets: tweets,
			response: response
		}));
	});
});

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!');
    });