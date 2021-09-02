import '../styles/time.scss';
import React, { useState, useEffect } from 'react';

function Time(props){
    const [time, setTime] = useState(new Date());
  
    function formatTime(time,timeSwitch){

      let hours = time.getHours();
      let minutes = time.getMinutes();

      if(timeSwitch ===true){
        if(minutes <10){
            minutes = "0" + minutes;
          }
      
          let ampm = "am";
         
          if(hours >=12){
            hours = ((hours + 11) % 12 + 1);

            ampm = "pm";
          }
          
          return hours + ":" + minutes + "" + ampm;
          
      }
      else{
        
        if(minutes <10){
          minutes = "0" + minutes;
        }
          
          return hours + ":" + minutes
      }
      
      
    }
    
    const realTime = formatTime(time,props.timeSwitch);

    const tick = ()=>{
      setTime(new Date());
    }
    
    useEffect(()=>{
      setInterval(tick,1000)
  
      return ()=>{
        clearInterval(tick)
      }
    },[realTime])


    return(
        <div className="time-container">
        <h1 className="time">{realTime}</h1>
        </div>
    )
}
export default Time;