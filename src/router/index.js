import Vue from 'vue'
import Router from 'vue-router'
import ClearStar from '../components/clearStar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClearStar',
      component: ClearStar
    }
  ]
})
