import React from 'react';
import {
  Navbar,
  Button,
  Page,
  FormInput,
  ListItem,
  List
} from 'framework7-react';
import { FormLabel } from 'framework7-react/dist/commonjs/framework7-react/FormLabel';
import '../../css/app.css';

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      businessType: '',
      email: '',
      address: '',
      phone: '',
      employees: '',
      asset: '',
      password: '',
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChecked(e) {
    console.log('this.state ', this.state);
    console.log('e ', e);
    if (this.state.checked === false) {
      this.setState({ checked: e.target.checked === true });
      e.target.checked = true;
    } else {
      this.setState({ checked: (e.target.checked = false) });
      e.target.checked = false;
    }
  }

  render() {
    return (
      <Page>
        <Navbar title="Company" backLink="Back" sliding />
        <List>
          <ListItem>
            <FormInput
              type="text"
              name="companyName"
              onChange={this.handleChange}
              value={this.state.companyName}
              placeholder="Name"
            />
          </ListItem>
          <ListItem>
            <FormInput
              className="select-input-main"
              type="select"
              id="company-select"
            >
              <option value="1">Investment Bank</option>
              <option value="2">Hedge Fund</option>
              <option value="3">Mutual Fund</option>
              <option value="4">Insurance Company</option>
              <option value="5">ETF Fund</option>
              <option value="6">Other</option>
            </FormInput>
          </ListItem>
          <ListItem className="form-list-item">
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              cursor="none"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput
              type="text"
              name="address"
              placeholder="Address"
              onChange={this.handleChange}
              value={this.state.address}
            />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput
              type="text"
              name="employees"
              placeholder="Number of Employees"
              onChange={this.handleChange}
              value={this.state.asset}
            />
          </ListItem>
          <ListItem className="form-list-item">
            <FormInput
              type="text"
              name="asset"
              placeholder="Asset Under Management"
              onChange={this.handleChange}
              value={this.state.asset}
            />
          </ListItem>

          <ListItem className="form-list-item">
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
            title="Enable Push Notification "
            checked={this.state.checked}
            onChange={this.handleChecked}
            className="form-list-item"
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
    );
  }
}

export default Company;
