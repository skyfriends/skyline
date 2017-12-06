import React from 'react';
import {
  Navbar,
  Views,
  View,
  NavLeft,
  NavCenter,
  NavRight,
  Link,
  Icon,
  Button,
  Page,
  FormInput,
  ListItem
} from 'framework7-react';
import '../../css/app.css';

export const Welcome = () => {
  return (
    <Page>
      <Navbar title="About" backLink="Back" sliding />

      <FormInput className="user-type" type="select">
        <option value="1">Company</option>
        <option value="2">Individual</option>
      </FormInput>

      <Button big id="continue-button">
        Continue
      </Button>
    </Page>
  );
};
