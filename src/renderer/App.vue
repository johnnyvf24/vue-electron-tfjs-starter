<template>
    <div>
        <header>
            <custom-navbar />
        </header>
        <main>
            <b-container fluid>
                <router-view></router-view>
            </b-container>
        </main>
    </div>
</template>

<script>
    import CustomNavbar from './components/nav/CustomNavBar.vue'
    export default {
        components: {
            CustomNavbar
        }
    }
</script>

<style scoped>

</style>