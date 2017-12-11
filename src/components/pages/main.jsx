import React from 'react';
import { Navbar, List, ListItem, Page } from 'framework7-react';
import '../../css/logo2.css'
import { Logo } from './logo'

export const Main = () => {
  return (

    // <List className="input-form-list no-hairlines-between no-hairlines">
    //       <ListItem className="input-form-list-item">
    <Page>
      <Navbar backLink="Back" sliding />

      <List className="input-form-list no-hairlines-between no-hairlines">
        <ListItem link="#" className="input-form-list-item">
          Portfolio
        </ListItem>
        <ListItem link="#" className="input-form-list-item">
          Compare to Market
        </ListItem>
        <ListItem link="#" className="input-form-list-item">
          Messages
        </ListItem>
        <ListItem link="#" className="input-form-list-item">
          About
        </ListItem>
      </List>
      <Logo />
    </Page>
  );
};
