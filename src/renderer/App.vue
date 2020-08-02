<template>
    <div>
        <header>
            <router-link :to="{ name: 'home' }">Home</router-link>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>