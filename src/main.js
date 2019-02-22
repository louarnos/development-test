// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/icons'
import axios from 'axios'
import Vuetify from 'vuetify'

Vue.use( Vuetify, {
    theme: {
        primary: '#1976D2'
    }
})

Vue.config.productionTip = false
Vue.component('icon', Icon)

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Content-Type'] = 'application/json';

import "vuetify/dist/vuetify.min.js"
import "vuetify/dist/vuetify.min.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
