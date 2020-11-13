import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
import InProgress from '../views/InProgress'
import ParkingSummary from '../views/ParkingSummary'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/inprogress',
      name: InProgress,
      component: InProgress
    },
    {
      path: '/parkingsummary',
      name: ParkingSummary,
      component: ParkingSummary
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name.name === ('InProgress') || to.name.name === ('ParkingSummary')) {
    if (!store.getters.garageDetails) {
      next({ name: 'Home'})
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
