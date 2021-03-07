import axios from 'axios'

export function request(config) {
    let instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000,
    })

    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })
    instance.interceptors.response.use(res => {
        return res
    }, err => {

    })

    return instance(config)
}