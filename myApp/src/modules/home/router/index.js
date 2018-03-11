export default [
  {
    path: '/home',
    redirect: {
      name: 'home_home'
    },
    component: resolve => require(['../app.vue'], resolve),
    children: [
      {
        path: "home",
        name: "home_home",
        component: resolve => require(['../pages/home.vue'], resolve),
      },
      {
        path: "classify",
        name: "home_classify",
        component: resolve => require(['../pages/classify.vue'], resolve),
      },
      {
        path: "dynamic",
        name: "home_dynamic",
        component: resolve => require(['../pages/dynamic.vue'], resolve),
      },
      {
        path: "message",
        name: "home_message",
        component: resolve => require(['../pages/message.vue'], resolve),
      }
    ]
  },
  {
    path: "/test",
    name: "test",
    component: resolve => require(['../pages/test.vue'], resolve)
  }
]
