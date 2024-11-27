<script>
    import axios from "axios";

    import AppProjectsListItem from "./AppProjectsListItem.vue";

    export default {
        name: "AppProjectsList",
        components: {
            AppProjectsListItem
        },
        data: () => ({
            // Endpoint
            projectsEndpoint: "http://127.0.0.1:8000/api/projects",
            // Struttura dati
            projectsList: []
        }),
        methods: {
            getProjects() {
                axios.get(this.projectsEndpoint)
                    .then(response => {
                        console.log(response);
                        this.projectsList = response.data.results;
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
    <AppProjectsListItem v-for="project in projectsList" :key="project.id" :projectObject="project" />
</template>

<style lang="scss" scoped></style>