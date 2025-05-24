<template>

 <div class="register">
    <div class="top">
        <div class="title">{{hospitalStore.hospitalInfo.hospital?.hosname}}</div>
        <div class="level">
        <svg t="1748069698697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5159" width="16" height="16"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#2c2c2c" p-id="5160"></path></svg>
            <span>{{hospitalStore.hospitalInfo.hospital?.param.hostypeString}}</span>
        </div>        
    </div>
    <!-- 展示内容 -->
     <div class="content">
        <div class="left">
            <img :src="`data:image/jpeg;base64,`+hospitalStore.hospitalInfo.hospital?.logoData" alt="">
        </div>
        <div class="right">
            <div>挂号规则</div>
            <div class="time">
                预约周期：10天 放号时间：{{ hospitalStore.hospitalInfo.bookingRule?.releaseTime }} 停挂时间：{{ hospitalStore.hospitalInfo.bookingRule?.stopTime }}
            </div>
            <div class="address">具体地址：{{ hospitalStore.hospitalInfo. hospital?.param.fullAddress}}</div>
            <div class="route">规划路线：{{ hospitalStore.hospitalInfo.hospital?.route }}</div>
            <div class="releastime">退号时间：就诊前一工作日{{ hospitalStore.hospitalInfo.bookingRule?.quitTime }}取消</div>
            <div class="rule">预约挂号规则</div>
            <div class="ruleInfo" v-for="(item,index) in hospitalStore.hospitalInfo.bookingRule?.rule" :key="index">
                {{ item }}
            </div>
        </div>
     </div>
     <!-- 放置每一个医院的科室的数组 -->
 </div>

</template>

<script setup lang='ts'>
    //引入医院详情仓库数据
    import useDetailStore from '@/store/modules/hospitalDetails';
    let hospitalStore=useDetailStore()
</script>

<style scoped>
.register .top {
    display: flex;
}
.title {
    font-size: 30px;

}
.level{
    margin-left: 10px;
    color: #7f7f7f;
    height: 40px;
    text-align: center;
    line-height: 40px;
}
.level span{
    margin-left: 5px;
}
.content{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

} 
.content .left {
    width: 80px;
}
img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.content .right{
    flex:1;
    font-size: 14px;
    margin-left: 20px;
}
.right .time,.address,.route,.releastime {
    margin-top: 10px;
    color:#7f7f7f
}
.right .rule{
    margin: 10px 0;
}
</style>