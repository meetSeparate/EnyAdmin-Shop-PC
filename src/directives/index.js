// 定义懒加载插件
import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin = {
    install (app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el: 指令绑定的元素
                // binding: binding.value  指令等于号后面的值
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // 判断元素是否进入视口区域
                        if (isIntersecting) {
                            // 进入
                            el.src = binding.value
                            // 第一次加载完成后停止监听dom元素，避免内存浪费
                            stop()
                        }
                    }
                )
            }
        })
    }
}