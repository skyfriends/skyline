import React from 'react';
import '../../css/logo2.css';

export const Logo = () => {
  return <div className="logo-container">
      <div id="logo-circle-left" className="logo-circles" />
      <div id="logo-circle-upper" className="logo-circles" />
      <div id="logo-circle-right" className="logo-circles" />
      <div id="logo-circle-lower" className="logo-circles" />
      <div id="eye-container-outer">
        <div id="eye-container">
          <div id="sclera">
          </div>
            <div id="iris">
              <div id="pupil" />
            </div>
        </div>
      </div>
    </div>
};
/* <div className="logo-container">
      <div className="logo-circle-upper">
        <div className="circle-background" />
      </div>
      <div className="logo-circle-right">
        <div className="circle-background" />
      </div>
      <div className="eye-container">
        <div className="eye shaped" id="logo-eye" />
      </div>
      <div className="logo-circle-bottom">
        <div className="circle-background" />
      </div>
      <div className="logo-circle-left">
        <div className="circle-background" />
      </div>
    </div> */
