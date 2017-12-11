import React from 'react';
import '../css/framework7-icons.css';
import '../css/app.css';
import {
  Framework7App,
  Statusbar,
  List,
  ListItem,
  FormInput,
  Navbar,
  Page,
  Button,
  NavLeft,
  NavCenter,
  NavRight,
  View,
  Views,
  Link,
  Icon,
  Pages,
  FormLabel,
  ContentBlock
} from 'framework7-react';
import { Logo } from './pages/logo';
import { routes } from '../routes';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Views>
        <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
          <Navbar>
            <NavLeft>
              <Link openPanel="left">
                <Icon f7="chevron_left" id="nav-back-button" />
              </Link>
            </NavLeft>
            <NavCenter sliding />
            <NavRight>
              <Link openPanel="right">
                <Icon f7="close" id="nav-close-button" />
              </Link>{' '}
            </NavRight>
          </Navbar>

          <Pages>
            <Page>
              <Navbar>
                <NavLeft>
                  <Link openPanel="left">
                    <Icon f7="chevron_left" id="nav-back-button" />
                  </Link>
                </NavLeft>
                <NavCenter sliding />
                <NavRight>
                  <Link openPanel="right">
                    <Icon f7="close" id="nav-close-button" />
                  </Link>{' '}
                </NavRight>
              </Navbar>
              <Logo />
              <List className="user-login no-hairlines-between no-hairlines">
                <ListItem id="welcome-list-header">
                  <ContentBlock className="welcome-header">
                    WELCOME
                  </ContentBlock>
                </ListItem>

                <ListItem className="form-list-item">
                  <FormInput
                    placeholder="Email"
                    onChange={e => this.userSelect(e)}
                    className="select-input-main"
                    type="text"
                  />
                </ListItem>
                <ListItem className="form-list-item">
                  <FormInput
                    placeholder="Password"
                    onChange={e => this.userSelect(e)}
                    className="select-input-main"
                    type="text"
                  />
                </ListItem>
              </List>
              <ContentBlock id="forgot-password" className="login-text"> Forgot Password? </ContentBlock>
              
              <Button
                raised
                big
                fill
                round
                href="/user/"
                title="Company"
                className="bottom-button"
              >
                Continue
              </Button>
              <ContentBlock id="no-account" className="login-text"> Don't have an account?</ContentBlock>
              <ContentBlock id="create-account" className="login-text"> Create new account </ContentBlock>
              
            </Page>
          </Pages>
        </View>
      </Views>
    );
  }
}

export const App = () => (
  <Framework7App themeType="ios" routes={routes}>
    <Statusbar />
    <Login />
  </Framework7App>
);
