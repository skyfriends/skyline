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
  Button
} from 'framework7-react';

export const Welcome = () => {
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
        ) : null}
        <ContentBlock id="welcome-header">Open a new account </ContentBlock>
        <ContentBlock id="welcome-sub">
          You can open as many accounts as you'd like, - let's start with one.
        </ContentBlock>
        <Button big id="continue-button">
          Continue
        </Button>
      </View>
    </Views>
  );
};
