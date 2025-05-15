//定义首页模块ts数据类型
export interface ResponseData{
    code:number,
    message:string,
    ok:boolean
}

//代表已有医院数据的ts类型
export interface hospital{
    //双引号可有可无
    "id":string,
    "createTime":string,
    "updateTime":string,
    "isDeleted":number,
    param:{
        hostypeString:string,
        fullAddress:string
    },
    hoscode:string
    hosname:string
    hostype:string
    provinceCode:string
    cityCode:string
    districtcode:string
    address:string
    logoData:string
    intro:string
    route:string
    status:string
    bookingRule:{
        cycle:number
        releaseTime:string
        stopTime:string
        quitDay:number
        quitTime:string
        rule:string[]
    }
}

//存储全部已有医院的数组的类型
export type Content =hospital [];

//获取已有医院接口返回的数据ts类型
export interface HospitalResponseData extends ResponseData{
    data:{
        content:Content
        pageable:{
            sort:{
                sorted:boolean
                unsorted:boolean
                empty:boolean
            }
            pageNumber:number
            pageSize:number
            offset:number
            paged:boolean
            unpaged:boolean
        }
        totalPages:number
        totalElements:number
        last:boolean
        first:boolean
        sort:{
            sorted:boolean
                unsorted:boolean
                empty:boolean
        }
        numberOfElements:number
        size:number
        number:number
        empty:boolean
    }
}

//代表医院等级或者地区数据类型
export interface HospitallevelAndRegion{
    id:number
    createTime:string
    updateTime:string
    isDeleted:number
    param:{},
    parentId:number
    name:string
    value:string
    dictCode:string
    hasChildren:boolean
}

export type HospitallevelAndRegionArr=HospitallevelAndRegion[]
//获取等级或获取医院地区接口返回数据类型
export interface HospitallevelAndRegionResponseData extends ResponseData {
    data:HospitallevelAndRegionArr
}

//
export interface HospitalInfo extends ResponseData {
    data:Content
}



