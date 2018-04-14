const request = require('request');

// takes two arguments (options, callback)
// https://www.npmjs.com/package/request
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBrbTVAFbFHxscReX_Bgt-LnvPh_vwPbDQ&address=100%20harris%20street%20pyrmont',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
