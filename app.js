const request = require('request');
const yargs = require('yargs');

const argv = yargs
// options takes object of command line set up.
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'the address/location to fetch weather for',
      string: true
    }
  })
  .help() // enables --help option in terminal
  .alias('help', 'h') // two arguments. Actual command and new alias.
  .argv;

  var address = encodeURIComponent(argv.address);
// takes two arguments (options, callback)
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
