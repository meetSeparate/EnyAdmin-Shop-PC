<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSticky from "@/views/Layout/components/LayoutSticky.vue";
import {useCategoryStore} from "@/stores/category";
import {onMounted} from "vue";

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})
console.log('Layout被重新加载了...')
</script>

<template>
  <LayoutNav/>
  <LayoutSticky/>
  <LayoutHeader/>
  <RouterView/>
  <LayoutFooter/>
</template>