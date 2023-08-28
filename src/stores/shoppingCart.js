import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useUserStore} from "@/stores/user";
import {insertShopCart, getShopCartList, deleteShopList} from "@/apis/cart";
import {ElMessage} from "element-plus";

export const useCartStore = defineStore('shopping-cart', () => {
    const userStore = useUserStore()
    // 判断是否登录
    const isLogin = computed(() => userStore.userInfo.token)

    // state购物车列表
    const cartList = ref([])

    // 更新数据方法
    const updateShopList = async () => {
        const res = await getShopCartList()
        cartList.value = res.result
    }

    // getters计算总价
    const allPrice = computed(() => {
        return cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    })

    // getters计算总价
    const allCount = computed(() => {
        return cartList.value.reduce((a, c) => a + c.count, 0)
    })

    // getters全选
    const isAll = computed(() => cartList.value.every(item => item.selected))

    // getters计算已选择商品的总数
    const selectAllCount = computed(() => {
        // 获取已选择的商品
        const selectCart = cartList.value.filter(item => item.selected)
        return selectCart.reduce((a, c) => a + c.count, 0)
    })

    // getters计算已选择商品的总价
    const selectAllPrice = computed(() => {
        // 获取已选择的商品
        const selectCart = cartList.value.filter(item => item.selected)
        return selectCart.reduce((a, c) => a + c.price * c.count, 0)
    })

    // action
    const addCart = async (data) => {
        // 加入购物车
        // 传递过来的商品如果cartList中有数量增加
        // 没有直接push
        if (isLogin.value) {
            await insertShopCart(data)
            await updateShopList()

        } else {
            const item = cartList.value.find(item => item.skuId === data.skuId)
            if (item) {
                item.count += data.count
            } else {
                cartList.value.push(data)
            }
        }

    }

    // 单选功能实现
    const selectChange = (skuId) => {
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = !item.selected
    }

    // 全选功能实现
    const selectAll = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    // 删除购物车
    const delCart = async (skuId) => {
        if (isLogin.value) {
            await deleteShopList([skuId])
            await updateShopList()
        } else {
            const index = cartList.value.findIndex(item => item.skuId === skuId)
            cartList.value.splice(index, 1)
        }

        ElMessage({
            type: 'success',
            message: '删除成功'
        })

    }

    // 清除购物车
    const clearCart = () => {
        cartList.value = []
    }

    return {
        cartList,
        allPrice,
        allCount,
        isAll,
        selectAllCount,
        selectAllPrice,
        addCart,
        delCart,
        selectChange,
        selectAll,
        clearCart,
        updateShopList
    }
}, {
    persist: true
})