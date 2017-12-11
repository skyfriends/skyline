import Company from './components/pages/company';
import { Main } from './components/pages/main';
import User from './components/pages/user-select';
import Individual from './components/pages/individual';
import CreateAccount from './components/pages/create-account';

export const routes = [
  {
    path: '/user',
    component: User,
  },
  {
    path: '/create/',
    component: CreateAccount,
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
