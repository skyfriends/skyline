import React from 'react';
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
} from 'framework7-react';

export const Company = () => {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
        <Navbar>
          <NavLeft>
            <Link openPanel="left">
              <Icon f7="chevron_left" size="18px" id="nav-back-button" />
            </Link>
          </NavLeft>
          <NavCenter id="nav-welcome-center">Institutional</NavCenter>
          <NavRight>
            <Link openPanel="right">
              <Icon f7="close" size="22px" id="nav-close-button" />
            </Link>
          </NavRight>
        </Navbar>
        <Page>
          <ListItem>
            <FormLabel>Company Name</FormLabel>
            <FormInput type="text" placeholder="Name" />
          </ListItem>

          <ListItem>
            <FormLabel>Business Type</FormLabel>
            <FormInput type="select">
              <option value="1">Investment Bank</option>
              <option value="2">Hedge Fund</option>
              <option value="3">Mutual Fund</option>
              <option value="4">Insurance Company</option>
              <option value="5">ETF Fund</option>
              <option value="6">Other</option>
            </FormInput>
          </ListItem>
        </Page>
      </View>
    </Views>
  );
};
