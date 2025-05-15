<template>

 <div class="level">
    <h1>医院</h1>
    <div class="content">
         <div class="left">等级:</div>
         <ul class="hospital">
            <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
            <li v-for="level in levelArr" :class="{active:activeFlag==level.value}" :key="level.value" @click="changeLevel(level.value)">{{level.name}}</li>
         </ul>
    </div>

 </div>

</template>

<script setup lang='ts'>
import { reqHospitallevelAndRegion } from '@/api/home';
import { onMounted,ref } from 'vue';
import type { HospitallevelAndRegionArr, HospitallevelAndRegionResponseData } from '@/api/home/type';
//定义一个数组存储医院等级
let levelArr=ref<HospitallevelAndRegionArr>([])
//控制医院等级高亮的响应式数组

let activeFlag=ref<string>('')


//组件挂载完毕

onMounted(()=>{
   getLevel()
})

//获取医院等级数据
const getLevel = async () =>{
   let res:HospitallevelAndRegionResponseData =await reqHospitallevelAndRegion('HosType');
   //测试请求是否成功
   // console.log(res);
   //存储医院等级的数据
   if(res.code=200) {
      levelArr.value=res.data
   }
   
}
const changeLevel= (level:string)=>{
   //level存储的是每个等级的value
   // console.log(level);
   //高亮响应式数据存储level数值
   activeFlag.value=level
   //触发自定义事件：将医院等级参数传递给父组件
   $emit('getLevel',level)
   
}
let $emit = defineEmits(['getLevel'])
</script>

<script lang="ts">
   export default {
      name:'Level'
   }
</script>

<style scoped>
.level{
   color:#7f7f7f;
}
.level h1 {
   font-weight:700;
   margin:10px 0;
}
.content{
   display: flex;
}
.content .left {
   margin-right: 10px;
}
 .hospital {
   display: flex;
}
.hospital li{
   margin-right: 10px;
}
 .hospital li:hover {
   color: #55a6fe;
   cursor: pointer;
}
.active {
   color:#55a6fe;
}
</style>