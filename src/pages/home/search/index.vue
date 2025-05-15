<template>

 <div class="search">
    <el-autocomplete
        clearable
        placeholder="请输入医院名称"
        v-model="hosname"
        :fetch-suggestions="fetchdata"
        :trigger-on-focus="false"
        @select="goDetail"
      />
      <el-button type="primary" size="default"><el-icon><Search /></el-icon></el-button>
 </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue';
//引入element-plus提供的图标
import { Search } from '@element-plus/icons-vue';
//引入请求方法
import {reqHospitalInfo} from '@/api/home'
import type { HospitalInfo,Content } from '@/api/home/type';
import { useRouter } from 'vue-router';
//创建路由器对象
let $router=useRouter()
//收集搜索关键字(医院的名字)
let hosname=ref<string>('')
//顶部组件的回调
const fetchdata=async (keyword:string,cd:any)=>{
    //当用户输入完关键字函数会执行一次，发请求获取需要展示的数据即可
    let res:HospitalInfo = await reqHospitalInfo(keyword)
    //整理数据，变成人家组件需要的数据格式
    let showData=res.data.map(item=>{
        return {
            value:item.hosname,//显示的医院的名字
            hoscode:item.hoscode//存储医院的编码
        }
    })
    //给组件提供展示数组
    cd(showData)
    
    
}
const goDetail=(item:any)=>{
    console.log(item);
    //点击推荐项进入医院的详情页，将来需要携带query参数（医院的编码）
    $router.push({path:'/hospital'})
    
}
//深度选择器：>>>/deep/ :deep
</script>

<script lang="ts">
    export default {
        name:'Search'
    }
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
