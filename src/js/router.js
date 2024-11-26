import { createWebHistory, createRouter } from "vue-router";

import AppHomepage from "../pages/AppHomepage.vue";
import AppProjects from "../pages/AppProjects.vue";

const routes = [
    { path: "/", component: AppHomepage, name: "homepage" },
    { path: "/projects", component: AppProjects, name: "projects"}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;