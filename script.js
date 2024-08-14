const button = document.querySelector('btn');
const input = document.querySelector('input');
const icon = document.querySelector('.icon');
const weather =document.querySelector('.weather');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');


// const apiKey = '216dcecb981edd7d531edca0687e202d';

// const api= 

btn.addEventListener("click", ()=>{
   let city  = input.value;
   getweather(city);
   })

   function getweather(city) {

    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'216dcecb981edd7d531edca0687e202d'}`)
   .then( response => response.json())
.then(data => {console.log(data);

   const iconCode= data.weather[0].icon;
   icon.innerHTML = `<img src= "https://openweathermap.org/img/wn/${iconCode}.png"/>`

  const weatherCity = data.name;
  const weatherCountry = data.sys.country;
  weather.innerHTML = `${weatherCity}, ${weatherCountry}`;



  let  weatherTemp = data.main.temp;
  weatherTemp= weatherTemp - 273;
   const temp = weatherTemp.toFixed(2)
  temprature.innerHTML = `${temp}°C`


   let weatherDesc = data.weather[0].description;
   description.innerHTML = weatherDesc; 

})

   }