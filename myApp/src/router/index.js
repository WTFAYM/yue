import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from '../modules/home/router'
import userRouter from '../modules/user/router'
import activeRouter from '../modules/activity/router'
import dynamicRouter from '../modules/dynamic/router'
import messageRouter from '../modules/message/router'
import classifyRouter from '../modules/classify/router'

Vue.use(Router)

export default new Router({
  routes: [
    ...userRouter,
    ...dynamicRouter,
    ...messageRouter,
    ...activeRouter,
    ...classifyRouter,
    ...homeRouter,
    {
      path: '*',
      redirect: '/home/home'
    }
  ]
})
