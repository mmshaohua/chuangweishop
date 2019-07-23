export default [
  {
    path: "/home",
    component: () => import("../views/goods/Home")
  },
  {
    path: "",
    redirect: "/home"
  }
];
