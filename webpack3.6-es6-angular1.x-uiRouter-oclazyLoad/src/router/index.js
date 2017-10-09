import loginRouter from '../modules/login/login.router';
import dashboardRouter from '../modules/dashboard/dashboard.router';

module.exports = angular => [
  loginRouter,
  dashboardRouter,
  {
    name: 'access_denied',
    url: '/denied',
    template: '<h3>Access Denied!</h3>',
  },
  {
    name: 'about',
    url: '/about',
    parent: 'dashboard',
    abstract: false,
    data: {
      roles: ['user']
    },
    views: {
      dashboard: {
        template: '<h3>this is about page</h3>',
      }
    },
  },
];
