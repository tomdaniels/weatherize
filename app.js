const request = require('request');

// takes two arguments (options, callback)
// https://www.npmjs.com/package/request
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBrbTVAFbFHxscReX_Bgt-LnvPh_vwPbDQ&address=2%20redfern%20place%20gymea',
  json: true
}, (error, response, body) => {
  console.log(body);
});
