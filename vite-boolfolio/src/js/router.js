import { createWebHistory, createRouter } from "vue-router";

import AppProjects from "../pages/AppProjects.vue";
import Home from "../pages/Home.vue";

const routes = [
    { path: "/projects", component: AppProjects, name: "projects" },
    { path: "/", component: Home, name: "home" },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router };