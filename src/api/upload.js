import axios from './index'

const api = {
    upload_file: '/uploadFile',
    upload_image: '/uploadImage',
    upload_image_smms: '/uploadImageSMMS',
}

export default api

export function uploadImage(data) {
    return axios({
        url: api.upload_image,
        method: 'post',
        data: data,
    })
}

export function uploadImageSMMS(data) {
    return axios({
        url: api.upload_image_smms,
        method: 'post',
        data: data,
    })
}


export function uploadFile(data) {
    return axios({
        url: api.upload_file,
        method: 'post',
        data: data,
    })
}
