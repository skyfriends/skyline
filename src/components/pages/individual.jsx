import React from 'react';
import {
  ListItem,
  FormInput,
  List,
  Navbar,
  Page
} from 'framework7-react';

export const Individual = () => {
  return (
    <Page>
      <Navbar title="Individual" backLink="Back" sliding />
      <List className form>
        <ListItem>
          <FormInput type="text" placeholder="Email" cursor="none" />
        </ListItem>

        <ListItem>
          <FormInput type="text" placeholder="Name" />
        </ListItem>

        <ListItem>
          <FormInput type="text" placeholder="Address" />
        </ListItem>

        <ListItem>
          <FormInput type="text" placeholder="Phone" />
        </ListItem>

        <ListItem>
          <FormInput type="text" placeholder="Employment" />
        </ListItem>

        <ListItem>
          <FormInput type="text" placeholder="Income" />
        </ListItem>

        <ListItem>
          <FormInput type="text" placeholder="Investment" />
        </ListItem>

        <ListItem>
          <FormInput type="password" placeholder="Password" />
        </ListItem>
      </List>
    </Page>
  );
};
