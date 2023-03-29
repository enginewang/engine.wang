import axios from './index'

const api = {
    notificationBase: '/noti/',
}

export default api


export function sendTemplateMultiEmail(data) {
    return axios({
        url: api.notificationBase + "sendTemplateMultiEmail",
        method: 'post',
        data: data,
    })
}

export function sendEmail(data) {
    return axios({
        url: api.notificationBase + "sendEmail",
        method: 'post',
        data: data,
    })
}

export function newNoti(data) {
    return axios({
        url: api.notificationBase + "new",
        method: 'post',
        data: data,
    })
}

export function getAllNoti() {
    return axios({
        url: api.notificationBase + "all",
        method: 'get',
    })
}

export function getLastNoti() {
    return axios({
        url: api.notificationBase + "latest",
        method: 'get',
    })
}

export function getNotiById(id) {
    return axios({
        url: api.notificationBase + id,
        method: 'get',
    })
}

export function deleteNotiById(id) {
    return axios({
        url: api.notificationBase + id,
        method: 'delete',
    })
}