/*!

=========================================================
* engine导航 - v1.0.0
=========================================================
* Copyright 2020 engine导航 (http://127.0.0.1:8080)
* Coded by yichengme.site
=========================================================

*/

import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import store from './store'
import 'sweetalert2/dist/sweetalert2.css'
import axios from "axios";

// router setup
import router from './routes/router';
import global from '@/global/global.js'

Vue.prototype.GLOBAL = global
Vue.prototype.$http = axios
// js import
// import swal from 'sweetalert2'
// style import

// plugin setup
Vue.use(DashboardPlugin);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
});
