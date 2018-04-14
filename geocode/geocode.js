const request = require('request');

function geocodeAddress(address, callback) {
  const encodedAddress = encodeURIComponent(address);
  // Request takes two arguments (options, callback)
  // https://www.npmjs.com/package/request
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBrbTVAFbFHxscReX_Bgt-LnvPh_vwPbDQ&address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google services');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address/location');
    } else if (body.status === 'OK') {
      callback(undefined, {
        formatted_address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
};
