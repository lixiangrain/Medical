<template>

 <div class="hospital">
   <!-- 左侧导航区 -->
    
    <div class="menu">
      <div class="top">
         <el-icon><svg t="1747449332220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7028" width="18" height="18"><path d="M925.859307 516.069689c-6.916527 0-13.899568-2.099824-19.925818-6.471388L511.999488 224.273926 118.064464 509.5983c-15.208377 11.042497-36.482913 7.627724-47.504944-7.587815-11.015891-15.214517-7.614421-36.489052 7.601118-47.504944l413.886425-299.781644c11.906168-8.636704 27.998681-8.636704 39.904849 0l413.887448 299.781644c15.214517 11.015891 18.615986 32.290427 7.601118 47.504944C946.782849 511.193635 936.397315 516.069689 925.859307 516.069689z" fill="#CCCCCC" p-id="7029"></path><path d="M827.579957 875.753631 604.764242 875.753631c-18.789948 0-34.017768-15.22782-34.017768-34.016745L570.746474 590.190827 453.212594 590.190827l0 251.545036c0 18.788925-15.22782 34.016745-34.017768 34.016745L196.404694 875.752608c-18.789948 0-34.017768-15.22782-34.017768-34.016745L162.386926 410.853345c0-18.788925 15.22782-34.017768 34.017768-34.017768 18.788925 0 34.017768 15.228843 34.017768 34.017768L230.422462 807.719118l154.753573 0L385.176035 556.173059c0-18.789948 15.22782-34.017768 34.017768-34.017768l185.569416 0c18.788925 0 34.017768 15.226796 34.017768 34.017768L638.780986 807.719118l154.780179 0L793.561166 410.853345c0-18.788925 15.228843-34.017768 34.017768-34.017768s34.017768 15.228843 34.017768 34.017768l0 430.882518C861.598748 860.525811 846.369905 875.753631 827.579957 875.753631z" fill="#CCCCCC" p-id="7030"></path></svg></el-icon>
         <span>/ 医院信息</span>
      </div>
          <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon><svg t="1747449145795" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4913" width="18" height="18"><path d="M787.029333 235.818667c-54.4-55.893333-125.269333-89.6-207.573333-102.229334-63.701333-9.386667-130.56-5.802667-191.786667 14.933334l-29.696 11.52c-120.106667 52.650667-207.104 166.314667-225.962666 296.106666-12.117333 83.2 3.285333 172.032 41.173333 247.04 39.082667 77.312 103.893333 129.834667 184.106667 160.768 87.893333 33.92 185.6 42.410667 275.882666 12.373334a387.413333 387.413333 0 0 0 247.808-257.792c29.141333-100.906667 13.994667-213.674667-37.12-305.92a360.106667 360.106667 0 0 0-56.789333-76.885334zM516.266667 256a72.533333 72.533333 0 1 1 0 145.066667 72.533333 72.533333 0 1 1 0-145.066667z m54.954666 460.8H465.066667v-232.96l105.728-51.2v284.16z" p-id="4914"></path></svg></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon><svg t="1747449235436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5971" width="18" height="18"><path d="M447.325002 129.919978c-178.868807 0-323.872319 145.003512-323.872319 323.874365s145.003512 323.874365 323.872319 323.874365c178.870854 0 323.874365-145.003512 323.874365-323.874365S626.195855 129.919978 447.325002 129.919978zM447.325002 713.712071c-143.31915 0-259.915681-116.598578-259.915681-259.917728s116.596532-259.917728 259.915681-259.917728 259.917728 116.598578 259.917728 259.917728S590.643128 713.712071 447.325002 713.712071z" fill="#040000" p-id="5972"></path><path d="M891.573945 840.061734 748.236376 696.699606c-13.43601 16.625656-28.371164 31.91385-44.338834 46.099944l142.458549 142.481062c6.246261 6.246261 14.427594 9.368368 22.60995 9.368368s16.363689-3.123131 22.60995-9.368368C904.065444 872.789113 904.065444 852.553233 891.573945 840.061734z" fill="#040000" p-id="5973"></path></svg></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
   <!-- 右侧内容展示区：路由组件展示区 -->
    <div class="content">
         <!-- 子组件展示结构地区，路由展示区 -->
          <router-view></router-view>
    </div>
 </div>

</template>

<script setup lang='ts'>
  //引入生命周期函数
  import { onMounted } from 'vue';
  import useDetailStore from '@/store/modules/hospitalDetails';
  //获取仓库对象
  let detailStore=useDetailStore()
   //左侧导航区所需要的图标
   import { Document,Menu as iconMenu,Location,Setting } from '@element-plus/icons-vue';
   import { useRouter,useRoute } from 'vue-router';
   //获取路由器
   let $router =useRouter()
   //获取当前路由信息
   let $route=useRoute()
   //左侧菜单点击事件的回调
   const changeActive=(path:string)=>{
      //跳转到对应的二级路由
      $router.push({path})
   }
   //组件挂在完毕，通知pinia仓库发请求获取医院详情数据存储于仓库之中
   onMounted(()=>{
      detailStore.getHospital($route.query.hoscode);
   })
</script>

<style scoped>
.hospital {
   display: flex;
}
.hospital .menu {
   /* 将整个医院分为十份，导航区占两份 */
   flex: 2;
   display: flex;
   flex-direction: column;
   align-items: center;
   font-size: 15px;

}
.hospital .menu .top {
   margin-top: 5px;
   color: #7f7f7f;
   display: flex;
   justify-content: center;
   align-items: center;
}
.hospital .content {
   
   /* 将整个医院分为十份，内容区占8份 */
   flex: 8;
}
</style>