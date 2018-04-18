const yargs = require('yargs');
const axios = require('axios');

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

// **********

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBrbTVAFbFHxscReX_Bgt-LnvPh_vwPbDQ&address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('unable to find that address')
  }

  let latitude = response.data.results[0].geometry.location.lat;
  let longitude = response.data.results[0].geometry.location.lng;
  let weatherUrl = `https://api.darksky.net/forecast/f64538d78bcb20f01ffae5ccb6c7cc16/${latitude},${longitude}`

  console.log('location: ', response.data.results[0].formatted_address);

  return axios.get(weatherUrl)
}).then((response) => {

  function toCelsius(temperature) {
      return (5/9) * (temperature-32);
  };

  let temperature = Math.floor(toCelsius(response.data.currently.temperature));
  let apparentTemperature = Math.floor(toCelsius(response.data.currently.apparentTemperature));

  console.log(`it's currently ${temperature} degrees. It feels like ${apparentTemperature}`);
}).catch((error) => {
  if (error.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers');
  } else {
    console.log('error message: ', error.message);
  }
});
