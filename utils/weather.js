const request = require('request');

function fetchWeather(latitude, longitude, callback) {
  request({
    url: `https://api.darksky.net/forecast/f64538d78bcb20f01ffae5ccb6c7cc16/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        feelsLike: body.currently.apparentTemperature
      });
    } else {
      console.log(response);
      callback('Unable to fetch weather');
    }
  });
};

module.exports = {
  fetchWeather
};
