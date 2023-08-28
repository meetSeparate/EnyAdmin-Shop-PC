import {defineStore} from "pinia";
import {login} from "@/apis/user";
import {mergeShopCart} from "@/apis/cart";
import {ref} from "vue";
import {useCartStore} from "@/stores/shoppingCart";

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()

    // 定义state存储数据
    const userInfo =ref({})

    // 定义action获取数据
    const getUserInfo = async (data) => {
        let res = await login(data)
        userInfo.value = res.result
        // 本地购物车数据
        const cartData = cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        })
        await mergeShopCart(cartData)
        await cartStore.updateShopList()
    }

    // 退出登录
    const logout = () => {
        cartStore.clearCart()
        userInfo.value = {}
    }

    return {
        userInfo,
        getUserInfo,
        logout
    }
},
    {
        persist: true
    })