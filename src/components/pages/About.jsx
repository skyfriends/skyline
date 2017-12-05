import React from 'react';
import { Page, ContentBlock, Navbar } from 'framework7-react';
import '../../css/app.css'
export const About = () => {
  return <Page>
      <Navbar title="About" backLink="Back" sliding />
      <ContentBlock className="gradient-block" inner>
        <div className="gradient" id="top-gradient" />
        <div className="gradient" id="middle-gradient" />
        <div className="gradient" id="bottom-gradient" />
      </ContentBlock>
    </Page>
};
