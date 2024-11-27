<script>
    import AppProjectsList from "../components/AppProjectsList.vue";

    export default {
        name: "AppProjects",
        components: {
            AppProjectsList
        }
    }
</script>

<template>
    <!-- Projects List -->
    <section id="projects-list">
        <div class="container-fluid">
            <h2>Projects</h2>
            <div class="row g-3">
                <AppProjectsList />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #projects-list {
        margin-bottom: 1rem;
    }
</style>