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
  Icon,
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
  FormInput
} from 'framework7-react';
import { IconButton } from 'material-ui';

import { routes } from '../routes';

const LeftPanel = (props, context) => (
  <Panel left reveal layout="dark">
    <View id="left-panel-view" navbarThrough dynamicNavbar="true">
      {context.framework7AppContext.theme.ios ? (
        <Navbar title="Left Panel" />
      ) : null}
      <Pages>
        <Page>
          {context.framework7AppContext.theme.material ? (
            <Navbar title="Left Panel" />
          ) : null}
          <ContentBlock inner>
            <p>Left panel content goes here</p>
          </ContentBlock>
          <ContentBlockTitle>Load page in panel</ContentBlockTitle>
          <List>
            <ListItem link="/about/" title="About" />
            <ListItem link="/form/" title="Form" />
          </List>
          <ContentBlockTitle>Load page in main view</ContentBlockTitle>
          <List>
            <ListItem
              link="/about/"
              title="About"
              linkView="#main-view"
              linkClosePanel
            />
            <ListItem
              link="/form/"
              title="Form"
              linkView="#main-view"
              linkClosePanel
            />
          </List>
        </Page>
      </Pages>
    </View>
  </Panel>
);

LeftPanel.contextTypes = {
  framework7AppContext: PropTypes.object
};

const RightPanel = (props, context) => (
  <Panel right cover layout="dark">
    <View id="right-panel-view" navbarThrough dynamicNavbar={true}>
      {context.framework7AppContext.theme.ios ? (
        <Navbar title="Right Panel" sliding />
      ) : null}
      <Pages>
        <Page>
          {context.framework7AppContext.theme.material ? (
            <Navbar title="Right Panel" sliding />
          ) : null}
          <ContentBlock>
            <p>Right panel content goes here</p>
          </ContentBlock>
          <ContentBlockTitle>Load page in panel</ContentBlockTitle>
          <List>
            <ListItem link="/about/" title="About" />
            <ListItem link="/form/" title="Form" />
          </List>
          <ContentBlockTitle>Load page in main view</ContentBlockTitle>
          <List>
            <ListItem
              link="/about/"
              title="About"
              linkView="#main-view"
              linkClosePanel
            />
            <ListItem
              link="/form/"
              title="Form"
              linkView="#main-view"
              linkClosePanel
            />
          </List>
        </Page>
      </Pages>
    </View>
  </Panel>
);

RightPanel.contextTypes = {
  framework7AppContext: PropTypes.object
};

const MainViews = (props, context) => {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
        {/* Navbar */}
        {context.framework7AppContext.theme.ios ? (
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
        {/* Pages */}
        <Pages>
          <Page>
            {context.framework7AppContext.theme.material ? (
              <Navbar>
                <NavLeft>
                  <Link icon="icon-bars" openPanel="left" />
                </NavLeft>
                <NavCenter sliding>Framework7</NavCenter>
                <NavRight>
                  <Link icon="icon-bars" openPanel="right" />
                </NavRight>
              </Navbar>
            ) : null}
            <ContentBlock id="welcome-header">Open a new account </ContentBlock>
            <ContentBlock id="welcome-sub">
              You can open as many accounts as you'd like, - let's start with
              one.
            </ContentBlock>
            <Button big id="continue-button">
              Continue
            </Button>
          </Page>
        </Pages>
      </View>
    </Views>
  );
};

MainViews.contextTypes = {
  framework7AppContext: PropTypes.object
};

const AppPopup = () => (
  <Popup id="popup">
    <View navbarFixed>
      <Pages>
        <Page>
          <Navbar title="Popup">
            <NavRight>
              <Link closePopup>Close</Link>
            </NavRight>
          </Navbar>
          <ContentBlock>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            architecto. Cupiditate laudantium rem nesciunt numquam, ipsam.
            Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto
            nemo quos ullam obcaecati, quod.
          </ContentBlock>
        </Page>
      </Pages>
    </View>
  </Popup>
);

const AppLoginScreen = () => (
  <LoginScreen id="login-screen">
    <View>
      <Pages>
        <Page loginScreen>
          <LoginScreenTitle>Login</LoginScreenTitle>
          <List form>
            <ListItem>
              <FormLabel>Username</FormLabel>
              <FormInput name="username" placeholder="Username" type="text" />
            </ListItem>
            <ListItem>
              <FormLabel>Password</FormLabel>
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
              />
            </ListItem>
          </List>
          <List>
            <ListButton title="Sign In" closeLoginScreen />
            <ListLabel>
              <p>Click Sign In to close Login Screen</p>
            </ListLabel>
          </List>
        </Page>
      </Pages>
    </View>
  </LoginScreen>
);

export const App = () => (
  //Change themeType to "material" to use the Material theme
  <Framework7App themeType="ios" routes={routes}>
    <Statusbar />
    <LeftPanel />
    <RightPanel />
    <MainViews />
    <AppPopup />
    <AppLoginScreen />
  </Framework7App>
);
