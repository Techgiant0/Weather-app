let city = document.getElementById('city');
let search = document.getElementById('search');
let weatherIcon = document.getElementById('weather-icon')
let temperature = document.getElementById('temp')
let condition = document.getElementById('condition')
let highTemp = document.getElementById('hightemp')
let lowTemp = document.getElementById('lowtemp')
let alert = document.getElementById('alert')

weatherIcon.classList.add('off')

alert.addEventListener('dblclick',()=>{
    alert.classList.add('off')
})

search.addEventListener('click', () => {
if(city.value.trim() == ''){
    alert.classList.remove('off');
}else if ([...city.value].some(char => !isNaN(char) && char !== ' ')) {
    alert.classList.remove('off');
    alert.innerText = 'City name should not contain numbers';
}else{
    alert.classList.add('off');
    getWeather(city)
}
}); 
    
async function getWeather(cityElement){
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityElement.value}&appid=7a09e0b8e571f08263afa200a104ba8a`);
      if (!req.ok) {
        alert.classList.remove('off');
        alert.innerText = 'City does not exist';
        return;
  }
    let res = await req.json(); 
    condition.textContent = res.weather[0].main
    highTemp.textContent = Number((res.main.temp_max - 273).toFixed(2))
    lowTemp.textContent = Number((res.main.temp_min - 273).toFixed(2))
    temperature.innerText = Number((res.main.temp - 273).toFixed(2))
    const iconCode = res.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    weatherIcon.src = iconUrl
    weatherIcon.classList.remove('off')
}