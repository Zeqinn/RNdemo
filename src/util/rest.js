import request from "./request";

const getHomeData = (param) => {
  return request({
    url: `/orgHome/operatingData?orgId=${param}`,
    method: 'get'
  })
}

export default {
  getHomeData,
}
