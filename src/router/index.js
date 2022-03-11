import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreateParcel from "../views/CreateParcel.vue"
import DeshBoard from "../views/DeshBoard.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create-parcel",
    name: "CreateParcel",
    component: CreateParcel
  },
  {
    path: "/desh-board",
    name: "DeshBoard",
    component: DeshBoard
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
