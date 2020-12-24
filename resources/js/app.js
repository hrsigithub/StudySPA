require('./bootstrap');

import { createApp } from 'vue/dist/vue.esm-bundler.js';
window.createApp = createApp;

import router from './router'

import App from './App.vue'
//window.HelloComponent = require('./components/Hello.vue').default;

const app = createApp({
    components: { App },
    template: '<App />',
    // template: '<h1>Hello world</h1>'
})    

app.use(router)

.mount('#app')
                                                         