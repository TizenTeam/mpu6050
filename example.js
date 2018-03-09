var MPU6050 = require("index.js");

var sensor = MPU6050();
console.log("sensor: ");

sensor.initialize( function() {
    console.log("sensor: ");
  });

