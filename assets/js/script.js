var submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", getCityInfo);

let currentDay = moment().format("L");
document.getElementById("date").innerHTML = currentDay;

let day1 = moment().add(1, 'd').format("L");
document.getElementById("date1").innerHTML = day1;

let day2 = moment().add(2, 'd').format("L");
document.getElementById("date2").innerHTML = day2;

let day3 = moment().add(3, 'd').format("L");
document.getElementById("date3").innerHTML = day3;

let day4 = moment().add(4, 'd').format("L");
document.getElementById("date4").innerHTML = day4;

let day5 = moment().add(5, 'd').format("L");
document.getElementById("date5").innerHTML = day5;


//Displays the divs only after search is triggered
function displayDivs() {
  
  document.getElementById("search-history").style.display = "block";

  document.getElementById("search-results").style.display = "block";
  document.getElementById("current-weather").style.display = "block";


  getCityInfo();
};




//Return city weather info based on search input

function getCityInfo() {
  event.preventDefault();
  let cityInput = document.getElementById("cityInput");
  let cityName = document.getElementById("cityName");
  cityName.innerHTML = "" + cityInput.value + "";

  document.getElementById("weatherToday").innerHTML = "" + cityInput.value + "";
  
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityInput.value +
      "&appid=c4f69e4cdae27aba303ef4637c5d492c"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      console.log(lat);
      console.log(lon);

      return fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&exclude=hourly,minutely&units=imperial&appid=c4f69e4cdae27aba303ef4637c5d492c"
      );
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      $("#wicon").html("<img src='http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png'>"); 

      document.getElementById("temp").innerHTML =
        "Temp: " + Number(data.current.temp).toFixed(1) + "°"; 
      document.getElementById("humidity").innerHTML = "Humidity: " + Number(data.current.humidity).toFixed(1)+"%";
      document.getElementById("windSpeed").innerHTML = "Wind: " + Number(data.current.wind_speed).toFixed(1)+" MPH";
      currentDay = "Date: " + (data.current.dt);
      document.getElementById("uvi").innerHTML = "UV Index: " + (data.current.uvi);


      
      //five-day forecast

      $("#wicon1").html("<img src='http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png'>"); 

      document.getElementById("temp1").innerHTML =
        "Temp: " + Number(data.daily[1].temp.day).toFixed(1) + "°"; 
      document.getElementById("humid1").innerHTML = "Humidity: " + Number(data.daily[1].humidity).toFixed(1)+"%";
      document.getElementById("wind1").innerHTML = "Wind: " + Number(data.daily[1].wind_speed).toFixed(1)+" MPH";
      day1 = "Date: " + (data.daily[1].dt);
      document.getElementById("uvi1").innerHTML = "UV Index: " + (data.daily[1].uvi);


      $("#wicon2").html("<img src='http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png'>"); 

      document.getElementById("temp2").innerHTML =
        "Temp: " + Number(data.daily[2].temp.day).toFixed(1) + "°"; 
      document.getElementById("humid2").innerHTML = "Humidity: " + Number(data.daily[2].humidity).toFixed(1)+"%";
      document.getElementById("wind2").innerHTML = "Wind: " + Number(data.daily[2].wind_speed).toFixed(1)+" MPH";
      document.getElementById("uvi2").innerHTML = "UV Index: " + (data.daily[2].uvi);

      
      $("#wicon3").html("<img src='http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png'>"); 

      document.getElementById("temp3").innerHTML =
        "Temp: " + Number(data.daily[3].temp.day).toFixed(1) + "°"; 
      document.getElementById("humid3").innerHTML = "Humidity: " + Number(data.daily[3].humidity).toFixed(1)+"%";
      document.getElementById("wind3").innerHTML = "Wind: " + Number(data.daily[3].wind_speed).toFixed(1)+" MPH";
      document.getElementById("uvi3").innerHTML = "UV Index: " + (data.daily[3].uvi);


      $("#wicon4").html("<img src='http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png'>"); 

      document.getElementById("temp4").innerHTML =
        "Temp: " + Number(data.daily[4].temp.day).toFixed(1) + "°"; 
      document.getElementById("humid4").innerHTML = "Humidity: " + Number(data.daily[4].humidity).toFixed(1)+"%";
      document.getElementById("wind4").innerHTML = "Wind: " + Number(data.daily[4].wind_speed).toFixed(1)+" MPH";
      document.getElementById("uvi4").innerHTML = "UV Index: " + (data.daily[4].uvi);

      $("#wicon5").html("<img src='http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png'>"); 

      document.getElementById("temp5").innerHTML =
        "Temp: " + Number(data.daily[5].temp.day).toFixed(1) + "°"; 
      document.getElementById("humid5").innerHTML = "Humidity: " + Number(data.daily[5].humidity).toFixed(1)+"%";
      document.getElementById("wind5").innerHTML = "Wind: " + Number(data.daily[5].wind_speed).toFixed(1)+" MPH";
      document.getElementById("uvi5").innerHTML = "UV Index: " + (data.daily[5].uvi);

})


};

//Trigger the enter key to return results if hit

var el = document.getElementById("cityInput");
el.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        displayDivs();
    }
});