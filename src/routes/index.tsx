import { lazy } from 'react';
import { path } from './path';

export const routes = [
  {
    path: '*',
    component: lazy(() => import('../component/page/NotFound'))
  },
  {
    path: path.welcomePage,
    component: lazy(() => import('../component/page/Home'))
  },
  {
    path: path.gamePage,
    component: lazy(() => import('../component/page/Game'))
  }
];
