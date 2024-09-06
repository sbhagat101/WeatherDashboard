import React, { useState } from 'react'
import './forecast.css';
import jQuery from 'jquery'
import Details from './details';

function Forecast( props) {
    const currentDate = new Date().toLocaleDateString();

    const currentDateIndex = Array.isArray(props.weatherForecastData) 
    ? props.weatherForecastData.findIndex((item) => {
        const forecastDate = new Date(item.dt * 1000).toLocaleDateString();
        return currentDate === forecastDate;
        })
    : -1;
    
    const filteredForecast = Array.isArray(props.weatherForecastData) 
    ? props.weatherForecastData.filter((item) => {
        const forecastDate = new Date(item.dt * 1000).toLocaleDateString();
        return currentDate !== forecastDate;
        })
    : [];
    
    const forecastSlides = [];
    for (let i = currentDateIndex + 1; i < filteredForecast.length; i += 8){
        const forecastItem = filteredForecast[i];
        const date = new Date(forecastItem.dt * 1000).toLocaleDateString();
        const temperature = forecastItem.main.temp.toFixed();
        const humidity = forecastItem.main.humidity;
        const wind = forecastItem.wind.speed.toFixed();
        const weather = forecastItem.weather[0].main;
        const name = forecastItem.name
        console.log(`name is: ${name}`)
        forecastSlides.push(
            <div className='cardDetails'>
              {/* Render content here, e.g., an image or text */}
                <Details 
                    //weatherData = {data}
                    temp = {temperature}
                    weather = {weather}
                    humidity = {humidity}
                    speed = {wind}
                    date = {date}
                />
            </div>
          );
    }

    jQuery(document).ready(function($){
        //open popup
        $('.popup-trigger').on('click', function(event){
            event.preventDefault();
            $('.popup').addClass('is-visible');
        });
    
        //close popup
        $('.popup').on('click', function(event){
            if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
                event.preventDefault();
                $('.popup').removeClass('is-visible');
            }
        });
    
        //close popup when pressing the ESC key
        $(document).keyup(function(event){
            if(event.which === 27){
                $('.popup').removeClass('is-visible');
            }
        });
    });
  return (
    <body>
        <div class="main-content">
            <a href="#0" id="info" class="info popup-trigger" title="info">5 Day Forecast</a>
        </div>

        <div class="popup" role="alert">
            <div class="popup-container">
                <a href="#0" class="popup-close img-replace">Close</a>
                <h1>5 Day Forecast For {props.name}</h1>
                <div className="cardDetailsContainer">
                    {forecastSlides} 
                </div>
            </div>
        </div>
    </body>

  );
}

export default Forecast;
