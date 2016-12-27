//main.js
const Vue = require('vue');
const list = require('./components/list.vue')
const router = require('./router.js');
import '../css/common.css';

const app = new Vue({
  router: router
}).$mount('#app')

