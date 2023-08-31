// 封装获取分类数据
import {getCategoryApi} from "@/apis/category";
import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";

export const useCategory = () => {
    // 定义数据对象
    const categoryData = ref({})

    // 或者id路由参数
    const route = useRoute()


    // 获取数据方法
    const getCategoryData = async (id = route.params.id) => {
        const res = await getCategoryApi(id)
        categoryData.value = res.data
    }

    onMounted(() => getCategoryData())

    // 监听路由变化生命周期钩子
    onBeforeRouteUpdate((to) => {
        getCategoryData(to.params.id)
    })

    return {
        categoryData
    }
}