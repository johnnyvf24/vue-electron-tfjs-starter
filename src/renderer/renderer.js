import Vue from 'vue'
import VueRouter from 'vue-router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { NavbarPlugin, LayoutPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from './routes/router'

import './custom.scss'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

Vue.use(NavbarPlugin)
Vue.use(LayoutPlugin)
Vue.use(VueRouter)

new Vue({
    router,
    render: (h) => h(App)
}).$mount("#root")