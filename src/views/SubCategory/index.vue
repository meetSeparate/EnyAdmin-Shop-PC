<script setup>
import {useRoute} from "vue-router";
import {getCategoryFilterAPI, getSubCategoryAPI} from "@/apis/category";
import {onMounted, reactive, ref} from "vue";
import GoodsItem from "@/views/Home/components/GoodsItem.vue";

const route = useRoute()
// 获取面包屑导航数据
const filterData = ref({})
const getFilterData = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  filterData.value = res.result
}

// 商品列表
const shopList = ref([])

// 商品列表参数
const config = reactive({
  categoryId: route.params.id ,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime',
})

// 获取基础商品列表
const getShopList = async () => {
  let res = await getSubCategoryAPI(config)
  shopList.value = res.result.items
}

// 排序筛选改变回调函数
const tabChange = () => {
  config.page = 1
  getShopList()
}

// 无限滚动加载商品数据
const disabled = ref(false)

const load = async () => {
  config.page ++
  let res = await getSubCategoryAPI(config)
  shopList.value = [...shopList.value, ...res.result.items]

  if (res.result.items.length === 0) {
    // 停止监听
    disabled.value = true
  }
}

onMounted(() => {
  getFilterData()
  getShopList()
})

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{filterData.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="config.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem :good="good" v-for="(good, index) in shopList" :key="good.id"/>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>