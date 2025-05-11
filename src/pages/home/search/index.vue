<template>

 <div class="search">
    <el-autocomplete
        clearable
        placeholder="请输入医院名称"
      />
      <el-button type="primary" size="default"><el-icon><Search /></el-icon></el-button>
 </div>

</template>

<script setup lang='ts'>
//引入element-plus提供的图标
import { Search } from '@element-plus/icons-vue';
//深度选择器：>>>/deep/ :deep
</script>



<style scoped>

    .search {
    width: 100%;
    height: 50px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px 0;
}
/* 改变elementplus样式需要使用深度选择 */
:deep(.el-autocomplete) {
    width: 600px;
    margin-right: 10px;
}
</style> 
