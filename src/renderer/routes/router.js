import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
]

export default new VueRouter({
    routes
})