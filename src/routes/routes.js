import React, {lazy} from "react";
import { browserHistory, Router } from 'react-router-dom';

const MainPageLazy =  lazy( () => import('../content/pages/main-page/MainPage'));
const UserDashboardLazy =  lazy( () => import('../content/pages/user-dashboard-page/UserDashboardPage'));

const routes = [
  {
    path: "/dashboard/:id",
    component: UserDashboardLazy,
    exact: true
  },
  {
    path:"*",
    component: MainPageLazy
  }
];

export default routes;