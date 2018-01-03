import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    { path: '/list', component: () => import('./List.vue') },
    { path: '/hello', component: () => import('./Hello.vue') }
  ]
})

export default router
