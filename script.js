

document.getElementById('getweather').addEventListener('click', function(){
  let inputcity = document.getElementById('inputcity').value; 
  let city = document.getElementById('city');
  let datetime = document.querySelector('#datetime');
  let temp = document.querySelector('#temp');
  let text = document.querySelector(`#text`);
  let wind = document.querySelector('#wind');

  // *****************api************************

   async function apicall(inputcity){
    const apikey = `23d614750d744b7d97c63013241906`;
    const apiurl = `http://api.weatherapi.com/v1/current.json?key=23d614750d744b7d97c63013241906&q=${inputcity}`;
    this.inputcity = inputcity;
    const response = await fetch(apiurl)

    const data = await response.json();
    temp.textContent = data.current.temp_c;
    text.innerHTML = data.current.condition.text;
    speed = data.current.wind_kph;
    wind.innerHTML = `wind speed: ${speed}kph`;
    city.textContent = data.location.name;

   }
   apicall(inputcity)

  // ****************DATE**************************
  let currentDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let dayOfWeek = daysOfWeek[currentDate.getDay()];
  let month = monthsOfYear[currentDate.getMonth()];
  let date = currentDate.getDate();
  let year = currentDate.getFullYear();

  datetime.textContent = `${dayOfWeek}, ${date} ${month} ${year}`;


})