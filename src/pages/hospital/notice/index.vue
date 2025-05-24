<template>

 <div class="notice">
    <h1 class="hosname">{{hospitalStore.hospitalInfo.hospital?.hosname}}预约挂号须知</h1>
    <div class="top">为方便您早日康复，请您认真阅读预约挂号通知：</div>
    <div class="info">
        <div class="tip">一、预约实名制：</div>
        <div class="text">
            统一平台电话预约和网上预约挂号均采用实名制注册预约，请您如实提供就诊人员的真是姓名，有效证件号（身份证，护照），性别，手机号码，社保卡等基本信息
        </div>

    </div>
    <div class="info">
        <div class="tip">二、预约挂号：</div>
        <div class="text">
            统一平台电话预约和网上预约挂号均采用实名制注册预约，请您如实提供就诊人员的真是姓名，有效证件号（身份证，护照），性别，手机号码，社保卡等基本信息
        </div>
    </div>
    <div class="info">
        <div class="tip">三、取消预约：</div>
        <div class="text">
            统一平台电话预约和网上预约挂号均采用实名制注册预约，请您如实提供就诊人员的真是姓名，有效证件号（身份证，护照），性别，手机号码，社保卡等基本信息
        </div>
    </div>
    <div class="info">
        <div class="tip">四、爽约处理：</div>
        <div class="text">
            统一平台电话预约和网上预约挂号均采用实名制注册预约，请您如实提供就诊人员的真是姓名，有效证件号（身份证，护照），性别，手机号码，社保卡等基本信息
        </div>

    </div>
 </div>

</template>

<script setup lang='ts'>
import useDetailStore from '@/store/modules/hospitalDetails';
let hospitalStore=useDetailStore()
</script>

<style scoped>
.notice .hosname{
    text-align: center;
    font-size: 30px;
}
.top {
    margin:10px 0;
    color: #7f7f7f; 
}
.info .tip {
    color:red;
    font-weight: 700;
}
.text {
    color: #7f7f7f;
    margin: 10px 0;
    line-height: 30px;
}
</style>