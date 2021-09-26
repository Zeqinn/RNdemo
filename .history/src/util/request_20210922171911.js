import axios from 'axios'

// const baseUrl = "https://cqzy-erpgroup.sany.com.cn/jcwecaht/interface"
const baseUrl = "https://newerp.sany.com.cn/jcwecaht/interface"

const instance = axios.create({
  baseURL: baseUrl
})

export default {
  get: instance.get,
  post: instance.post
}