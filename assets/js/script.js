
function getCityInfo() {
    
let cityInput = document.getElementById("cityInput");
let cityName = document.getElementById("cityName");
cityName.innerHTML = "--"+cityInput.value+"--"


}


fetch("https://api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&appid=de698dc9f464ea33152fe5ca75bae004")
.then(response => response.json())
.then (data =>{
    for(i=0; i<5; i++){
        document.getElementById("day"+(i+1)+"Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min -288.53).toFixed(1)+"degree";
    }
    for(i=0; i<5; i++){
        document.getElementById("day"+(i+1)+"Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max -288.53).toFixed(1)+"degree";
    }
});

