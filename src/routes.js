import { Welcome } from './components/pages/Welcome';
import { Company } from './components/pages/company-form';
import { Main } from './components/pages/main';

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
];
