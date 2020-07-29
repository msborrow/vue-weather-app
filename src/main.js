import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueGeolocation from 'vue-browser-geolocation';
import './scss/main.scss';

Vue.use(VueGeolocation);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
