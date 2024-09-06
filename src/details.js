import React from "react";
import "./details.css"

function Details(props) {
    return(
        <div class="weather">
            
            <h1 class="temp">{props.temp}°F</h1>
            <h2 class="city">{props.name}</h2>
            <h3>{props.weather}</h3>
            <p>{props.date}</p>
            <div class="details">
                <div class="col">
                    <img src="https://i.postimg.cc/X7jdggxJ/humidity.png"/>
                    <div>
                         <p class="humidity">{props.humidity}%</p> 
                        <p class="humidity"></p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="https://i.postimg.cc/jjhQj3B7/wind.png"/>
                    <div>
                    <p className='wind'>{props.speed} MPH</p> 
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;