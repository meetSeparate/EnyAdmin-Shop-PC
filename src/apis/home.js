import http from '../utils/http'

export function getBannerAPI(distributionSite) {
    return http({
        url: '/home/banner',
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
    return http({
        url: '/home/new',
        method: 'get'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return http.get('/home/hot')
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return http({
        url: '/home/goods',
        method: 'get'
    })
}
