<template>

 <div>
    <!-- 首页轮播图结构 -->
      <Carousel></Carousel>
      <!-- 首页搜索医院的表单区域 -->
      <Search></Search>
      <!-- 底部展示医院结构 -->
       <!-- //gutter表示这两列之间的间距 -->
       <el-row gutter="20">
        <!-- 这个结构将行分为了二十四份 -->
          <el-col :span="20">
            <!-- 等级子组件 -->
              <Level @getLevel="getLevel"></Level>
            <!-- 地区子组件 -->
             <Adress @getRegion="getRegion"></Adress>
             <!-- 展示医院卡片的结构 -->
              <div class="hospital" v-if="hasHospitalArr.length>0">
                <Car v-for="(item,index) in hasHospitalArr" :key="index" class="item" :hospitalInfo="item"></Car>
              </div>
              <el-empty v-else description="没有医院" />
              <!-- 分页器 -->
                 <el-pagination
                  v-model:current-page="pageNo"
                  v-model:page-size="pageSize"
                  :page-sizes="[10, 20, 30, 40]"
                  :background="true"
                  layout="prev, pager ,next,jumper,->,  sizes,total "
                  :total="total"
                  @current-change="currentChange"
                  @size-change="sizeChange"
                />
          </el-col>
          <el-col :span="4">
              <Tip></Tip>
          </el-col>
       </el-row>
 </div>

</template>

<script setup lang='ts'>
//引入组合式API函数
import { onMounted,ref } from 'vue'
import { reqHospital } from '@/api/home'
//引入首页轮播图组件
import Carousel from '@/pages/home/carousel/index.vue'
//引入首页搜索文件
import Search from './search/index.vue'
//引入首页等级组件
import Level from './level/index.vue'
import type { Content,HospitalResponseData } from '@/api/home/type'
//引入首页地区选择组件
import Adress from './adress/index.vue'
//引入展示医院卡片的结构
import Car from './car/index.vue'
//引入右侧组件
import Tip from './tip/index.vue'

//分页器需要的数字
//分页器页码
let pageNo =ref<number>(1);
//分页器一页展示几条数据
let pageSize=ref<number>(10)
//存储已有的医院的数组
let hasHospitalArr=ref<Content>([])
//存储医院总共个数
let total=ref<number>(0);
//存储医院等级的响应式数组
let hostype =ref<string>('')
//存储医院地区
let districtCode=ref<string>('')


//组件挂在完毕：发一次请求
onMounted(()=>{
  getHospitalInfo()
});


//获取已有医院的数据
const getHospitalInfo= async()=>{
  //获取医院的数据：默认获取第一页，一页十个
  let result:HospitalResponseData = await reqHospital(pageNo.value,pageSize.value,hostype.value,districtCode.value);
  if(result.code==200){
    //存储已有医院的数据
   hasHospitalArr.value = result.data.content;
   //存储医院的总个数
   total.value=result.data.totalElements;
    
  }
  
}
//分页器页码发生变化时候回调
function currentChange(){
  getHospitalInfo()
  
}
//分页器下拉菜单发生变化的时候触发
function sizeChange(){
  //当前页码归第一页
  pageNo.value=1
  //再次发请求获取医院数据
  getHospitalInfo()
  
}

//子组件自定义事件：获取儿子给父组件传递来的等级参数
const getLevel =(Level:string)=>{
  //收集参数:等级
  hostype.value=Level
  //再次发请求
  getHospitalInfo()
}
//获取子组件传递过来的地区参数
const getRegion=(Region:string)=>{
  //存储地区参数
  districtCode.value=Region
  getHospitalInfo()
}
</script>

<style scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hospital .item{
  width: 48%;
  margin:10px 0;
}
:deep(.el-pagination){
  margin-bottom: 10px;
}
</style>