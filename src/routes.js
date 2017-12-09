import Company from './components/pages/company';
import { Main } from './components/pages/main';
import User from './components/pages/user-select';
import Individual from './components/pages/individual';

export const routes = [
  {
    path: '/user',
    component: User,
  },
  {
    path: '/company/',
    component: Company,
  },
  {
    path: '/main/',
    component: Main,
  },
  {
    path: '/individual/',
    component: Individual,
  },
];
