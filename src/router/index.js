import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("../pages/IndexView.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../pages/CountriesListView.vue"),
    children: [
      {
        path: ":alphaCode", // THEN, YOU WILL HAVE TO CHANGE THIS FOR A PARAM!
        name: "details",
        component: () => import("../pages/CountryDetailsView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
