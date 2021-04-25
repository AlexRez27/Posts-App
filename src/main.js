import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'materialize-css/dist/js/materialize.min'
import Posts from '@/components/Posts'

Vue.config.productionTip = false
Vue.component('Posts', Posts)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.directive('scroll', {
//   inserted: function (el, binding) {
//     let f = function (evt) {
//       if (binding.value(evt, el)) {
//         window.removeEventListener('scroll', f);
//       }
//     };
//     window.addEventListener('scroll', f);
//   },
// });