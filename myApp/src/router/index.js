import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from '../modules/home/router'
import userRouter from '../modules/user/router'
import activeRouter from '../modules/activity/router'

Vue.use(Router)

export default new Router({
  routes: [
    ...userRouter,
    ...activeRouter,
    ...homeRouter,
    {
      path: '*',
      redirect: '/home/home'
    }
  ]
})
