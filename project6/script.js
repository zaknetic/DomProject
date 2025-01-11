const getWeather = () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = '8ff8dd7d0acf76e9735dd901f35b19e2'
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then((res => res.json()))
    .then(data => {
    
        const weatherInfo = document.getElementById('weatherInfo');
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const cityName = data.name;

        weatherInfo.innerHTML = `
        <h2> City Name:${cityName} </h21>
        <p> Description: ${description}</p>
        <p> Temperature: ${temperature} &#8451</p>
        <p> Humidity: ${humidity}%</p>
        <p> Wind Speed: ${windSpeed} m/s</p>

        `
    })
    .catch(error =>{
        console.error('Sorry City not found!',error)
        document.getElementById('weatherInfo').textContent ='City Not Found!';
    })

};