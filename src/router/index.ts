import { createRouter, createWebHistory } from 'vue-router'
//createRouter方法，用于创建路由器实例，可以管理多个路由
const router=createRouter({
    // 路由模式设置
    history:createWebHistory(),
    //管理路由方法
    routes:[
        {
            path:'/home',
            component:()=>import('@/pages/home/index.vue')
        },
        {
            path:'/hospital',
            component:()=>import('@/pages/hospital/index.vue'),
            children:[
                {
                    path:'register',
                    component:()=>import('@/pages/hospital/register/index.vue')
                },
                {
                    path:'close',
                    component:()=>import('@/pages/hospital/close/index.vue')
                },
                {
                    path:'detail',
                    component:()=>import('@/pages/hospital/detail/index.vue')
                },
                {
                    path:'notice',
                    component:()=>import('@/pages/hospital/notice/index.vue')
                },
                {
                    path:'search',
                    component:()=>import('@/pages/hospital/search/index.vue')
                },
            ]
        },

        {
            //重定向，相当于一打开时的路由，也叫做默认路由
            path:'/',
            redirect:'/home'
        }
    ],
    //滚动行为：控制滚动条的位置,相当于下一个路由打开的时候，滚动条放在默认初始位置
    scrollBehavior(){
        return {
            left:0,
            top:0
        }
    }
})
export default router