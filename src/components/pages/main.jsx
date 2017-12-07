import React from 'react';
import { Navbar, List, ListItem, Page } from 'framework7-react';

export const Main = () => {
  return (
    <Page>
      <Navbar backLink="Back" sliding />

      <List>
        <ListItem link="#" className="form-list-item">
          Portfolio
        </ListItem>
        <ListItem link="#" className="form-list-item">
          Compare to Market
        </ListItem>
        <ListItem link="#" className="form-list-item">
          Messages
        </ListItem>
        <ListItem link="#" className="form-list-item">
          About
        </ListItem>
      </List>
    </Page>
  );
};
