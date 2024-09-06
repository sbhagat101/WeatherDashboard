import React, { useState } from 'react'
import axios from 'axios'
import './App.css';
import Forecast from './forecast';
import Details from './details';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [error, setError] = useState(null);
  const [forecastData,setForcastData] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=57d2c63a717442bb2cb360e685341493`
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=57d2c63a717442bb2cb360e685341493`

  const searchLocation = async () => {
    if (location !== "") {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        setError(null); // Clear error if request is successful

        // Fetch forecast data:
        const response2 = await axios.get(forecastUrl);
        setForcastData(response2.data);
        console.log(response2.data);
        setError(null);

      } catch (error) {
        if (error.response && error.response.status === 429) {
          // Handle the 429 Too Many Requests error
          setError('Too many requests. Please wait and try again.');
          console.error("Rate limit exceeded. Please wait before retrying.");
        } else {
          // Handle other possible errors
          setError('An error occurred. Please try again.');
          console.error("Error fetching weather data:", error);
        }
      }
      setLocation(''); // Clear input after search
    } else {
      alert("Please enter a city name");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };

  return (
    <div className="App">
        <div className="card">
          <div className="search">
            <input
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter city name"
              type="city"
            />
            <button onClick={searchLocation} ><img src="https://i.postimg.cc/WzJt1hwQ/search.png" /></button>
          </div>

          {error && <p>{error}</p>} {/* Display error messages */}
          <div className={data.main ? "weather" : "weatherNoShow"}>
            <Details 
              temp={data.main ? data.main.temp.toFixed() : null}
              name={data.name}
              weather={data.weather ? data.weather[0].main : null}
              humidity={data.main ? data.main.humidity : null}
              speed={data.wind ? data.wind.speed.toFixed() : null}
            />
            <Forecast 
              weatherForecastData={forecastData.list || []}
              name={data.name}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
