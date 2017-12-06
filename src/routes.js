import { Welcome } from './components/pages/Welcome';
import { Company } from './components/pages/company-form';
import { Main } from './components/pages/main';
import { Individual } from './components/pages/individual-form';

export const routes = [
  {
    path: '/welcome/',
    component: Welcome,
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
