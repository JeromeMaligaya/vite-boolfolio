import { createWebHistory, createRouter } from "vue-router";

import AppProjects from "../pages/AppProjects.vue";
import Home from "../pages/Home.vue";
import AppSingleProject from "../pages/AppSingleProject.vue";

const routes = [
    { path: "/projects", component: AppProjects, name: "projects" },
    { path: "/", component: Home, name: "home" },
    { path: "/projects/:id", component: AppSingleProject, name: "projects.show" }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router };