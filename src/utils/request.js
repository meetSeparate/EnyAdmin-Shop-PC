import axios from 'axios'
import {useUserStore} from "@/stores/user";
import router from "@/router";

// 创建axios实例
const request = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000
})   


// axios请求拦截器
request.interceptors.request.use(config => {
    // 1. 获取pinia中的token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    // 2. 如果有token，加在请求头中
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, e => Promise.reject(e))


// axios响应式拦截器
request.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    // 统一错误提示
    ElNotification({
        title: 'Error',
        message: e.response.data.message,
        type: 'error',
    })

    if (e.response.status === 401) {
        userStore.logout()
        router.push({
            path: '/login'
        })
    }
    return Promise.reject(e)
})

export default request