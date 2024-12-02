<script>
    export default {
        name: "AppProjectsListItem",
        props: {
            projectObject: {
                type: Object,
                required: true
            }
        },
        computed: {
            projectImg() {
                return "http://127.0.0.1:8000/storage/" + this.projectObject.img;
            }
        }
    }
</script>

<template>
    <div class="col-3">
        <div class="card">
            <img class="card-img-top" :src="projectImg" :alt="projectObject.name">
            <div class="card-body">
                <h5 class="card-title" v-text="projectObject.name"></h5>
                <p class="card-text" v-text="projectObject.description"></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        min-height: 250px;
    }
</style>