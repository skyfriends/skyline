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
  Page
} from 'framework7-react';

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
