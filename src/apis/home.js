import request from '../utils/request'

export function getBannerAPI(distributionSite) {
    return request({
        url: '/api/banner',
        method: 'get',
        params: {
            distributionSite: distributionSite
        }
    })
}


/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
    return request({
        url: '/api/new',
        method: 'get'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return request.get('/api/hot')
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return request({
        url: '/api/good',
        method: 'get'
    })
}
