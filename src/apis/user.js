import request from '@/utils/request'

export const login = (data) => request({
    url: '/api/login/',
    method: 'post',
    data: data
})