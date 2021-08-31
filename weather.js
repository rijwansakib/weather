//get input by onclick
const submit=()=>{
const inputArea=document.getElementById('input-area')
const searchCity=inputArea.value;
console.log(searchCity);
inputArea.value='';
//call api
const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=8334a1bbb8b28159cf86332b826756de`
fetch(url)
.then(res=>res.json())
.then(data=>displayWeather(data));
}
// search result
const displayWeather=weathers=>{
//temperature
    let kelvin=weathers.main.temp;
    const fahrenheit=273.15;
    const celsius=Math.round(kelvin-fahrenheit);
    const searchResult=document.getElementById('search-result');
    searchResult.textContent=''; 
    const div=document.createElement('div');
    div.classList.add('result')
    div.innerHTML=`
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    <h1>${weathers.name}</h1>
    <h3><span>${celsius}</span>&deg;C</h3
    `;
    searchResult.appendChild(div);
//weather
    weathers.weather.forEach(weather => {
        const div=document.createElement('div');
        div.classList.add('weather')
        const moreDiv=document.createElement('div');
        moreDiv.innerHTML=`
        <h3>${weather.main}</h3>
        `;
    searchResult.appendChild(moreDiv); 
    });
}
