/**
 * Created by LCQ on 2019-06-04,0004.
 */
/*
* 接口列表
* */
import { fetchData } from './fetch-data'

const interfaceList = {
    // 获取界面数据
    getPageData (bodyParams) {
        return fetchData(`doctor.bloodLipid.getPage`, bodyParams)
    }
}

export default interfaceList
