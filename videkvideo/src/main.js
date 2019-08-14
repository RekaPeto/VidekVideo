
import Vue from 'vue'
import App from './App.vue'
import router from './Router'
let Bootstrap = require('bootstrap')
import jQuery from 'jquery'
global.jQuery = jQuery

//import 'bootstrap'

//import '../node_modules/bootstrap/dist/css/bootstrap.css'; 

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')