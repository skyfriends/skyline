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
<<<<<<< HEAD
import { Corner } from './pages/corner'
class MainViews extends React.Component {
=======
import { routes } from '../routes';

class Login extends React.Component {
>>>>>>> cc8e8767f44a71ba419ea4fc24772bf9b6850cc9
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
              <List className="user-login">
                <ListItem id="welcome-list-header">
                  <ContentBlock className="welcome-header">
                    WELCOME
                  </ContentBlock>
                </ListItem>

                <ListItem className="form-list-item">
                  <FormInput
                    placeholder="Username"
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

              <Button
                big
                fill
                href="/user/"
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
  }
}

export const App = () => (
  <Framework7App themeType="ios" routes={routes}>
    <Statusbar />
    <Login />
  </Framework7App>
);
