import React from 'react';
import '../../css/framework7-icons.css';
import '../../css/app.css';

import {
  Framework7App,
  Statusbar,
  Panel,
  View,
  Navbar,
  Pages,
  Page,
  Card,
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
import { Logo } from './logo';

class UserSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: '0' };
    this.userSelect = this.userSelect.bind(this);
  }

  userSelect(e) {
    let userType;
    e.target.value === '1'
      ? (userType = 'Company')
      : e.target.value === '2' ? (userType = 'Individual') : (userType = null);
    this.setState({ userType });
  }
  render() {
    console.log(this.state);
    return (
      <Page>
        <Navbar backLink="Back" sliding />
        <Logo />
        <ContentBlock id="user-dropdown" className="input-list">
          <ListItem className="list-item-main">
            <FormLabel className="select-input-label" id="user-select">
              Select User Type
            </FormLabel>
            <FormInput
              onChange={e => this.userSelect(e)}
              className="select-input-main"
              type="select"
            >
              <option value="0">Choose User Type</option>
              <option value="1">Company</option>
              <option value="2">Individual</option>
            </FormInput>
          </ListItem>
        </ContentBlock>

        <Button
          big
          fill
          href={
            this.state.userType === 'Company'
              ? '/company'
              : this.state.userType === 'Individual' ? '/individual' : null
          }
          title="Company"
          className="bottom-button"
        >
          Continue
        </Button>
      </Page>
    );
  }
}

export default UserSelect;
