const request = require('request');

function geocodeAddress(address) {
  // Request takes two arguments (options, callback)
  // https://www.npmjs.com/package/request
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBrbTVAFbFHxscReX_Bgt-LnvPh_vwPbDQ&address=${address}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to Google services');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find that address/location');
    } else if (body.status === 'OK') {
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });
}

module.exports = {
  geocodeAddress
};
