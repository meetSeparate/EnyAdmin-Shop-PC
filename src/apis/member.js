import request from '@/utils/http'

export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
        url:'/goods/relevant',
        params: {
            limit
        }
    })
}


/*
params: {
    orderState:0,
    page:1,
    pageSize:2
}
*/

export const getUserOrder = (params) => {
    return request({
        url:'/member/order',
        method:'GET',
        params
    })
}