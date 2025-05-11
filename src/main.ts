
//vue3框架提供的方法createApp方法，可以用来创建应用实例
import { createApp } from 'vue'
//引入清除样式
import "@/styles/reset.css" 
//引入根组件
import App from '@/App.vue'
//引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入router并安装
import router from '@/router'
//利用createApp方法创建应用实例，且将应用实例挂载到挂载点上
const app = createApp(App)
//引入全局组件---底部、顶部都是全局组件
import HospitalTop from '@/components/hospitalTop/index.vue'
import HospitalBottom from '@/components/hospitalBotton/index.vue'

//引入element-plus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'

app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)



//安装element-plus插件
app.use(ElementPlus,{
    locale:zhCn
})
//安装router
app.use(router)
//挂载
app.mount('#app')
