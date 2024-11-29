<script>
    import axios from "axios";

    import AppLoader from "./AppLoader.vue";
    import AppProjectsListItem from "./AppProjectsListItem.vue";

    export default {
        name: "AppProjectsList",
        components: {
            AppLoader,
            AppProjectsListItem
        },
        data: () => ({
            // Endpoint
            projectsEndpoint: "http://127.0.0.1:8000/api/projects",
            // Variabile
            loaded: false,
            // Struttura dati
            projectsList: []
        }),
        methods: {
            getProjects() {
                axios.get(this.projectsEndpoint)
                    .then(response => {
                        console.log(response);
                        this.projectsList = response.data.results;
                        this.loaded = true;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        created() {
            this.getProjects();
        }
    }
</script>

<template>
    <AppLoader v-if="!loaded" />
    <AppProjectsListItem v-for="project in projectsList" :key="project.id" :projectObject="project" v-else />
</template>

<style lang="scss" scoped></style>