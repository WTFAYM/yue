import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from '../modules/home/router'
import userRouter from '../modules/user/router'

Vue.use(Router)

export default new Router({
  routes: [
    ...userRouter,
    ...homeRouter,
    {
      path: '*',
      redirect: '/home/home'
    }
  ]
})
