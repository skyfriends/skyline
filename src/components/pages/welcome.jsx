import React from 'react';
import {
  Navbar,
  Button,
  Page,
  FormInput,
  FormLabel,
  ContentBlock,
  ListItem
} from 'framework7-react';
import '../../css/app.css';

export const Welcome = () => {
  let userType = '';
  return (
    <Page>
      <Navbar title="About" backLink="Back" sliding />

      <ContentBlock className="input-list">
        <ListItem className="list-item-main">
          <FormLabel className="select-input-label" id="user-select">
            Select User Type
          </FormLabel>
          <FormInput className="select-input-main" type="select">
            <option value="1">Company</option>
            <option value="2">Individual</option>
          </FormInput>
        </ListItem>
      </ContentBlock>
      <Button
        big
        round
        fill
        href="/company/"
        title="Company"
        className="bottom-button"
      >
        Continue
      </Button>
    </Page>
  );
};
