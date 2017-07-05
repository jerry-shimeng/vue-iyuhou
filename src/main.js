// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery';
import 'bootstrap/js/bootstrap.min.js';
import 'bootstrap/css/bootstrap.min.css';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.config.productionTip = false;

import VueMasonryPlugin from 'vue-masonry';
Vue.use(VueMasonryPlugin);

import   'vue-lazyload'

// Vue.use(VueLazyload, {
//   error: 'static/img/default.jpeg',
//   loading: 'static/img/loading.gif',
//   try: 3 // default 1
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
