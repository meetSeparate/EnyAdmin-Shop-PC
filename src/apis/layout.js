import request from '@/utils/request'

export function getCategoryAPI() {
    return request({
        url: '/api/categoryHead/'
    })
}