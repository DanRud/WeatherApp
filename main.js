var API_KEY = "495df7364149a2b6db4dd00d6f78dfb3";

function render(weatherData) {
    var currentLocation = weatherData.name;
    var currentWeather = weatherData.weather[0].description;
    var currentTemp = weatherData.main.temp;
    var max = weatherData.main.temp_max;
    var low = weatherData.main.temp_min;
    var speed = weatherData.wind.speed;
    var country = weatherData.sys.country;
    var icon = weatherData.weather[0].icon;
    var iconSrc = "https://openweathermap.org/img/w/" + icon + ".png";


    $('.img').append('<img src=' + iconSrc + '>');
    $('.temp').html(Math.floor(currentTemp) + "°C");
    $('.max').html("Max: " + Math.floor(max) + "°C" + " / ");
    $('.min').html("Min: " + Math.floor(low) + "°C");
    $('.currentweather').html(currentWeather);
    $('.windspeed').html("Wind Speed: " + speed + "km/h");
    $('.city').html(currentLocation + ",");
    $('.country').html(country);

    if (currentWeather === "broken clouds") {
        $('html').css("background-image", "url(img/brokenclouds.jpg)");
    } else if (currentWeather === "thunderstorm") {
        $('html').css("background-image", "url(img/thunder.jpg)");
    } else if (currentWeather === "clear sky") {
        $('html').css("background-image", "url(img/clearsky.jpg)");
    } else if (currentWeather === "snow") {
        $('html').css("background-image", "url(img/snow.jpg)");
    } else if (currentWeather === "few clouds") {
        $('html').css("background-image", "url(img/fewclouds.jpg)");
    } else if (currentWeather === "scattered clouds") {
        $('html').css("background-image", "url(img/scatteredclouds.jpg)");
    } else if (currentWeather === "rain" || currentWeather === "shower rain") {
        $('html').css("background-image", "url(img/rain.jpg)");
    } else if (currentWeather === "mist") {
        $('html').css("background-image", "url(img/mist.jpg)");
    } else {
        $('html').css("background-image", "url(img/weather.jpg)");
    }
}


$(document).ready(function(){
    $.get('https://ipinfo.io', function(d){
        var loc = d.loc.split(",");
        $.getJSON('https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' 
        + loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY, function(weatherData){
        render(weatherData);
        });
      }, "jsonp");

});

