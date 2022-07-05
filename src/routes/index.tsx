import { lazy } from 'react';

export const routes = [
  {
    path: '*',
    component: lazy(() => import('../component/page/NotFound'))
  },
  {
    path: '/',
    component: lazy(() => import('../component/page/Home'))
  },
  {
    path: '/user',
    component: lazy(() => import('../component/page/Profile'))
  }
]