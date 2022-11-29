const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const errorTag = document.querySelector('#error-tag');
const locationTag = document.querySelector('#location-tag');
const forecastTag = document.querySelector('#forecast-tag');

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const location = searchElement.value;

	locationTag.textContent = '';
	forecastTag.textContent = '';

	fetch('/weather?address=' + encodeURIComponent(location)).then(
		(response) => {
			response.json().then((data) => {
				if (data.error) {
					errorTag.textContent = 'Unable to find location';
				} else {
					errorTag.textContent = `Use My site to get your weather!`;
					locationTag.textContent = data.location;
					forecastTag.textContent = data.forecast;
				}
			});
		}
	);
	searchElement.value = '';
});
