import { defineStore } from "pinia";
import { reqHospitalDetail } from "@/api/hospital";
//引入详情数据的数据类型
import type { HospitalDetail } from "@/api/hospital/type";
//pinia仓库写法：组合式API，选择式API
const useDetailStore =defineStore('Detail',{
    state:()=>{
        return {
            //医院详情数组
            hospitalInfo:{}
        }
    },
    actions:{
        //获取医院详情的方法
        async getHospital(hoscode:string) {
            let res:HospitalDetail=await reqHospitalDetail(hoscode);
            if(res.code==200){
               this.hospitalInfo=res.data;
            }
        }
    },
    getters:{

    },

})
//获取仓库的方法对外暴露
export default useDetailStore