import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreateParcel from "../views/CreateParcel.vue"
import DeshBoard from "../views/DeshBoard.vue"
import Login from "../views/Login.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create-parcel",
    name: "CreateParcel",
    component: CreateParcel,
  },
  {
    path: "/desh-board",
    name: "DeshBoard",
    component: DeshBoard,
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
