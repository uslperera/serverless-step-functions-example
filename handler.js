'use strict';
const AWS = require('aws-sdk');
var stepfunctions = new AWS.StepFunctions();

module.exports.startTimer = (event, context, callback) => {
  try {
    console.log("Start timer");

    var params = {
      stateMachineArn: process.env.TIMER_ARN,
      input: {}
    };

    stepfunctions.startExecution(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log("Timer started");
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: "Timer started"
          }),
        };
        callback(null, response);
      }
    });
  } catch (error) {
    console.log(error);
    callback(error);
  }
};


module.exports.sendNotification = (event, context, callback) => {
  try {
    console.log("Time is up!!");
    console.log("Sending notification");
    //Sending notification code
  } catch (error) {
    console.log(error);
    callback(error);
  }
};