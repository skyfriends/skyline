import React from 'react';
import { Page, ContentBlock, Navbar } from 'framework7-react';

export const About = () => {
  return (
    <Page>
      <Navbar title="About" backLink="Back" sliding />
      <ContentBlock inner>
        <p>about boiler</p>
      </ContentBlock>
    </Page>
  );
};
