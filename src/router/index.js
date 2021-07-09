import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo.vue'
import hklDate from "../views/HKL/hklDate/hklDate.vue"
import hklView from "../views/HKL/hklView/hklView.vue"
import myText from '../views/HKL/text'
import hklBill from '../views/HKL/hklBill/bill'
import billHome from '../views/HKL/hklBill/billHome'
import home from '../views/HKL/home'
import html5 from '../views/H5.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/myText',
    name: 'text1',
    component: myText
  },
  {
    path: '/hklDate',
    name: 'hklDate',
    component: hklDate
  },
  {
    path: '/hklView',
    name: 'hklView',
    component: hklView
  },
  {
    path: '/hklBill',
    name: 'bill',
    component: hklBill
  },
  {
    path: '/billHome',
    name: 'billHome',
    component: billHome
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/html5',
    name: 'H5',
    component: html5
  }
]

const router = new VueRouter({
  routes
})

export default router
