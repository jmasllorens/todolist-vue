import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import MovieDetails from '../views/MovieDetails.vue'
import MoviesNode from '../views/MoviesNode.vue'
import Tasks from '../views/Tasks.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/node',
    name: 'MoviesNode',
    component: MoviesNode
  },
  {
    path: '/movies/:id',
    name: 'MovieDetails',
    component: MovieDetails
  },

  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
