import React from 'react';
import '../css/framework7-icons.css';
import { routes } from '../routes.js';
import { Framework7App } from 'framework7-react';
import { Welcome } from './pages/Welcome';

export const App = () => (
  <Framework7App themeType="ios" routes={routes}>
    <Welcome />
  </Framework7App>
);
