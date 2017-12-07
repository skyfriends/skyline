import Company from './components/pages/company';
import { Main } from './components/pages/main';
import { Individual } from './components/pages/individual';

export const routes = [
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
