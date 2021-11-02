
function getCityInfo() {
    
let cityInput = document.getElementById("cityInput");
let cityName = document.getElementById("cityName");
cityName.innerHTML = ""+cityInput.value+""

};

fetch("https://api.openweathermap.org/data/2.5/forecast?q=hartford&units=imperial&appid=de698dc9f464ea33152fe5ca75bae004")
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    for(i=0; i<1; i++){
        document.getElementById("weatherToday").innerHTML = "Today's Weather: " + Number(data.list[0].main.temp).toFixed(1)+"°";
    }
    
    for(i=0; i<1; i++){
        document.getElementById("humidity").innerHTML = "Humidity: " + Number(data.list[0].main.humidity).toFixed(1)+"%";
    }
    
});

getCityInfo();