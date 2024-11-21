<script>
    import AppMain from "./components/AppMain.vue";

    export default {
        name: "App",
        components: {
            AppMain
        }
    }
</script>

<template>
    <!-- Main -->
    <AppMain />
</template>

<style lang="scss">
    @use "../node_modules/bootstrap/scss/bootstrap.scss";
    @use "./scss/generic.scss" as *;
</style>