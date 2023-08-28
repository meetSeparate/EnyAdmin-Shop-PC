import request from '@/utils/http'

export const login = (data) => request({
    url: '/login',
    method: 'post',
    data: data
})