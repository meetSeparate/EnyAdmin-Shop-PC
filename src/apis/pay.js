import request from '@/utils/http'

// 生成订单接口
export const getOrderAPI = (id) => {
    return request({
        url: `/member/order/${id}`
    })
}