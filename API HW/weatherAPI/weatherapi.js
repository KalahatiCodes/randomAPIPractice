
let weather = () => {
   let cityName = document.querySelector('#cityName').value
   let countryCode = document.querySelector('#countryCode').value
   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=1&appid=967da49d39f9b56a873a073d30ca6f68`)
      .then(res => res.json())
      .then(locationData =>{
         console.log(locationData)
         let lat = locationData[0].lat
         let lon = locationData[0].lon
         
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=967da49d39f9b56a873a073d30ca6f68&units=imperial`)
         .then (res => res.json())
         .then (weatherData => {
            console.log(weatherData)
            let feelsLike = weatherData.main.feels_like
            // let humidity = weatherData.main.humidity
            let tempLow = weatherData.main.temp_min
            let tempHigh = weatherData.main.temp_max
           
      
            document.querySelector('h2').innerText = `Today in ${cityName} it feels like ${feelsLike} \u00B0F. There is a high of ${tempHigh} \u00B0F and low of ${tempLow} \u00B0F .`
         })
         
    })
   .catch(err => console.log(err))
}

document.querySelector('button').addEventListener('click', weather)

