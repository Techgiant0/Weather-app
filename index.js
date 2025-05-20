let city = document.getElementById('city');
let search = document.getElementById('search');
let weatherIcon = document.getElementsByClassName('weather-icon')
let temp = document.getElementsByClassName('temp')
let condition = document.getElementsByClassName
search.addEventListener('click', () => getWeather(city)); 

async function getWeather(cityElement){
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityElement.value}&appid=7a09e0b8e571f08263afa200a104ba8a`);
    let res = await req.json(); 
    console.log(res.weather[0].main);
}