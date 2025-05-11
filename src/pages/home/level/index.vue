<template>

 <div class="level">
    <h1>医院</h1>
    <div class="content">
         <div class="left">等级:</div>
         <ul class="hospital">
            <li class="active">全部</li>
            <li>三级甲等</li>
            <li>三级乙等</li>
            <li>三级乙等</li>
            <li>全部</li>
            <li>全部</li>
         </ul>
    </div>

 </div>

</template>

<script setup lang='ts'>

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