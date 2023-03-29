import axios from './index'

const api = {
    userBaseInfo: '/userBasicInfo',
    userBase: '/user/',
}

export default api


export function getUserDBInfo() {
    return axios({
        url: api.userBase + "dbInfo",
        method: 'get',
    })
}

export function getUserPublicById(id) {
    return axios({
        url: api.userBase + "publicInfoById/" + id,
        method: 'get',
    })
}

export function initUserByCsv(filename) {
    return axios({
        url: api.userBase + "initDataByCsv/" + filename,
        method: 'get',
    })
}

export function addUserByCsv(data) {
    return axios({
        url: api.userBase + "addUserByCsv",
        method: 'post',
        data: data
    })
}

export function addUserPairByCsv(filename) {
    return axios({
        url: api.userBase + "addPairByCsv/" + filename,
        method: 'get',
    })
}

export function downloadReport() {
    return axios({
        url: api.userBase + "downloadReport",
        method: 'get',
    })
}

export function getUserBaseInfo(data) {
    return axios({
        url: api.userBaseInfo,
        method: 'post',
        data: data,
    })
}

//1
export function getPublicInfo(data) {
    return axios({
        url: "/publicInfo",
        method: 'post',
        data: data,
    })
}


export function dailySign(data) {
    return axios({
        url: api.userBase + "dailySign",
        method: 'post',
        data: data,
    })
}


export function getSignInfo(data) {
    return axios({
        url: api.userBase + "getSignInfo",
        method: 'post',
        data: data,
    })
}


// export function getUser(id) {
//     return axios({
//         url: api.userBase + '/getUserById/' + id,
//         method: 'get'
//     })
// }

export function removePair(data) {
    return axios({
        url: api.userBase + "removePair",
        method: 'post',
        data: data,
    })
}

export function addPair(data) {
    return axios({
        url: api.userBase + "addPair",
        method: 'post',
        data: data,
    })
}
//
// export function getUserById(id) {
//     return axios({
//         url: api.userBase + id,
//         method: 'get'
//     })
// }

export function getUserById(id) {
    return axios({
        url: api.userBase +  id,
        method: 'get'
    })
}


export function ProposeChoose(data) {
    return axios({
        url: api.userBase + "proposeChoose",
        method: 'post',
        data: data,
    })
}

export function AcceptChoose(data) {
    return axios({
        url: api.userBase + "acceptChoose",
        method: 'post',
        data: data,
    })
}

export function RejectChoose(data) {
    return axios({
        url: api.userBase + "rejectChoose",
        method: 'post',
        data: data,
    })
}

export function RecallChoose(data) {
    return axios({
        url: api.userBase + "recallChoose",
        method: 'post',
        data: data,
    })
}

export function FlushCanChoose(data) {
    return axios({
        url: api.userBase + "flushCanChoose",
        method: 'post',
        data: data,
    })
}

export function getUserBySid(sid) {
    return axios({
        url: api.userBase + "bySid/" + sid,
        method: 'get'
    })
}

export function modifyUserBySid(sid, data) {
    return axios({
        url: api.userBase + "bySid/" + sid,
        method: 'put',
        data: data,
    })
}

export function getAllUsers() {
    return axios({
        url: api.userBase + 'all',
        method: 'get'
    })
}

export function getRegisteredUsers() {
    return axios({
        url: api.userBase + 'registered/all',
        method: 'get'
    })
}


export function getUnAuditUsers() {
    return axios({
        url: api.userBase + 'unAudit/all',
        method: 'get'
    })
}


export function auditUser(data) {
    return axios({
        url: api.userBase + 'auditRegister',
        method: 'post',
        data: data,
    })
}

// export function getAllUsernameList() {
//     return axios({
//         url: api.userBase + 'usernameList',
//         method: 'get'
//     })
// }

export function removeUser(id) {
    return axios({
        url: api.userBase + id,
        method: 'delete'
    })
}


// export function userRegister(data) {
//     return axios({
//         url: api.userBase,
//         method: 'post',
//         data: data,
//     })
// }


export function updateUser(id, data) {
    return axios({
        url: api.userBase + id,
        method: 'put',
        data: data,
    })
}


