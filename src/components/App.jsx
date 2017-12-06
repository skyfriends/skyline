import React from 'react';
import '../css/framework7-icons.css';
import { routes } from '../routes.js';
import { Framework7App } from 'framework7-react';
import { Welcome } from './pages/Welcome';
import { Company } from './pages/company-form';
import { MainView } from './pages/main';
import { Individual } from './pages/individual-form';

export const App = () => (
  <Framework7App themeType="ios" routes={routes}>
    <Individual />
  </Framework7App>
);
