import Vue from 'vue'
import Router from 'vue-router'

import choCatalog from '../components/cho-catalog'
import choMap from '../components/cho-map'
import choCatalogItemFull from '../components/cho-catalog-item-full'

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
      component: choCatalog
    },
    {
      path: '/catalog/object/:heritageObjectId',
      name: 'object',
      component: choCatalogItemFull,
      props: true
    }

    // TO DO: Authorization check
    // {
    //   path: '/adminpanel',
    //   name: 'adminpanel',
    //   component: choAdminPanel,
    //   beforeEnter: ((to, from, next) => {
    //     if(store.state.isAutorized || to.name == 'map') {
    //       next()
    //     }
    //     else {
    //       next('/')
    //     }
    //   })
    // }
  ]
})

export default router;
