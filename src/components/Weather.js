import React,{useEffect,useState} from 'react';
import axios from 'axios';

import '../styles/WeatherStyles.scss'
// Weather icon imports
import clearSky from '../img/logos/weathericons/day.svg'
import fewClounds from '../img/logos/weathericons/cloudy.svg'
import brokenClounds from '../img/logos/weathericons/cloudy-day-1.svg'
import showerRain from '../img/logos/weathericons/rainy-1.svg'
import rain from '../img/logos/weathericons/rainy-7.svg'
import thunder from '../img/logos/weathericons/thunder.svg'
import snow from '../img/logos/weathericons/snowy-6.svg'
import night from '../img/logos/weathericons/night.svg'
import cloudNight from '../img/logos/weathericons/cloudy-night-2.svg'

import errorLogo from '../img/logos/exclamation-triangle-solid.svg'


function Weather(){

    const [weather,setWeather] = useState(null);
    const [state,setState]=useState();
    
    const kelvin = 273;
    const CITY = ""; // Your city
    const APIKEY = "" // API KEY
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}`;

    const weatherLogo = [clearSky,fewClounds,brokenClounds
                        ,showerRain,rain,thunder
                        ,snow,night,cloudNight,errorLogo];

    const [counter, changeCounter] = useState(0);

    function getTime(){
        let date = new Date();
        let hours = date.getHours();
        return hours;
    }
    
    function isDay(time){
        if(time >=6 && time <20){
            return true;
        }
        return false;
    }

    useEffect(() => {
      const interval = setInterval(() => {
        changeCounter(counter + 1);
      }, 1000 *60*30);
   
      return () => clearInterval(interval)
    }, [counter]);
   
    useEffect(()=>{
        axios.get(URL).then(response=>{
        
            setWeather(response.data);
            setState(getTime());

    }).catch(error=>{
        console.log(error)
    })
    },[counter]); 

    let dayOrNight = isDay(state); 
    let logo = null;
    
    if(!weather){
        logo = weatherLogo[9];
    }
    else if(weather.weather[0].main ==='Clouds' && dayOrNight){
        logo = weatherLogo[1]
    }
    else if(weather.weather[0].main ==='Clouds' && !dayOrNight){
        logo = weatherLogo[8] 
    }
    else if(weather.weather[0].main ==='Clear' && !dayOrNight){
        logo = weatherLogo[7]
    }
    else if(weather.weather[0].main ==='Clear' && dayOrNight){
        logo = weatherLogo[0];
    }
    else if(weather.weather[0].main ==='Drizzle'){
        logo = weatherLogo[3];
    }
    else if(weather.weather[0].main ==='Rain'){
        logo = weatherLogo[4];
    }
    else if(weather.weather[0].main ==='Snow'){
        logo = weatherLogo[6];
    }
    else if(weather.weather[0].main ==='Thunderstorm'){
        logo = weatherLogo[5];
    }
    else if(weather.weather[0].main ==='Mist'){
        logo = weatherLogo[2];
    }
    else{
        logo = weatherLogo[2];
    }
    
    if(weather){
        return(
            <div className="header">
                <h1><img src={logo}></img>{Math.floor(weather.main.temp-kelvin)} °</h1>
            </div>
        )
    }
    return(
        <div className="header">
            <h1>API IS Down{logo}</h1>
            <h2>{logo}</h2>
        </div>
    )
    
    
}
export default Weather;