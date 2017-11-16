// /*
// *	Load Required Node Modules
// */

// Loads the twitter node
var Twitter = require('twitter');
// loads spotify node
var spotify = require('spotify');
// This was just a guess, really.
var omdb = require('omdb');

/*
 *	Load the user Twitter keys? I guess? This shouldn't not work, but it doesn't, and I can't figure out why?
 */

var keys = require('./keys.js');
var twitterKeys = keys.twitterKeys;

/*
 * 	Read in command line arguments
 */

// Read in the command line arguments
var orders = process.argv;

// The LIRI command will always be the second command line argument
var liriCommand = process.argv[2];

// The parameter to the LIRI command may contain spaces In theory. In practice? Not so much.
// var liriArg = '';
// for (var i = 3; i < orders.length; i++) {
//   liriArg += orders[i] + ' ';
// }
// I flew too close to the sun, and was burnt.
// if (liriCommand === 'mytweets') {
//   retrieveTweets();

if (liriCommand === `songsearch`) {
  function spotifySong() {

    // If no song is provided, LIRI defaults to 'The Sign' by Ace Of Base
    var search;
    if (process.argv[3] === '') {
      search = 'The Sign Ace Of Base';
    } else {
      search = process.argv[3];
    }


    spotify.search({
      type: 'track',
      id: '2a43efaa731640f7993c8b9e4bdbbcbd',
    }, function(err, data) {
      if (err) {
        console.log('Error occurred: ' + err);
        var songInfo = data;
        JSON.stringify(songInfo);
        console.log(songInfo);
      }
    });
  }

} else if (liriCommand === `movies`) {
  function retrieveOMDBInfo(process.argv[3]);

  var search;
  if (process.argv[3] === '') {
    search = 'Mr. Nobody';
  } else {
    search = process.argv[3];
  }

  // Replace spaces with '+' for the query string
  search = search.split(' ').join('+');

  // Construct the query string
  var queryStr = 'http://www.omdbapi.com/?t=' + search + ' "&y=&plot=short&apikey=40e9cece";';

  // Send the request to OMDB
  request(queryStr, function(error, response, body) {
    var data = JSON.parse(body);
    JSON.stringify(data);
    console.log(data);
  });
}
}


// If the user types in a command that LIRI does not recognize, output the Usage menu
// which lists the available commands.

// // retrieveTweets will retrieve my last 20 tweets and display them together with the date. If it worked, which it doesn't.
// function retrieveTweets() {
//   // Append the command to the log file
//
//   // Initialize the Twitter client
//   var client = new Twitter(twitterKeys);
//   console.log(twitterKeys);
//   // Set the 'screen_name' to my Twitter handle
//   var username = {
//     screen_name: 'AMfellman'
//   };
//
//   // Retrieve the last 20 tweets
//   client.get('statuses/user_timeline.json', username, function(error, response) {
//     if (error) {
//       // So it does pick up my username
//       console.log(username);
//       // Tells me that I have an invalid authorization, even though I checked with twitter and I shouldn't.
//       console.log(error);
//       // I discovered this, and had hoped that this would be more useful than console logging. It was not.
//       // fs.appendFile('./log.txt', errorStr, (err) => {
//       //   if (err) throw err;
//       // }); {
//       // All pretty academic at this point.
//       var outputStr = '------------------------\n' +
//         'User Tweets:\n' +
//         '------------------------\n\n';
//
//       for (var i = 0; i < tweets.length; i++) {
//         outputStr += 'Created on: ' + tweets[i].created_at + '\n' +
//           'Tweet content: ' + tweets[i].text + '\n' +
//           '------------------------\n';
//       }
//
//       // I'm not proud, but it is where I'm at.
//     }
//   }); This was working, for a given value of not working, but then it didn't work at all, so I commented it out.
