import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import login from '../views/login.vue'
import cars from '../views/cars.vue'
import cars_info from '../views/cars_info.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/cars',
    name: 'cars',
    component: cars
  },
  {
    path: '/cars_info/:id', // Add a dynamic id parameter
    name: 'cars_info',
    component: cars_info
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
