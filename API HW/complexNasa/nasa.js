// Goal: Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently.
const list = document.querySelector('#list')
fetch('https://data.nasa.gov/resource/gvk9-iz74.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    
    for (let i=0; i < data.length; i++){
      let name = data[i].facility
      let lon = data[i].location.longitude
      let lat = data[i].location.latitude
      
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=967da49d39f9b56a873a073d30ca6f68&units=imperial`)
        .then (res => res.json())
        .then (weatherData => {
           console.log(weatherData)
           let tempLow = weatherData.main.temp_min
           let tempHigh = weatherData.main.temp_max
                const li = document.createElement('li')
                li.innerText = `Facility Name: ${name}, Latitude: ${lat}, Longitude: ${lon}, There is a high of ${tempHigh} \u00B0F and low of ${tempLow} \u00B0F`                                  
                
                list.appendChild(li)  
        })
        .catch(err => {
            console.log(err)
         })
    } 
})
.catch(err => {
    console.log(err)
 })

 

     
