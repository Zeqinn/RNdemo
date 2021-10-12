import axios from 'axios';
import { Toast } from '@ant-design/react-native';

// const baseUrl = "https://cqzy-erpgroup.sany.com.cn/jcwecaht/interface"
const baseUrl = "https://newerp.sany.com.cn/jcwecaht/interface"

const instance = axios.create({
  baseURL: baseUrl
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
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

const postRequest = (url, postData, showLoading = false) => {
  let key = ''
  if (showLoading) {
    key = Toast.loading('加载中...', 0);
  }
  return new Promise((resolve, reject) => {
    instance({
      url,
      method: 'post',
      data: postData
    }).then(res => {
      if (showLoading) {
        Toast.remove(key);
      }
      resolve(res.data);
    }).catch(err => {
      if (showLoading) {
        Toast.remove(key);
        Toast.fail('网络请求失败，请稍后再试');
      }
      reject(err);
    })
  })
}

const getRequest = (url, params = {}, showLoading = false) => {
  let key = ''
  if (showLoading) {
    key = Toast.loading('加载中...', 0);
  }
  return new Promise((resolve, reject) => {
    instance({
      url: url,
      params: params,
      method: 'get',
    }).then(res => {
      if (showLoading) {
        Toast.remove(key);
      }
      resolve(res.data);
    }).catch(err => {
      if (showLoading) {
        Toast.remove(key);
        Toast.fail('网络请求失败，请稍后再试');
      }
      reject(err);
    })
  })
}

export default {
  getRequest,
  postRequest
};