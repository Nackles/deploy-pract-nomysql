// Dependencies
const express = require("express");
// Create instance of express app.
let path = require("path");
let app = express();

// Import Kayn
const { Kayn, REGIONS } = require("kayn");
let myConfig = {
  region: REGIONS.NORTH_AMERICA,
  apiURLPrefix: "https://%s.api.riotgames.com",
  locale: "en_US",
  debugOptions: {
    isEnabled: true,
    showKey: false
  },
  requestOptions: {
    shouldRetry: true,
    numberOfRetriesBeforeAbort: 3,
    delayBeforeRetry: 1000,
    burst: false,
    shouldExitOn403: false
  },
  cacheOptions: {
    cache: null,
    timeToLives: {
      useDefault: false,
      byGroup: {},
      byMethod: {}
    }
  }
};
const kayn = Kayn(process.env.RIOT_LOL_API_KEY)(myConfig);
const myID = process.env.ABSURDEST_LOL_SUMMONER_ID;
const myName = "wkek";
// kayn.Summoner.by.name("Absurdest").callback(function(err, summoner) {
//   console.log(summoner);
// });


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// ROUTES
// Simple home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/match", function(req, res){
  kayn.CurrentGame.by.summonerID(myID).callback(function(err, theGame) {
    if (theGame) {
      console.log("The Game: " + theGame);
      res.send(theGame)
    } else {
      res.send("Not in-game/other error found.");
    }
  });
});

app.get("/matchtest/", function(req, res){
  // summoner name is stored in req.query.search (from #name_to_search in index.html)
  // kayn calls Riot Summoner API with summoner name...
  kayn.Summoner.by.name(req.query.search).callback(function(err, summoner) {
    if (err) throw err;
    // ...and calls the Riot Spectator API with the returned summoner.id (among other returned information)
    kayn.CurrentGame.by.summonerID(summoner.id).callback(function(err, gameInfo){
      // if the summoner in question is in a game, send back the game information
      if (gameInfo) {
        res.json(gameInfo);
      } else {
        // or notify the user that the user is not in a game
        res.send("Specified user is not in a game.");
      }
    })

  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
