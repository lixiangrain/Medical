
//vue3框架提供的方法createApp方法，可以用来创建应用实例
import { createApp } from 'vue'
//引入清除样式
import "@/styles/reset.css" 
//引入根组件
import App from '@/App.vue'
//利用createApp方法创建应用实例，且将应用实例挂载到挂载点上
const app = createApp(App)
//引入全局组件---底部、顶部都是全局组件
import HospitalTop from '@/components/hospitalTop/index.vue'
import HospitalBottom from '@/components/hospitalBotton/index.vue'

app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
//引入router并安装
import router from '@/router'



//安装router
app.use(router)
//挂载
app.mount('#app')
