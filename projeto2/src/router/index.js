import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('../pages/principal.vue') },
  { path: '/sobre', component: ()=> import('../pages/sobre.vue')}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
