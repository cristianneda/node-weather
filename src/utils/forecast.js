const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url =
		'https://api.open-meteo.com/v1/forecast?latitude=' +
		encodeURIComponent(latitude) +
		'&longitude=' +
		encodeURIComponent(longitude) +
		'&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,shortwave_radiation_sum&current_weather=true&timezone=Europe%2FBerlin&start_date=2022-11-20&end_date=2022-11-25';

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service', undefined);
		} else if (body.error) {
			callback('Unable to find location', undefined);
		} else {
			callback(
				undefined,
				'We have ' +
					body.current_weather.temperature +
					' Celsius with a wind speed of ' +
					body.current_weather.windspeed +
					' Km/h, wind direction is: ' +
					body.current_weather.winddirection
			);
		}
	});
};

module.exports = forecast;
