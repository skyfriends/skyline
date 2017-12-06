import React, { PropTypes } from 'react';
import '../css/framework7-icons.css';

import {
  Framework7App,
  Statusbar,
  Panel,
  View,
  Navbar,
  Pages,
  Page,
  ContentBlock,
  ContentBlockTitle,
  List,
  ListItem,
  Views,
  NavLeft,
  Link,
  NavCenter,
  NavRight,
  GridRow,
  GridCol,
  Button,
  Popup,
  LoginScreen,
  LoginScreenTitle,
  ListButton,
  ListLabel,
  FormLabel,
  FormInput,
  Icon
} from 'framework7-react';

import { routes } from '../routes';

const MainViews = (props, context) => {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
        <Navbar>
          <NavLeft>
            <Link openPanel="left">
              <Icon f7="chevron_left" size="18px" id="nav-back-button" />
            </Link>
          </NavLeft>
          <NavCenter sliding>Skyline</NavCenter>
          <NavRight>
            <Link openPanel="right">
              <Icon f7="close" size="22px" id="nav-close-button" />
            </Link>{' '}
          </NavRight>
        </Navbar>

        <Pages>
          <Page>
            <ContentBlockTitle>Navigation</ContentBlockTitle>
            <List>
              <ListItem link="/welcome/" title="Welcome" />
              <ListItem link="/company/" title="Company" />
              <ListItem link="/individual/" title="Individual" />
              <ListItem link="/main/" title="Main" />
            </List>
          </Page>
        </Pages>
      </View>
    </Views>
  );
};

MainViews.contextTypes = {
  framework7AppContext: PropTypes.object
};

export const App = () => (
  <Framework7App themeType="ios" routes={routes}>
    <Statusbar />
    <MainViews />
  </Framework7App>
);
