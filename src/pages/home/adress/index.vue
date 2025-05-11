<template>

 <div class="adress">
    <div class="content">
        <div class="left">
            地区:
        </div>
        <ul>
            <li class="active">全部</li>
            <li>昌平区</li>
            <li>昌平区</li>
            <li>昌平区</li>
            <li>昌平区</li>
            <li>昌平区</li>
            <li>昌平区</li>
            <li>昌平区</li>
            <li>昌平区</li>
            <li v-for="item in 15" :key="item">昌平区</li>

        </ul>
    </div>
        
 </div>

</template>

<script setup lang='ts'>

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