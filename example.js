// Example code
// if running in sources use:
// NODE_PATH=../mpu6050/.. node example.js
var MPU6050 = require("mpu6050");
var sensor = new MPU6050();

sensor.initialize( function(err) {
    if (err) { throw err; }
        sensor.testConnection( function(err, data) {
            if (err) { throw err; }
                sensor.getMotion6( function(err, data) {
                    if (err) { throw err; }
                    console.log('motion: ' + data);
                });
                sensor.getTemperature( function(err, data) {
                    if (err) { throw err; }
                    console.log('temperature: ' + data);
                });
        });
});

