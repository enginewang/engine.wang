import axios from './index'

const api = {
    chatBase: '/chat/',
}

export default api


// export function getContactList(data) {
//     return axios({
//         url: api.userBase + "initDataByCsv/" + filename,
//         method: 'get',
//     })
// }

export function getContactList(data) {
    return axios({
        url: api.chatBase + "getAllContact",
        method: 'post',
        data: data
    })
}
