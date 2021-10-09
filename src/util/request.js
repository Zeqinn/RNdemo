import axios from 'axios';
import { Toast } from '@ant-design/react-native';

// const baseUrl = "https://cqzy-erpgroup.sany.com.cn/jcwecaht/interface"
const baseUrl = "https://newerp.sany.com.cn/jcwecaht/interface"

const instance = axios.create({
  baseURL: baseUrl
})
let key = ''

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  key = Toast.loading('加载中...', 0);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default {
  get: instance.get,
  post: instance.post
}