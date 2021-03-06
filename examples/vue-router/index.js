import Vue from 'vue'
import router from './router'
import App from './App.vue'

window.onload = function () {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
