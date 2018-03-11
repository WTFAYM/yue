export default [
  {
    path: "/userInfo",
    name: "user_info",
    component: resolve => require(['../pages/info.vue'], resolve),
  },
  {
    path: "/login",
    name: "login",
    component: resolve => require(['../pages/login.vue'], resolve),
  },
  {
    path: "/register",
    name: "register",
    component: resolve => require(['../pages/register.vue'], resolve),
  },
  {
    path: "/forgot",
    name: "forgot",
    component: resolve => require(['../pages/forgot.vue'], resolve),
  },
  {
    path: "/history",
    name: "history",
    component: resolve => require(['../pages/history.vue'], resolve),
  },
  {
    path: "/followList",
    name: "follow_list",
    component: resolve => require(['../pages/followList.vue'], resolve),
  },
  {
//客服
    path: "/CS",
    name: "CS",
    component: resolve => require(['../pages/CS.vue'], resolve),
  },
]
