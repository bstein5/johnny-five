var five = require("../lib/johnny-five.js");
var board = new five.Board();

board.on("ready", function() {
  var temperature = new five.Temperature({
    controller: "PHOTON_WEATHER_SHIELD"
  });

  temperature.on("change", function() {
    console.log("temperature");
    console.log("  celsius      : ", this.celsius);
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("  kelvin       : ", this.kelvin);
    console.log("--------------------------------------");
  });
});

// @markdown
// - Photon Weather Shield - Weather Shield with Temperature Sensor](https://www.sparkfun.com/products/13630)
// @markdown
