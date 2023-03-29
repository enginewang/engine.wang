import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

// router.beforeEach((to, from, next) => {
//   if (window._hmt) {
//     if (to.path) {
//       window._hmt.push(['_trackPageview', '/#' + to.fullPath])
//     }
//   }
//   next();
// })

export default router;
