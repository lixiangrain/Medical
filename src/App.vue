<template>
 <div class="container">
   <!-- 顶部全局组件 -->
    <HospitalTop></HospitalTop>
    <!-- 展示路由组件 -->
     <div class="content">
      <!-- 展示路由组件的区域 -->
         <router-view></router-view>
     </div>
     <HospitalBottom></HospitalBottom>
 </div>
</template>



<script setup lang="ts">
   import request from './utils/request';
   import { onMounted } from 'vue';
   onMounted(()=>{
      request.get('/hosp/hospital/1/10').then(res=>{
         console.log('App组件展示获取的数据',res);
         
      })
   })
</script>


<style scoped>
.container {
   display: flex;
   flex-direction: column;
   align-items: center;
}
.content {
   margin-top: 70px;
   width: 1200px;
   min-height: 700px;
   /* background-color: red; */
}

</style>
