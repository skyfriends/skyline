import React from 'react';
import {
  Navbar,
  Button,
  Page,
  FormInput,
  FormLabel,
  ListItem,
  List,
} from 'framework7-react';

class Company extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      companyName: '',
      businessType: '',
      email: '',
      address: '',
      phone: '',
      asset: '',
      password: '',
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log('XXXX ', this.state);
    let {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleChecked(e) {
    this.setState({ checked: e.target.value })
  }

  render() {
    return (
      <Page>
        <Navbar title="Company" backLink="Back" sliding />
        <List className form>
          <ListItem>
            <FormLabel>Company Name</FormLabel>
            <FormInput
              type="text"
              name="companyName"
              onChange={this.handleChange}
              value={this.state.companyName}
              placeholder="Name"
              className="text-input-main"
            />
          </ListItem>
          <ListItem>
            <FormLabel onChange={this.handleChange}>Business Type</FormLabel>
            <FormInput type="select" className="select-input-main">
              <option value="1">Investment Bank</option>
              <option value="2">Hedge Fund</option>
              <option value="3">Mutual Fund</option>
              <option value="4">Insurance Company</option>
              <option value="5">ETF Fund</option>
              <option value="6">Other</option>
            </FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Company Email: </FormLabel>
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              cursor="none"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </ListItem>

          <ListItem>
            <FormLabel>Company Address: </FormLabel>
            <FormInput
              type="text"
              name="address"
              placeholder="Address"
              onChange={this.handleChange}
              value={this.state.address}
            />
          </ListItem>

          <ListItem>
            <FormLabel>Phone Number: </FormLabel>
            <FormInput
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </ListItem>

          <ListItem>
            <FormLabel>Asset Under Management: </FormLabel>
            <FormInput
              type="text"
              name="asset"
              placeholder="Employment"
              onChange={this.handleChange}
              value={this.state.asset}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Password: </FormLabel>
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </ListItem>

          <ListItem
            checkbox
            name="push-notification"
            value="1"
            title="Push Notification: "
            checked={this.state.checked}
            onChange={this.handleChecked}
          />

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
    )
  }
}

export default Company;
