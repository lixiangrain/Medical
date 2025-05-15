<template>

 <div class="adress">
    <div class="content">
        <div class="left">
            地区:
        </div>
        <ul>
            <li :class="{active:RegionFlag==''}" @click="changeRegion('')">全部</li>
            <li v-for="item in RegionArr" :key="item.value" :class="{active:RegionFlag==item.value}" @click="changeRegion(item.value)">{{ item.name }}</li>

        </ul>
    </div>
        
 </div>

</template>

<script setup lang='ts'>
    
import { reqHospitallevelAndRegion } from '@/api/home';
import { onMounted,ref } from 'vue';
import type { HospitallevelAndRegionArr, HospitallevelAndRegionResponseData } from '@/api/home/type';
//存储地区数组
let RegionArr=ref<HospitallevelAndRegionArr>([])
//地区高亮响应式数组
let RegionFlag=ref<string>('')
//地区组件挂在完毕获取地区数组
onMounted(()=>{
    getRegion()
})
//获取地区数据
const getRegion= async ()=>{
    let res:HospitallevelAndRegionResponseData=await reqHospitallevelAndRegion('Beijin')
    // console.log(res);
    //存储全部地区数据
    if (res.code==200){
        RegionArr.value=res.data
    }
    
}
//点击不同区域按钮回调
const changeRegion=(region:string)=>{
    RegionFlag.value=region
    //给父组件传递区域的参数
    $emit('getRegion',region)
}
let $emit =defineEmits(['getRegion'])
</script>

<script lang="ts" >
    export default {
        name:"Region"
    }
</script>

<style scoped>
.adress {
    color: #7f7f7f;
    margin-top: 10px;

}
.content {
    display: flex;
}
.left {
    margin-right: 10px;
    width: 53px;
}
ul {
    display: flex;
    flex-wrap: wrap;
    
}
ul li {
    margin-right: 10px;
    margin-bottom: 10px;
}
.active {
    color: #55a6fe;
}
li:hover {
    cursor: pointer;
    color:#55a6fe;
}
</style>