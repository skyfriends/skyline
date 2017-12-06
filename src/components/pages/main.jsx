import React from 'react';
import { Navbar, Link, Page } from 'framework7-react';

export const Main = () => {
  return (
    <Page>
      <Navbar backLink="Back" sliding />
      <Link>Portfolio</Link>
      <Link>Compare To Market</Link>
      <Link>Messages</Link>
      <Link>About</Link>
    </Page>
  );
};
