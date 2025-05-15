<template>

 <div class="top">
    <div class="content">
        <div class="left" @click="goHome">
            <img src="../../assets/images/logo.png" alt="">
            <p>尚医通 预约挂号统一平台</p>
        </div>
        <div class="right">
            <p class="help">帮助中心</p>
            <p class="login">登录/注册</p>

        </div>
    </div>
 </div>

</template>

<script setup lang='ts'>
//引入路由器
import { useRouter } from 'vue-router';
let $router=useRouter()
const goHome=()=>{
    //编程式导航跳转到首页
    $router.push({path:'/home'})
}
</script>

<style scoped>
.top {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #55a6fe;
}
.content {
    width: 1200px;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: space-between;
}
.left {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.left img{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.left p {
    font-size: 20px;
    color:#55a6fe;
}
.right {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: grey;
}
.right .help{
    margin-right: 10px;
}
</style>