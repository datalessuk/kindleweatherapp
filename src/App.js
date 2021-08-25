import './App.css';
import React, { useState ,useEffect} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

//Components 
import TodaysWeather from '../src/components/Weather';
import Settings from '../src/components/Settings'
import TodaysDate from './components/CurrentDate';
import TimeNow from '../src/components/Time'


function App(props) {
  const handle = useFullScreenHandle();
  
  
  const [value, setValue] = useState(false);


  const location = 'kidderminster';

 

  
  //<Settings isOn={value}
  //handleToggle={() => setValue(!value)}/>

    
    
//<Time time={realTime}/>

  
  return (
    <div className="App">
      


  <button onClick={handle.enter}>
        Enter fullscreen
      </button>

      <FullScreen handle={handle}>
      <TodaysWeather loc={location}/>
        <TimeNow timeSwitch={value} />
        <TodaysDate/>
        <Settings isOn={value}
        handleToggle={() => setValue(!value)}/>
      </FullScreen>
    </div>
  );
}

export default App;
