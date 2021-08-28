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


function Weather(props){
   
    
    const [weather,setWeather] = useState(null);
    const kelvin = 273;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=kidderminster&appid=9f47dbe7e74e9cca1168773c174db9a2`;

    const [counter, changeCounter] = useState(0);
 
    useEffect(() => {
      const interval = setInterval(() => {
        changeCounter(counter + 1);
      }, 1000 *60*30);
   
      return () => clearInterval(interval)
    }, [counter]);
    //function callEveryMin(){
        //setInterval(getWether(),60000);
    //}

    //setInterval(getWether(),60000);
    //getWether();

   
   
  useEffect(()=>{
        axios.get(URL).then(response=>{
        
            setWeather(response.data);
        
         console.log(response);
                
    }).catch(error=>{
        console.log(error)
    })
    },[counter]); 
    
    
    
    //function timeOut(){
        //console.log('This is to be displayed once every 30 seconds');
    //}
    
    //  console.log();
    let logo = null;
    
    if(!weather){
        logo = snow;
    }
    else if(weather.weather[0].main ==='Clouds'){
        logo = fewClounds;
    }
    else if(weather.weather[0].main ==='Clear'){
        logo = clearSky;
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
            
        </div>
    )
    
    
}
export default Weather;