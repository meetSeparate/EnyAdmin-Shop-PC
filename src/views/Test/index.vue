<script setup>
import {ref, getCurrentInstance, onMounted} from "vue";
const {proxy} = getCurrentInstance()

const box = ref(null)
onMounted(() => {
  console.log(box.value)
})
</script>

<template>
<div class="box" ref="box">

</div>
</template>

<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  background-color: #27ba9b;
}
</style>