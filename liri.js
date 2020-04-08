require("dotenv").config();

var axios = require("axios");

var keys = require("./key.js");

var command1 = process.argv[2];
console.log(command1);
var command2 = process.argv[3];

switch (command1) {
    case "concert-this":
      getBands(command2);
      break;
    case "spotify-this-song":
      getSongs()
      break;
    case "movie-this":
      getMovies()
      break;
    case "do-what-it-says":
      doWhatItSays()
      break;
    default:
      break;
  }

  function getBands(value){
      var artist =  value;
      axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
      .then(function (response) {
        // console.log("Name of the venue:", response.data[0].venue);
        // console.log(response);
        console.log(response.data[0].venue.name)
            
        })
  }