import request from '@/utils/http'
import request1 from '@/utils/request'

export const getDetail = (id) => request({
    url: '/goods',
    params: {
        id
    }
})

export const getDetails = (id) => request1({
    url: '/api/goodsDetail',
    params: {
        id
    }
})

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return request({
        url:'/goods/hot',
        params:{
            id,
            type,
            limit
        }
    })
}