import Vue from 'vue'
import VueRouter from 'vue-router'

import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

import store from './store' 
import SystemError from './pages/errors/System.vue'

import PhotoDetail from './pages/PhotoDetail.vue'


// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: PhotoList,
    props: route => {
      const page = route.query.page
      return { page: /^[1-9][0-9]*$/.test(page) ? page * 1 : 1 }
    }
  },
  {
    path: '/photos/:id',
    component: PhotoDetail,
    props: true
  },
  {
    path: '/login',
    component: Login,

    // 以下、起動していない？ログイン後に/loginで遷移できる。
    // 課題は、ログインされている状態でもログインページにアクセスできる点
    beforeEnter (to, from, next) { //定義されたルートにアクセスされてページコンポーネントが切り替わる直前に呼び出される関数
      if (store.getters['auth/check']) {
        console.log('beforeEnter1:', store.getters['auth/check'])
        // console.log('beforeEnter1:', store.getters['auth/username'])
        next('/') // ログインしている場合
      } else {
        console.log('beforeEnter2:', store.getters['auth/check'])
        // console.log('beforeEnter2:', store.getters['auth/username'])
        next()
      }
    }
  },
  {
    path: '/500',
    component: SystemError
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', // ★ 追加
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
