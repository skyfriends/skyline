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

export const Logo = () => {
  return <div className="logo-container">
      <div className="logo-circle-upper" />
      <div className="logo-circle-right" />
      <div className="logo-circle-lower" />
      <div className="logo-circle-left" />
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