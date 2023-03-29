
import axios from './index'

const api = {
    checkNameSidInDB: '/checkNameSidInDB',
    checkEmailInDB: '/checkEmailInDB',
    sendEmail: '/sendEmail',
    sendEmailWithId: '/sendEmailWithId',
    pidList: '/pidList/',
}

export default api

export function CheckNameSidInDB(data) {
    return axios({
        url: api.checkNameSidInDB,
        method: 'post',
        data: data,
    })
}

export function CheckEmailInDB(data) {
    return axios({
        url: api.checkEmailInDB,
        method: 'post',
        data: data,
    })
}

export function sendEmail(data) {
    return axios({
        url: api.sendEmail,
        method: 'post',
        data: data,
    })
}

export function sendEmailWithId(data) {
    return axios({
        url: api.sendEmailWithId,
        method: 'post',
        data: data,
    })
}

export function GetPidListByGender(gender) {
    return axios({
        url: api.pidList + gender,
        method: 'get',
    })
}