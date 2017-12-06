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
import '../../css/logo.css'

export const Logo = () => {
  return <main className="logo-container">
      {/* <div className="logo-circle" id="logo-circle-upper" /> */}
      <div className="logo-circle" id="logo-circle-right" />
      <div className="eye shaped" id="logo-eye" />
      <div className="hitbox-tooltip" id="logo-hit" />
      <div className="before tooltip" id="logo-pupil" />
      <div className="after tooltip" id="logo-after" />

      {/* <div className="logo-circle" id="logo-circle-bottom" />
      <div className="logo-circle" id="logo-circle-left" /> */}
    </main>
}
