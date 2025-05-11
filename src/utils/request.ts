//对于axios函数库进行二次封装
//为什么要对axios进行二次封装，二次封装的目的是什么？
//目的，1利用axios请求，相应拦截器  
// 2请求拦截器，一般可以在请求拦截器中携带公共参数token 
// 3响应拦截器，可以简化服务器中返回的数据 处理http网络提供

import axios from "axios";
import { ElMessage } from "element-plus";
//利用axios.create方法创建一个axios实例，可以设置基础路径，超时时间的设置
const request =axios.create({
    baseURL:'/api',//请求的基础路径设置
    timeout:3000//超时的时间设置，超出3s请求就是失败
});
//请求拦截器
request.interceptors.request.use((config)=>{
    //config是请求拦截器回调注入的对象（配置对象），配置对象最重要的一件事情就是header是属性
    //可以通过请求头携带公共参数token
    return config
});//使用请求拦截器



//响应拦截器
request.interceptors.response.use((response)=>{
    //响应拦截器成功的回调，一般会进行简化数据
    return response.data
},(error)=>{
    //响应拦截器失败的回调，处理http错误
    let status=error.response.status;
    switch(status){
        case 404:
            //错误提示的信息
            ElMessage({
                type:'error',
                message:error.message
            })
            break;
        case 500|501|502|503|504|505:
            ElMessage({
                type:'error',
                message:'服务器挂了'
            })
            break;
        case 401:
            ElMessage({
                type:'error',
                message:'参数有误'
            })
    }
    
    return Promise.reject(new Error(error.message))
})

//对外暴露axios
export default request