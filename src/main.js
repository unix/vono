import '@zeit-ui/vue/dist/zeit-ui.css'
import { install } from 'vue-auto'
import ZeitUI from '@zeit-ui/vue'
import Vue from 'vue'
import app from './app.vue'

const router = install(Vue, {
  prefix: 'vi',
})
Vue.use(ZeitUI)

new Vue({
  router,
  render: h => h(app),
}).$mount('#app')
