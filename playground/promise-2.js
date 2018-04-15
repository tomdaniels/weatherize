const request = require('request')

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    // Request takes two arguments (options, callback)
    // https://www.npmjs.com/package/request
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBrbTVAFbFHxscReX_Bgt-LnvPh_vwPbDQ&address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google services');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address/location');
      } else if (body.status === 'OK') {
        resolve({
          formatted_address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
}

geocodeAddress('19146').then((location) => {
  console.log('result: ', JSON.stringify(location, undefined, 2));
}).catch((err) => {
  console.log('error: ', err)
});
