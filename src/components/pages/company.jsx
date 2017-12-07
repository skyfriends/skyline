import React from 'react';
import {
  Navbar,
  ContentBlock,
  Link,
  Icon,
  Page,
  FormInput,
  FormLabel,
  ListItem
} from 'framework7-react';

export const Company = () => {
  return (
    <Page>
      <Navbar title="About" backLink="Back" sliding />
      <ContentBlock className="input-list">
        <ListItem className="list-item-main">
          <FormLabel className="text-input-label">Company Name</FormLabel>
          <FormInput
            type="text"
            placeholder="Name"
            className="text-input-main"
          />
        </ListItem>

        <ListItem className="list-item-main">
          <FormLabel className="select-input-label">Business Type</FormLabel>
          <FormInput type="select" className="select-input-main">
            <option value="1">Investment Bank</option>
            <option value="2">Hedge Fund</option>
            <option value="3">Mutual Fund</option>
            <option value="4">Insurance Company</option>
            <option value="5">ETF Fund</option>
            <option value="6">Other</option>
          </FormInput>
        </ListItem>
      </ContentBlock>
    </Page>
  );
};
