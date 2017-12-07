import React from 'react';
import { Navbar, List, ListItem, Page } from 'framework7-react';

export const Main = () => {
  return (
    <Page>
      <Navbar backLink="Back" sliding />

      <List>
        <ListItem link="#">Portfolio</ListItem>
        <ListItem link="#">Compare to Market</ListItem>
        <ListItem link="#">Messages</ListItem>
        <ListItem link="#">About</ListItem>
      </List>
    </Page>
  );
};
