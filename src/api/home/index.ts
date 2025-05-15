//统一管理首页模块接口
import request from "@/utils/request";
import type { HospitalResponseData,HospitallevelAndRegionResponseData } from "./type";

//通过枚举管理首页模块的接口地址
enum API {
    //获取已有的医院的数据接口地址
    HOSPITAL_URL='/hosp/hospital/',
    //获取医院等级与地区接口
    HOSPITALLEVELANDREGION_URL='/cmn/dict/findByDictCode/'
}

//获取医院的数据
export const reqHospital =(page:number,limit:number) =>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`${page}/${limit}`)
//获取医院等级或者地区
export const reqHospitallevelAndRegion =(dictcode:string) =>request.get<any,HospitallevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL+`${dictcode}`)
