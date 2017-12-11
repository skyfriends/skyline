import React from 'react';
import {
  ListItem,
  FormInput,
  List,
  Navbar,
  Page,
  Button
} from 'framework7-react';

class Individual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      address: '',
      phone: '',
      employment: '',
      income: '',
      investment: '',
      password: '',
      checked: false
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
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

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handlePhoneChange(e) {
    let x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

    let checkedPhone = e.target.value;
    console.log(checkedPhone);

    this.setState({ phone: checkedPhone });
  }

  render() {
    return <Page>
        <Navbar title="Individual" backLink="Back" sliding />
        <List className="input-form-list no-hairlines-between no-hairlines">
          <ListItem className="input-form-list-item">
            <FormInput type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput type="text" name="email" placeholder="Email" cursor="none" onChange={this.handleChange} value={this.state.email} />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput type="text" name="address" placeholder="Address" onChange={this.handleChange} value={this.state.address} />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput type="text" name="phone" placeholder="Phone" onChange={this.handlePhoneChange} value={this.state.phone} />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput type="text" name="employment" placeholder="Employment" onChange={this.handleChange} value={this.state.employment} />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput type="text" name="income" placeholder="Income" onChange={this.handleChange} value={this.state.income} />
          </ListItem>

          <ListItem className="form-list-item">
            <FormInput type="text" name="investment" placeholder="Investment" onChange={this.handleChange} value={this.state.investment} />
          </ListItem>

          <ListItem>
            <FormInput type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} className="form-list-item" />
          </ListItem>

          <ListItem className="form-list-item" checkbox name="push-notification" value="1" title="Enable Push Notification " checked={this.state.checked} onChange={this.handleChecked} />
        </List>
        <Button big fill href="/main/" title="Company" className="bottom-button">
          Continue
        </Button>
      </Page>
  }
}

export default Individual;
