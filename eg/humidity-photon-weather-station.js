var five = require("../");
var board = new five.Board();

board.on("ready", function() {
  var barometer = new five.Humidity({
    controller: "PHOTON_WEATHER_SHIELD"
  });

  barometer.on("change", function() {
    console.log("humidity");
    console.log("  percent     : ", this.relative);
    console.log("--------------------------------------");
  });
});