const request = require('request');
const yargs = require('yargs');
const geocode = require('./utils/geocode');
const fetchWeather = require('./utils/fetch-weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    fetchWeather.fetchWeather(results.latitude, results.longitude, results.formatted_address, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    })
  }
});
