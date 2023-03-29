import axios from './index'

const api = {
    postBase: '/post/',
    cateBase: '/category/',
    tagBase: '/tag/',
}

export default api

export function newPost(data) {
    return axios({
        url: api.postBase + 'new',
        method: 'post',
        data: data,
    })
}

export function getAllPosts() {
    return axios({
        url: api.postBase + 'all',
        method: 'get'
    })
}

export function getPostById(data) {
    return axios({
        url: api.postBase + 'getPostById',
        method: 'post',
        data: data,
    })
}

export function getPostsByParams(data) {
    return axios({
        url: api.postBase + 'getPostByParam',
        method: 'post',
        data: data,
    })
}

export function userLike(data) {
    return axios({
        url: api.postBase + 'userLike',
        method: 'post',
        data: data,
    })
}

export function userFavorite(data) {
    return axios({
        url: api.postBase + 'userFavorite',
        method: 'post',
        data: data,
    })
}

export function userFavoriteList(data) {
    return axios({
        url: api.postBase + 'userFavoritePosts',
        method: 'post',
        data: data,
    })
}

export function getAllCategories() {
    return axios({
        url: api.cateBase + 'all',
        method: 'get'
    })
}

export function getAllTags() {
    return axios({
        url: api.tagBase + 'all',
        method: 'get'
    })
}

export function newCategory(data) {
    return axios({
        url: api.cateBase + 'new',
        method: 'post',
        data: data,
    })
}

export function removeCategory(id) {
    return axios({
        url: api.cateBase + id,
        method: 'delete'
    })
}

export function newTag(data) {
    return axios({
        url: api.tagBase + 'new',
        method: 'post',
        data: data,
    })
}

export function removeTag(id) {
    return axios({
        url: api.tagBase + id,
        method: 'delete'
    })
}





