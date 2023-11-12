//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a7ee0c913msh412663ffba474e0p1dd6c3jsnc3e76737fb88',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const getWeather=(city) =>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                //throw new Error('City not found or another error occurred.');
                alert("City not found. Please enter a valid city name.");

            }
        })
    .then(response => {
        if (response.error) {
            // Handle specific error message from the API
            // For example, update the UI to show that the city wasn't found
            alert("City not found. Please enter a valid city name.");
        } else {
        
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        }
    })
    .catch(err => {
        console.error(err);
    });
}

submit.addEventListener("click", (e) =>{
    //it will help preventing the page to be reloaded
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Connecticut")