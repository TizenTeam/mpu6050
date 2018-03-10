var MPU6050 = require("index.js");

var sensor = new MPU6050();
console.log("sensor: ");

sensor.initialize();
sensor.getAcceleration(function(err, res) {
    if (!err) console.log(res);
  });


// sensor.initialize( function(err) {
//     console.log("sensor: ");
//     if (!err) {
//       sensor.getAcceleration(function(err, res) {
//           if (!err) console.log(res);
//         });
//     }
//   });


