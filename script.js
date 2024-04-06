// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ca4847ebcamsh23ef14f85c50039p1c61c9jsn02f44df51d82',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
//     .then(response=>response.json())
//     .then(data=>console.log(data))

// // const options = {
// //         method: 'GET',
// //         headers: {
// //             'X-RapidAPI-Key': 'ca4847ebcamsh23ef14f85c50039p1c61c9jsn02f44df51d82',
// //             'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
// //         }
// // };
// // fetch('https://openweather43.p.rapidapi.com/weather?q=Rajkot&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=da0f9c8d90bde7e619c3ec47766a42f4&units=standard', options)
// //     .then(response=>response.json())
// //     .then(data=>console.log(data))
// /**
//  * Weather App
//  * TODO: Complete getWeatherData() to return json response Promise
//  * TODO: Complete searchCity() to get user input and get data using getWeatherData()
//  * TODO: Complete showWeatherData() to set the data in the the html file from response
//  */

// /* DIV ID's you'll need access to 👇
// "city-name"
// "weather-type"
// "temp"
// "min-temp"
// "max-temp"
// */

// // API_KEY for maps api
// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// /**
//  * Retrieve weather data from openweathermap
//  * HINT: Use fetch()
//  * HINT: URL should look like this: 
//  * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
//  */
// getWeatherData = (city) => {
//   const URL = "https://api.openweathermap.org/data/2.5/weather";
//   //HINT: Use template literals to create a url with input and an API key

//   //CODE GOES HERE
// }

// /**
//  * Retrieve city input and get the weather data
//  * HINT: Use the promise returned from getWeatherData()
//  */
// const searchCity = () => {
//   const city = document.getElementById('city-input').value;
//   // CODE GOES HERE

// }

// /**
//  * Show the weather data in HTML
//  * HINT: make sure to console log the weatherData to see how the data looks like
//  */
// const showWeatherData = (weatherData) => {
//   //CODE GOES HERE
  
// }

const apikey = "6a19c546e810f5e2c1f8c6116e3e9123";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".button");

// const getWeather = (city)=>{
//   fetch(`${url}` + `${city}` + `&appid=${apikey}`)
//   .then(response => response.json())
//   .then((response) =>{
//     console.log(response);
//   })
//       document.querySelector(".City").innerHTML = data.name;
//       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//       document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

// }
// searchBtn.addEventListener("click",()=>{
//   getWeather(searchBox.value);
// })

async function getWeather(city){
  const response = await fetch(url + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".City").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".temp-min").innerHTML = data.main.temp_min + "°C";
  document.querySelector(".temp-max").innerHTML = data.main.temp_max + "°C";
  
}
searchBtn.addEventListener("click",()=>{
  getWeather(searchBox.value);
})
