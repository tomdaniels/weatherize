const request = require('request');
const yargs = require('yargs');

const argv = yargs
// options takes object of command line set up.
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'the full address to fetch weather for',
      string: true
    }
  })
  .help() // enables --help option in terminal
  .alias('help', 'h') // two arguments. Actual command and new alias.
  .argv;

  var userInput = argv.address;
  var address = encodeURIComponent(userInput);
// takes two arguments (options, callback)
// https://www.npmjs.com/package/request
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBrbTVAFbFHxscReX_Bgt-LnvPh_vwPbDQ&address=${address}`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
