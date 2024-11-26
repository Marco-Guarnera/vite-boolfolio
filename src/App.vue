<script>
    import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
    import AppMain from "./components/AppMain.vue";

    export default {
        name: "App",
        components: {
            AppHeader,
            AppMain
        }
    }
</script>

<template>
    <!-- Main Header -->
    <AppHeader />
    <!-- Main -->
    <RouterView />
</template>

<style lang="scss">
    @use "../node_modules/bootstrap/scss/bootstrap.scss";
    @use "./scss/generic.scss" as *;
</style>