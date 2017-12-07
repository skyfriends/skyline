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
import { Logo } from './logo'
import '../../css/app.css'

export const MainView = () => {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
        <Navbar>
          <NavLeft>
            <Link openPanel="left">
              <Icon f7="chevron_left" size="18px" id="nav-back-button" />
            </Link>
          </NavLeft>
          <NavCenter id="nav-welcome-center">Main</NavCenter>
          <NavRight>
            <Link openPanel="right">
              <Icon f7="close" size="22px" id="nav-close-button" />
            </Link>
          </NavRight>
        </Navbar>

        <Page className='link-page'>
          <Link>Portfolio</Link>
          <Link>Compare To Market</Link>
          <Link>Messages</Link>
          <Link>About</Link>
        <Logo className='logo-container'/>
        </Page>
      </View>
    </Views>
  );
};
