<script>
    import axios from "axios";

    export default {
        name: "AppProjectsList",
        data: () => ({
            projectsEndpoint: "http://127.0.0.1:8000/api/projects"
        }),
        methods: {
            getProjects() {
                axios.get(this.projectsEndpoint)
                    .then(response => {
                        console.log(response);
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

<template></template>

<style lang="scss" scoped></style>