export default [
  {
    path: '/currentActive',
    name: 'message_currentAct',
    component: resolve => require(['../pages/currentAct.vue'], resolve),
  },
  {
    path: '/msgAnswer',
    name: 'message_Answer',
    component: resolve => require(['../pages/msgAnswer.vue'], resolve),
  },
  {
    path: '/msgLike',
    name: 'message_like',
    component: resolve => require(['../pages/msgLike.vue'], resolve),
  },
  {
    path: '/msgSystem',
    name: 'message_System',
    component: resolve => require(['../pages/msgSystem.vue'], resolve),
  },
  {
    path: '/msgSetting',
    name: 'message_Setting',
    component: resolve => require(['../pages/msgSetting.vue'], resolve),
  },
  {
    path: '/rule',
    name: 'rule',
    component: resolve => require(['../pages/rule.vue'], resolve),
  },
]
