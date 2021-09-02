import './App.css';
import React, { useState ,useEffect} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

//Components 
import TodaysWeather from '../src/components/Weather';
import Settings from '../src/components/Settings'
import TodaysDate from './components/CurrentDate';
import TimeNow from '../src/components/Time'

//<Settings isOn={value}
//handleToggle={() => setValue(!value)}/>

function App(props) {
  const handle = useFullScreenHandle();
  
  
  const [value, setValue] = useState(false);

  return (
    <div className="App">
  <button className="fullScreen" onClick={handle.enter} >
      </button>

      <FullScreen handle={handle}>
      <TodaysWeather/>
        <TimeNow timeSwitch={value} />
        <TodaysDate/>
        
        <div className="exit">
        <button className="exitFullsreen" onClick={handle.exit}></button>
        </div>
      </FullScreen>
    </div>
  );
}

export default App;
