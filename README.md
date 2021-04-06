# weather-dashboard


<img src="" alt="Pic of application"
title="Weather Dashboard" width="" />

## Deployed Application
[Weather Dashboard](https://darrindevs.github.io/weather-dashboard/)

## Summary 
Find out the weather in your favorite city!

This browser based application leverages the OpenWeatherMap API to consume weather data based on user input. The user request updates the query parameters to return various weather data points for a selected city. The third-party API returns the data and our app uses JavaScript to dynamically insert the contents in the HTML. 


## Technologies Used
- 🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
- 🕰 - Moment.js - Moment. js is a free and open source JavaScript library that removes the need to use the native JavaScript Date object directly. The library is a wrapper for the Date object, making the object a whole lot easier to work with.
- 🌳 jQuery - jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.
- 🦴 HTML - Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.
- 👗 CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. 
- 👢 Bootstrap - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
- 𝒢 Google Fonts - Google Fonts is a library of more than a thousand free and open source font families, an interactive web directory for browsing the library, and APIs for using the fonts via CSS and Android. 
- ☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.
- ⛅️ GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.
- ❄️ OpenWeatherMap - OpenWeatherMap is an online service that provides global weather data via API, including current weather data, forecasts, nowcasts and historical weather data for any geographical location.


## Code Snippet

~~~
$.ajax({
    url: requestURL,
    method: "GET"
})
.then(function(response) {
    console.log(requestURL);
    console.log(response);

$(".city").html("<h1>" + response.name + "</h1>");
$(".icon").html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather icon.'>");
$(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
$(".humidity").text("Humidity: " + response.main.humidity + "%");
    
// Convert the temp from Kelvins to Farenheit!!!
var temp = (response.main.temp - 273.15) * 1.80 + 32;
$(".temp").text("Temperature: " + Math.round(temp) + " °F");
~~~


## Notes


## Author Links
[LinkedIn](https://www.linkedin.com/in/darrinweyers/)
[GitHub](https://github.com/darrindevs)
