const request = require('request');

function fetchWeather(latitude, longitude, address, callback) {
  request({
    url: `https://api.darksky.net/forecast/
    f64538d78bcb20f01ffae5ccb6c7cc16/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        location: address,
        temperature: body.currently.temperature,
        feelsLike: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports = {
  fetchWeather
};
