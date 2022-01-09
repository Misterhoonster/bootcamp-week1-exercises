import React, {useState, useEffect} from "react";
import { WeatherContainer } from "./styles"

const WeatherDisplay = () => {
	const [weather, setWeather] = useState({});
    const location = "chicago";

useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=886705b4c1182eb1c69f28eb8c520e20`);
			const data = await res.json();
			setWeather(data);
		}
        fetchData();
}, []);

const isLoaded = Object.keys(weather).length !== 0;

const convertTemp = (k) => {
    return Math.round((parseFloat(k) - 273.15) * 9/5 + 32).toString();
}

if (isLoaded) {
    return (
        <WeatherContainer>
            <h2>{`${convertTemp(weather.main.temp)}\u00b0`}</h2>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"></img>
        </WeatherContainer>
        
    );
}
return <div></div>;

}

export default WeatherDisplay;