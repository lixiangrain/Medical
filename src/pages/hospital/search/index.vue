<template>

 <div>
    <div class="info">
        <h1>{{ hospitalStore.hospitalInfo.hospital?.hosname }}查询信息</h1>
        <el-empty description="暂无信息" />
    </div>
 </div>

</template>

<script setup lang='ts'>
import useDetailStore from '@/store/modules/hospitalDetails';
let hospitalStore=useDetailStore()
</script>

<style scoped>
.info h1{
    text-align: center;
    font-size: 30px;
    margin-top: 15px;
}
</style>