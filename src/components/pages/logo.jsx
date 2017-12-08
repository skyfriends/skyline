import React from 'react'
import {
  ContentBlock,
  Navbar,
  Views,
  View,
  NavLeft,
  NavCenter,
  NavRight,
  Link,
  Icon,
  Button,
  Page,
  FormInput,
  FormLabel,
  ListItem
} from 'framework7-react'
import '../../css/logo2.css'

export const Logo = () => {
  return <div className="logo-container">
      <div id="logo-circle-left" className="logo-circles" />
      <div id="logo-circle-upper" className="logo-circles" />
      <div id="logo-circle-right" className="logo-circles" />
      <div id="logo-circle-lower" className="logo-circles" />
      <div className="eye-container">
        <div id="sclera">  
          <div id="iris" >
            <div id="pupil" />
          </div>
        </div>
      </div>
    </div>
}
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