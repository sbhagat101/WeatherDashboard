# 🌦️ WeatherDashboard

A responsive weather dashboard built with React that provides real-time **current weather** and a **5-day forecast** for any city using OpenWeatherMap API.

## 🚀 Live Demo

[Click here to try the live version](#) <!-- Replace with your deployed link -->

---

## 🛠️ Features

- 🔍 City-based weather search
- 📅 5-day weather forecast in a popup
- 🌡️ Displays temperature, humidity, wind speed, and condition
- 🌍 Uses OpenWeatherMap's **Current Weather** and **Forecast** APIs
- 💾 Input clearing and real-time validation
- ⚠️ Error handling for bad inputs and API rate limits

---

## 🧰 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Framework   | React.js  |
| HTTP Client | Axios |
| Styling     | CSS Modules |
| API         | OpenWeatherMap (weather & forecast) |

\* Consider replacing jQuery with React state-based modal management in future iterations.

---

## 📂 File Structure
src/
├── App.js // Main logic and state
├── forecast.js // Forecast popup + data filtering
├── details.js // Reusable weather detail cards
├── App.css // App styling
├── forecast.css // Popup styling
├── details.css // Card styling

