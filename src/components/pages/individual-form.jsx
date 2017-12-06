import React from 'react';
import {
  ListItem,
  FormLabel,
  FormInput,
  List,
  Navbar,
  NavLeft,
  NavCenter,
  NavRight,
  View,
  Views,
  Link,
  Icon,
  Page
} from 'framework7-react';

export const Individual = () => {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
        <Navbar>
          <NavLeft>
            <Link openPanel="left">
              <Icon f7="chevron_left" size="18px" id="nav-back-button" />
            </Link>
          </NavLeft>
          <NavCenter id="nav-welcome-center">Get Started</NavCenter>
          <NavRight>
            <Link openPanel="right">
              <Icon f7="close" size="22px" id="nav-close-button" />
            </Link>
          </NavRight>
        </Navbar>
        <Page>
          <List className form>
            <ListItem>
              <FormLabel>Email: </FormLabel>
              <FormInput type="text" placeholder="Email" />
            </ListItem>

            <ListItem>
              <FormLabel>Name: </FormLabel>
              <FormInput type="text" placeholder="Name" />
            </ListItem>

            <ListItem>
              <FormLabel>Address: </FormLabel>
              <FormInput type="text" placeholder="Address" />
            </ListItem>

            <ListItem>
              <FormLabel>Phone: </FormLabel>
              <FormInput type="text" placeholder="Phone" />
            </ListItem>

            <ListItem>
              <FormLabel>Employment: </FormLabel>
              <FormInput type="text" placeholder="Employment" />
            </ListItem>

            <ListItem>
              <FormLabel>Household Income: </FormLabel>
              <FormInput type="text" placeholder="Income" />
            </ListItem>

            <ListItem>
              <FormLabel>Estimated Investment: </FormLabel>
              <FormInput type="text" placeholder="Investment" />
            </ListItem>

            <ListItem>
              <FormLabel>Household Income: </FormLabel>
              <FormInput type="password" placeholder="Password" />
            </ListItem>
          </List>
        </Page>
      </View>
    </Views>
  );
};
