//* The current weather data API https://openweathermap.org/current
//* The 5 day forecast API https://openweathermap.org/forecast5

//* Access information from the Open Weather Map API to dynamically update the weather dashboard
    //* Get an API key from the website 
    //* Save our Open Weather API URL in a variable so that we can use it to make a GET request
// add our API key 
var APIKey = "&appid=ffcc56860b125b1a1bd5b141502db442";
    
//* Create a form so that the user can input the name of a city and click a button to search for weather conditions for that city
    //* Add a search button
        //* The search triggers the GET request
        //* When a new search is made the previous search is displayed in a clickable list     
    //* Save the user input (city name) as a variable
        //* store the city name in local storage and poluate the list
        //* Create the url to query the Open Weather API for current weather
        //* add the variables for city and API as parameters
var city = localStorage.getItem("query");

//* Create the url to query the Open Weather API for current weather
    //* add the variables for city and API as parameters
var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;

//* Display the city name with the current time and weather conditions
    //* Show the current date using Moment.js
var currentDay = moment().format("dddd, MMMM Do");
function insertCurrentDay() {
    $(".current-date").text(currentDay);
};

insertCurrentDay();
console.log(currentDay);

//* Go get the data using the GET method
    //* Try GET with AJAX    
    //* Store the returned data in the response object 

$.ajax({
    url: requestURL,
    method: "GET"
})
.then(function(response) {
    console.log(requestURL);
    console.log(response);

//* Insert all the data dynamically into the HTML corresponding with the classes in our markup
    //* City name 
    //* Weather icon 
    //* Wind speed
    //* Humidity
    //* UV Index

$(".city").html("<h1>" + response.name + "</h1>");
$(".icon").html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather icon.'>");
$(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
$(".humidity").text("Humidity: " + response.main.humidity + "%");
    
// Convert the temp from Kelvins to Farenheit!!!
//https://www.w3schools.com/howto/howto_js_temperature_converter.asp
var temp = (response.main.temp - 273.15) * 1.80 + 32;
$(".temp").text("Temperature: " + Math.round(temp) + " °F");


//* GET the UV index using the One Call API    
    //* requires latitude and longitude as query parameters
    //* create variables for latitude and longitude 
var lon = response.coord.lon;
var lat = response.coord.lon;
var requestURLuv = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon  + APIKey;
    
    
$.ajax({
    url: requestURLuv,
    method: "GET"
    })

.then(function(response) {
    console.log(requestURL);
    console.log("UV: " + response);
    //put the data in our markup targeting the element classes
    $(".uv").text("UV Index: " + response.value);
    
    });
});


//* GET the 5 day forecast
    //* https://openweathermap.org/forecast5
    //* Create the url to query the Open Weather API for 5 day forecast 
        //* add the variables for city and API as parameters
        //* Create a variable for each of the 5 days 
        //* Add each day's data to its own element in the HTML

var requestURL5day = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + APIKey;

$.ajax({
    url: requestURL5day,
    method: "GET"
    })
    .then(function(response) {
    console.log(requestURL5day);
    console.log("5 day forecast: " + response);
        
//Day 1
// use dt_txt to retrieve our days and then reformat the date
var day1 = moment(response.list[0].dt_txt).format("ddd, MMM D");
console.log(moment(response.list[0].dt_txt).format("ddd, MMM D"));
// Converts the temp to Kelvin with the below formula
var temp1 = (response.list[0].main.temp - 273.15) * 1.80 + 32;
        
//Day 2
var day2 = moment(response.list[8].dt_txt).format("ddd, MMM D");
var temp2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
//Day 3
var day3 = moment(response.list[16].dt_txt).format("ddd, MMM D");
var temp3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
        
//Day 4
var day4 = moment(response.list[24].dt_txt).format("ddd, MMM D");
var temp4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
        
//Day 5
var day5 = moment(response.list[32].dt_txt).format("ddd, MMM D");
var temp5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
        
        
//Day 1
$(".day-1-date").html("<h6>" + day1 + "</h6>");
$(".day-1-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Weather Icon'>");
$(".day-1-temp").text("Temp: " + Math.round(temp1) + " °F");
$(".day-1-humidity").text("Humidity: " + response.list[0].main.humidity + "%");
        
//Day 2
$(".day-2-date").html("<h6>" + day2 + "</h6>");
$(".day-2-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Weather Icon'>");
$(".day-2-temp").text("Temp: " + Math.round(temp2) + " °F");
$(".day-2-humidity").text("Humidity: " + response.list[8].main.humidity + "%");
        
//Day 3
$(".day-3-date").html("<h6>" + day3 + "</h6>");
$(".day-3-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Weather Icon'>");
$(".day-3-temp").text("Temp: " + Math.round(temp3) + " °F");
$(".day-3-humidity").text("Humidity: " + response.list[16].main.humidity + "%");
        
//Day 4
$(".day-4-date").html("<h6>" + day4 + "</h6>");
$(".day-4-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Weather Icon'>");
$(".day-4-temp").text("Temp: " + Math.round(temp4) + " °F");
$(".day-4-humidity").text("Humidity: " + response.list[24].main.humidity + "%");
        
//Day 5
$(".day-5-date").html("<h6>" + day5 + "</h6>");
$(".day-5-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Weather Icon'>");
$(".day-5-temp").text("Temp: " + Math.round(temp5) + " °F");
$(".day-5-humidity").text("Humidity: " + response.list[32].main.humidity + "%");
        
    });

//* Add a search button
    //* The search stores the search text in local storage
    //* When a news search is made the previous search is displayed in a clickable list 

var searchInput = document.querySelector(".input");
var searchOutput = document.querySelector(".output");
var searchButton = document.querySelector(".search");
    
searchButton.addEventListener("click", searchFunction);
    
    
function searchFunction() {
    localStorage.setItem("inputcontent" + searchInput.value, searchInput.value);
    localStorage.setItem("query", searchInput.value);
    console.log(lastresult);
    }

//* Show a history of searches as a list under the form 
    //* Make the historical searches clickable 
        //* When they are clicked reload the results for that city
            //* Make a click event that makes a new GET resquest using the name of the city as variable passed in the request parameters
    
for (var i = 0; i < localStorage.length; i++){
$(".output").append("<a class='cityresult'>" + localStorage.getItem(localStorage.key(i)) + "</a><br/>");
// add an href attribute
               
}
    



    
    
    
