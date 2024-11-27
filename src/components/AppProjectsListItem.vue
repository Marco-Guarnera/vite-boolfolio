<script>
    export default {
        name: "AppProjectsListItem",
        props: {
            projectObject: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div class="col-3">
        <div class="card">
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