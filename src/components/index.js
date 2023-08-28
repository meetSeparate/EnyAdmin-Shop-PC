import XtxSku from "@/components/XtxSku/index.vue";
import ImageView from "@/components/ImageView/index.vue"

export const componentsPlugin = {
    install(app) {
        app.component('XtxSku', XtxSku)
        app.component('ImageView', ImageView)
    }
}