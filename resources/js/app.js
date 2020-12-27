/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


// 
window.Vue = require('vue');

// ルーティングの定義をインポートする
import router from './router'

import store from './store'

// ルートコンポーネントをインポートする
import App from './App.vue'


const createApp = async () => {
  await store.dispatch('auth/currentUser')

  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />'
  })
}

createApp()