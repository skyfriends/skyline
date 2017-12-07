import React from 'react';
import {
  ListItem,
  FormInput,
  List,
  Navbar,
  Page
} from 'framework7-react';

class Individual extends React.Component {
  constructor(props) {
    super(props)

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
    }
    this.handleChecked = this.handleChecked.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChecked(e) {
    console.log('this.state ', this.state)
    console.log('e ', e)
    if (this.state.checked === false) {
      this.setState({ checked: e.target.checked === true })
      e.target.checked = true
    } else {
      this.setState({ checked: (e.target.checked = false) })
      e.target.checked = false
    }
  }

  handleChange(e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return <Page>
        <Navbar title="Individual" backLink="Back" sliding />
        <List className form>
          <ListItem>
            <FormInput type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
          </ListItem>

          <ListItem>
            <FormInput type="text" name="email" placeholder="Email" cursor="none" />
          </ListItem>

          <ListItem>
            <FormInput type="text" name="address" placeholder="Address" onChange={this.handleChange} value={this.state.address} />
          </ListItem>

          <ListItem>
            <FormInput type="text" name="phone" placeholder="Phone" onChange={this.handleChange} value={this.state.phone} />
          </ListItem>

          <ListItem>
            <FormInput type="text" name="employment" placeholder="Employment" onChange={this.handleChange} value={this.state.employment} />
          </ListItem>

          <ListItem>
            <FormInput type="text" name="income" placeholder="Income" onChange={this.handleChange} value={this.state.income} />
          </ListItem>

          <ListItem>
            <FormInput type="text" name="investment" placeholder="Investment" onChange={this.handleChange} value={this.state.investment} />
          </ListItem>

          <ListItem>
            <FormInput type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
          </ListItem>

          <ListItem checkbox name="push-notification" value="1" title="Enable Push Notification " checked={this.state.checked} onChange={this.handleChecked} />
        </List>
      </Page>
  }
};

export default Individual;