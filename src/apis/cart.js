import request from '@/utils/http'

// 接口加入购物车
export const insertShopCart = ({skuId, count}) => {
    return request({
        url: '/member/cart',
        method: 'post',
        data: {
            skuId,
            count
        }
    })
}

// 接口获取购物车数据
export const getShopCartList = () => {
    return request({
        url: '/member/cart',
        method: 'get'
    })
}

// 删除购物车数据
export const deleteShopList = (ids) => {
    return request({
        url: '/member/cart',
        method: 'delete',
        data: {
            ids
        }
    })
}


// 合并购物车
export const mergeShopCart = (data) => {
    return request({
        url: '/member/cart/merge',
        method: 'post',
        data
    })
}