//定义详情页模块数据类型

export interface ResponsDate {
    code:number
    message:string
    ok:boolean
}
//代表医院详情数据
export interface HospitalDetail {
    bookingRule :{
        cycle:number
        releaseTime:string
        stopTime:string
        quitDay:number
        quitTime:string
        rule:string[]
    }
    hospital :{
        id:string
        createTime:string
        updateTime:string
        isDeleted:number
        param:{
            hostypeSrting:string
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
        intro:null
        route:string
        status:number
        bookingRule:null
    }
}

//医院详情接口返回的数据ts
export interface HospitalDetail extends ResponsDate {
    data:HospitalDetail
    
}