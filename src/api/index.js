//import axios from 'axios'

import router from '../routes/router'
import global from '@/global/global.js'
//import qs from 'qs'
import store from '@/store'
//import Vue from 'vue'
// const Vue = require('vue')
import swal from "sweetalert2";
// import store from "@/store/index.js"
const axios = require('axios')
const qs = require('qs')
const service = axios.create({
    timeout: 100000,
    baseURL: "https://app.jryy.site/api/v1/",
    // baseURL: "https://192.168.50.2:7439/api/v1/",
    // baseURL: "http://101.35.155.149:7439/api/v1/",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    }
});

// 创建axios实例
// console.log(location.hostname)
if (location.hostname === "localhost" || location.hostname === "192.168.50.2") {
    service.defaults.baseURL = 'http://192.168.50.2:7439/api/v1/';
    // service.defaults.baseURL = 'http://0.0.0.0:7439/api/v1/';
}




// request拦截器
service.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.Authorization = `Bearer ${localStorage.token}`;
    } else if (store.state.jwt_token) {
        config.headers.Authorization = `Bearer ${store.state.jwt_token}`;
    }

    // if (store.state.jwt_token) {
    //     config.headers.Authorization = `Bearer ${store.state.jwt_token}`;
    // }
    //config.params.accessToken = localStorage.getItem('token');
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
}, error => {
    // console.log("错误的传参");
    // console.log(err);
    return Promise.reject(error)
});

// response拦截器
service.interceptors.response.use(response => {
    // 根据需要对返回数据进行处理：根据前后端约定进行处理（比如用户未登录或权限过期时请求返回的处理）
    const res = response.data;
    // console.log(res);
    if (!res || res.code === -1) {
        // console.log(res);
    }
    return response
}, error => {
    if (error.toString().slice(-3,) === "401") {
        // console.log("验证错误");
        // this.$notify({
        //     type: 'error',
        //     title: '您没有权限访问该页面',
        //     // text: '您好，' + this.adminLoginForm.username + '！',
        //     duration: 4000,
        // });

        // alert("抱歉，您没有权限访问该页面！");
        // window.location.href="http://localhost:8080"
        // console.log("抱歉，您没有权限访问该页面！")
        // let _this = this;
        swal.fire({
            title: `没有权限`,
            text: '抱歉，您没有权限访问该页面！',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            icon: 'error'
        }).then(function (isConfirm) {
            if (isConfirm) {
                setTimeout(window.location.href = global.baseFronted + "userLogin" , 10000)
            } else {
                // console.log("关闭")
            }
        })


        // if(window.location.href.toString().slice(-5,) === "login"){
        //     this.$notify({
        //         group: 'foo',
        //         type: 'error',
        //         title: '账号或密码错误',
        //         text: '请检查账号或密码是否正确，或者联系管理员',
        //         duration: 4000,
        //     });
        // } else {
        //     setTimeout(window.location.href = 'http://localhost:8080' , 10000)
        // }
    } else {
        return Promise.reject(error)
    }
});

export default service
