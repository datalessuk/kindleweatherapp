import Popup from 'reactjs-popup';
import React, { useState } from 'react';

import '../styles/Settings.scss'


// 

const Settings = ({isOn,handleToggle}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);


  //<Switch value={value} onChange={setValue} />

  return (
    <div>
      <button type="button" className="logo" onClick={() => setOpen(o => !o)}>
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <div className="content">
            <h1>Settings</h1>
            <h2>24 Hour Clock</h2>
            <div className="toggle">
            
            <input
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
            />
             <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
         <span className={`react-switch-button`} />
      </label>
      
            </div>
            
          </div>
        </div>
        
      </Popup>
    </div>
  );
};
export default Settings;
