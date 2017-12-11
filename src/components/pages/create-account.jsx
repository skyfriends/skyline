import React from 'react';
import {
  Navbar,
  Button,
  Page,
  FormInput,
  ListItem,
  List
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
        <List>
          <ListItem>
            <FormInput
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="Name"
            />
          </ListItem>
          <ListItem>
            <FormInput
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="Name"
            />
          </ListItem>
          <ListItem>
            <FormInput
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="Name"
            />
          </ListItem>
          <ListItem>
            <FormInput
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="Name"
            />
          </ListItem>

          <Button
            big
            fill
            href="/main/"
            title="Company"
            className="bottom-button"
          >
            Continue
          </Button>
        </List>
      </Page>
    );
  }
}

export default CreateAccount;
