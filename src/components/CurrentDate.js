import '../styles/CurrentDate.scss';
import React, { useState, useEffect } from 'react';

function CurrntDate(){


    const [date, setDate] = useState(new Date());

    function getDate(){

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
        const todaysDate = new Date();
        let dateNumber = todaysDate.getDate();

    return day[todaysDate.getDay()]+ "," + " " + dateNumber + " " + months[todaysDate.getMonth()];

    }

    const realTime = getDate(date);

    const tick = ()=>{
      setDate(new Date());
    }
    
    useEffect(()=>{
      setInterval(tick,1000)
  
      return ()=>{
        clearInterval(tick)
      }
    },[realTime])


    return(
    <div className="date-container">
        <h1>{realTime}</h1>
    </div>
    ) 
}
export default CurrntDate;