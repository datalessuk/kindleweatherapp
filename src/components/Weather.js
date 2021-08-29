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



function Weather(props){
   
    
    const [weather,setWeather] = useState(null);
    const kelvin = 273;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=kidderminster&appid=9f47dbe7e74e9cca1168773c174db9a2`;

    const [counter, changeCounter] = useState(0);

    function getTime(){
        let date = new Date();

        let hours = date.getHours();
        return hours;
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
        
         console.log(response);
                
    }).catch(error=>{
        console.log(error)
    })
    },[counter]); 


    let time = getTime();
    
    let logo = null;
    
    if(!weather){
        logo = snow;
    }
    else if(weather.weather[0].main ==='Clouds'){
        logo = fewClounds;
    }
    else if(weather.weather[0].main ==='Clouds' && time > 21){
        logo = cloudNight;
    }
    else if(weather.weather[0].main ==='Clear'){
        logo = clearSky;
    }
    else if(weather.weather[0].main ==='Clear' && time >21){
        logo = night;
    }
    else if(weather.weather[0].main ==='Drizzle'){
        logo = showerRain;
    }
    else if(weather.weather[0].main ==='Rain'){
        logo = rain;
    }
    else if(weather.weather[0].main ==='Snow'){
        logo = snow;
    }
    else if(weather.weather[0].main ==='Thunderstorm'){
        logo = thunder
    }
    else if(weather.weather[0].main ==='Clear'){
        logo = clearSky
    }
    else if(weather.weather[0].main ==='Mist'){
        logo = brokenClounds;
    }
    else{
        logo = brokenClounds;
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
            <h1>API DOWN</h1>
        </div>
    )
    
    
}
export default Weather;