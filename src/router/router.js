import Vue from 'vue'
import Router from 'vue-router'

import choCatalog from '../components/cho-catalog'
import choMap from '../components/cho-map'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: choMap
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: choCatalog,
      props: true
    }
  ]
})

export default router;
