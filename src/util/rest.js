import request from "./request";

// const getHomeData = (param) => {
//   return request({
//     url: `/orgHome/operatingData?orgId=${param.orgId}`,
//     method: 'get'
//   })
// }

const getHomeData = (param) => {
  return request.getRequest('/orgHome/operatingData', param)
}

const purchaseContractList = (param) => {
  return request.getRequest('/purchaseContract/purchaseContractList',param,true)
}



export default {
  getHomeData,
  purchaseContractList
}
