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

const purchaseContractList = () => {
  return request.getRequest('/purchaseContract/purchaseContractList',{},true)
}



export default {
  getHomeData,
  purchaseContractList
}
