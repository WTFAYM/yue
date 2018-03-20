export default [
  {
    path: "/addActive",
    name: "active_add",
    component: resolve => require(['../pages/addActive.vue'], resolve),
  },
  {
    path: "/activeDetail",
    name: "active_detail",
    component: resolve => require(['../pages/activeDetail.vue'], resolve),
  },
  {
    path: "/addTree",
    name: "tree_add",
    component: resolve => require(['../pages/addTree.vue'], resolve),
  },
]
