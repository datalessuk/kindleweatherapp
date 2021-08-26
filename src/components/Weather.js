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


function Weather(){
    
    const [weather,setWeather] = useState(null);
    //const [logo,setLogo]  = useState(null);
 

    const kelvin = 273;
    const APIKEY = '9f47dbe7e74e9cca1168773c174db9a2'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=kidderminster&appid=9f47dbe7e74e9cca1168773c174db9a2`;
    
    
    const [isStatus, setStatus] = useState(true)
    setInterval(()=> {
    setStatus(!isStatus)
    },  1000 * 60 *30) //60 1000 * 60 *15


    //useEffect(()=>{
        //console.log(weather)
    //},[weather])

   
    let count = 0;
    
    useEffect(()=>{
  
    axios.get(URL).then(response=>{

        console.log(response);
        
       
        
        //setWeather({response},function(){
            
            //console.log(weather.data);
       // })
        
        setWeather(response.data);
        //console.log(weather)
        let count = 0;
        count++;
        console.log(count);

        //console.log(weather.weather[0].main);
        //setLogo(response.data.weather[0].main);
       // console.log(logo);
        
        //console.log(weather.weather[0].main);
        //console.log(weather);
        //console.log(Math.floor(weather.main.temp - kelvin));
        
        
        
         //console.log(logo.response.data.weather[0].main);

    },)
    .catch(error=>{
        console.log(error);
    })
  
    },[isStatus]);

    
    
     console.log();
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