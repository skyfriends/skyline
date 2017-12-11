import React from 'react';
import {
  Navbar,
  Button,
  Page,
  FormInput,
  ListItem,
  List,
  ContentBlock
} from 'framework7-react';
import '../../css/app.css';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Page>
        <Navbar title="Company" backLink="Back" sliding />
        <List className="user-create no-hairlines-between no-hairlines">
          <ListItem id="welcome-list-header">
            <ContentBlock className="welcome-header">
              CREATE NEW ACCOUNT
            </ContentBlock>
          </ListItem>
          <div className="form-inner-container" id="split-container">
            <div className="form-name-split" id="split-firstname">
              <ListItem className="form-list-item">
                <FormInput
                  placeholder="First Name"
                  className="select-input-main"
                  type="text"
                />
              </ListItem>
            </div>
            <div className="form-name-split" id="split-lastname">
              <ListItem className="form-list-item">
                <FormInput
                  placeholder="Last Name"
                  className="select-input-main"
                  type="text"
                />
              </ListItem>
            </div>
          </div>
          <div className="form-inner-container" id="username-create-account">
            <ListItem className="form-list-item">
              <FormInput
                placeholder="Username"
                className="select-input-main"
                type="text"
              />
            </ListItem>
          </div>
          <div className="form-inner-container" id="email-create-account">
            <ListItem className="form-list-item">
              <FormInput
                placeholder="Email Address"
                className="select-input-main"
                type="text"
              />
            </ListItem>
          </div>
          <div className="form-inner-container" id="password-create-account">
            <ListItem className="form-list-item">
              <FormInput
                placeholder="Password"
                className="select-input-main"
                type="text"
              />
            </ListItem>
          </div>
        </List>

        <Button
          big
          fill
          href="/main/"
          title="Company"
          className="bottom-button"
        >
          Continue
        </Button>
      </Page>
    );
  }
}

export default CreateAccount;
