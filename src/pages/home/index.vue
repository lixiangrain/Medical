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
              <Level></Level>
            <!-- 地区子组件 -->
             <Adress></Adress>
             <!-- 展示医院卡片的结构 -->
              <div class="hospital">
                <Car v-for="item in 10" :key="item" class="item"></Car>
              </div>
              <!-- 分页器 -->
                 <el-pagination
                  v-model:current-page="pageNo"
                  v-model:page-size="pageSize"
                  :page-sizes="[10, 20, 30, 40]"
                  :background="true"
                  layout="prev, pager ,next,jumper,->,  sizes,total "
                  :total="13"
                />
          </el-col>
          <el-col :span="4">
              456
          </el-col>
       </el-row>
 </div>

</template>

<script setup lang='ts'>
//引入首页轮播图组件
import Carousel from '@/pages/home/carousel/index.vue'
//引入首页搜索文件
import Search from './search/index.vue'
//引入首页等级组件
import Level from './level/index.vue'
//引入首页地区选择组件
import Adress from './adress/index.vue'
//引入展示医院卡片的结构
import Car from './car/index.vue'

//分页器需要的数字
import {ref} from 'vue'
//分页器页码
let pageNo =ref<number>(1);
//分页器一页展示几条数据
let pageSize=ref(10)
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
</style>