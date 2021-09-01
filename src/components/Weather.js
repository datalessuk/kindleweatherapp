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
    const [state,setState]=useState();
    
    const kelvin = 273;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=kidderminster&appid=9f47dbe7e74e9cca1168773c174db9a2`;

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
            console.log(response.data);
            setState(getTime());
            
            
                
    }).catch(error=>{
        console.log(error)
    })
    },[counter]); 

    //console.log(state);
    let dayOrNight = isDay(state); 
    //let time = state;
    //console.log(isDay(state));
    //let x = isDay(state);
    //console.log(x);
    
    let logo = null;
    
    if(!weather){
        logo = snow;
    }
    else if(weather.weather[0].main ==='Clouds' && dayOrNight){
        logo = fewClounds
        console.log(`${state} Day`);
    }
    else if(weather.weather[0].main ==='Clouds' && !dayOrNight){
        logo = cloudNight;
        console.log(`${state} Night`);  
    }
    else if(weather.weather[0].main ==='Clear' && !dayOrNight){
        logo = night;
        console.log('4')
    }
    else if(weather.weather[0].main ==='Drizzle'){
        logo = showerRain;
        console.log('5')
    }
    else if(weather.weather[0].main ==='Rain'){
        logo = rain;
        console.log('6')
    }
    else if(weather.weather[0].main ==='Snow'){
        logo = snow;
        console.log('7')
    }
    else if(weather.weather[0].main ==='Thunderstorm'){
        logo = thunder
        console.log('8')
    }
    else if(weather.weather[0].main ==='Mist'){
        logo = brokenClounds;
        console.log('9')
    }
   
    else{
        logo = brokenClounds;
        console.log('10')
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
            <h1>API DOWN!!!</h1>
        </div>
    )
    
    
}
export default Weather;