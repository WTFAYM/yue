export default [
  {
    path: '/dynamic',
    name: 'dynamic',
    component: resolve => require(['../pages/dynamicPage.vue'], resolve),
  }
]
