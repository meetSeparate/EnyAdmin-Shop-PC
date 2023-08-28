// 封装Banner轮播图逻辑
import {ref, onMounted} from "vue";
import {getBannerAPI} from "@/apis/home";


export const useBanner = () => {
    // 获取轮播图
    // 存储轮播图列表
    const bannerList = ref([])

    // 获取轮播图数据
    const getBannerList = async () => {
        const res = await getBannerAPI('2')
        bannerList.value = res.result
    }

    onMounted(() => getBannerList())
    return {
        bannerList
    }
}