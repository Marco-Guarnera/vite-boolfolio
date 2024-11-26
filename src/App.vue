<script>
    import AppHeader from "./components/AppHeader.vue";

    export default {
        name: "App",
        components: {
            AppHeader
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