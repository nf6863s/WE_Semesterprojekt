import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Homework from "@/views/Homework";
import HomeworkReview from "@/views/HomeworkReview";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/homework',
    name: 'Homework',
    component: Homework,
  },
  {
    path: '/homework/:folder/:task',
    name: 'Review',
    component: HomeworkReview,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
