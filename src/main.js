import Vue from 'vue'
import VueTailwind from 'vue-tailwind/dist/full'

import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import './assets/scss/app.scss'
export const Bus = new Vue();
Vue.component('flash-message', require('./components/FlashMessage.vue').default);
Vue.component('modal', require('./components/Modal.vue').default);

const settings = {
}
Vue.use(VueTailwind, settings)


Vue.config.productionTip = false

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})
