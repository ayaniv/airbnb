var Twitter = require('twitter');
var _ = require('lodash');
var moment = require('moment');
var json2csv = require('json2csv');
var fs = require('fs');
require('dotenv').config();

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
});

function searchTweetsFromLast24HoursAndSaveCsvFile(mention, filename) {
    var allTweets = [];
    var maxId = undefined;
    var last24HoursDate = moment.utc().add(-24, 'hours');
    var params = {q: mention + ' since:' + last24HoursDate.format('YYYY-MM-DD'), max_id: maxId, count: 100};

    function SaveCsvFile() {
        var csv = json2csv({data: allTweets});
        fs.writeFile(filename, csv, function (err) {
            if (err) {
                throw err;
            }
            console.log('file saved: ' + filename);
        });
    }

    function successCallback(error, tweets, response) {
        try {
            if (error) {
                throw error;
            }
            if (tweets.statuses.length > 0) {
                // aggregate the tweets
                allTweets = _.concat(allTweets, tweets.statuses);
                // print progress
                console.log(params.max_id, allTweets.length);
                // take the last id
                maxId = allTweets[allTweets.length - 1].id;
                params.max_id = maxId;
                // make a call to twitter api
                client.get('search/tweets', params, successCallback);
            } else {
                console.log("total tweets:", allTweets.length);
                allTweets = _.filter(allTweets, function (tweet) {
                    var tweetDate = new Date(tweet.created_at.toString());
                    tweetDate = moment(tweetDate);
                    return (moment.utc().diff(tweetDate, 'hours') < 24);
                });

                console.log("24 hours filtered:", allTweets.length);
                SaveCsvFile();
            }
        } catch (err) {
            console.error(err);
        }
    }

    client.get('search/tweets', params, successCallback);
}

searchTweetsFromLast24HoursAndSaveCsvFile("@airbnb", "file.csv");

