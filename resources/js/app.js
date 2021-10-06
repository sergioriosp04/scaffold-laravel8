require('./bootstrap');

import Vue from 'vue'
window.Vue = Vue

import App from './components/App'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes: routes,
})

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
