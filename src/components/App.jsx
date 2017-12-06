import React from 'react';
import '../css/framework7-icons.css';
import '../css/app.css';

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
  Icon,
  Swiper,
  SwiperSlide
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
              <ListItem link="/individual/" title="Individual" />
              <ListItem link="/main/" title="Main" />
            </List>
            <Button
              big
              round
              fill
              href="/company/"
              title="Company"
              className="bottom-button"
            >
              Continue
            </Button>
          </Page>
        </Pages>
      </View>
    </Views>
  );
};

export const App = () => (
  <Framework7App themeType="ios" routes={routes}>
    <Statusbar />
    <MainViews />
  </Framework7App>
);
