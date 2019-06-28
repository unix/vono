import '@zeit-ui/vue/dist/zeit-ui.css'
import * as VueAuto from 'vue-auto'
import ZeitUI from '@zeit-ui/vue'
import Vue from 'vue'
import app from './app.vue'
import router from './router'

Vue.use(VueAuto, {
  prefix: 'vi',
})
Vue.use(ZeitUI)

new Vue({
  router,
  render: h => h(app),
}).$mount('#app')
