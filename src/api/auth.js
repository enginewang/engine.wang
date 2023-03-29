import axios from './index'

const api = {
    adminLogin: '/auth/adminLogin',
    userLogin: '/auth/userLogin',
    userRegisterApply: '/auth/userRegisterApply',
    userRegister: '/auth/userRegister',
    userAddPassword: '/auth/userAddPassword',
    userUpdatePassword: 'user/userUpdatePassword'
}

export default api

export function adminLogin(data) {
    return axios({
        url: api.adminLogin,
        method: 'post',
        data: data,
    })
}

export function userLogin(data) {
    return axios({
        url: api.userLogin,
        method: 'post',
        data: data,
    })
}

export function userRegisterApply(data) {
    return axios({
        url: api.userRegisterApply,
        method: 'post',
        data: data,
    })
}

export function userAddPassword(data) {
    return axios({
        url: api.userAddPassword,
        method: 'post',
        data: data,
    })
}

export function userRegister(data) {
    return axios({
        url: api.userRegister,
        method: 'post',
        data: data,
    })
}

export function userUpdatePassword(data) {
    return axios({
        url: api.userUpdatePassword,
        method: 'post',
        data: data,
    })
}

