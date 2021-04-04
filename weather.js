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

//* Show a history of searches as a list under the form 
    //* Make the historical searches clickable 
        //* When they are clicked reload the results for that city
            //* Make a click event that makes a new GET resquest using the name of the city as variable passed in the request parameters

//* Display the city name with the current time and weather conditions
    //* Show the current date using Moment.js
    
//* Go get weather the data using the GET method
    //* Try GET with AJAX    
    //* Store the returned data in the response object 
    //* Then add it dynamically to the HTML
    //* Insert all the data dynamically into the HTML corresponding with the classes in our markup
        //* City name 
        //* Weather icon 
        //* Wind speed
        //* Humidity
        //* UV Index
        
//* GET the UV index using the One Call API    
    //* requires latitude and longitude as query parameters
    //* create variables for latitude and longitude 
   
//* GET the 5 day forecast
    //* https://openweathermap.org/forecast5
    //* Create the url to query the Open Weather API for 5 day forecast 
        //* add the variables for city and API as parameters
        //* Create a variable for each of the 5 days 
        //* Add each day's data to its own element in the HTML




    
    
    
