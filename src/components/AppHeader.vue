<script>
    export default {
        name: "AppHeader"
    }
</script>

<template>
    <header id="main-header">
        <!-- Navbar -->
        <nav id="navbar" class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <router-link :to="{}" class="navbar-brand"></router-link>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="nav" class="collapse navbar-collapse">
                    <ul id="nav-list" class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{}" class="nav-link" aria-current="page"></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>