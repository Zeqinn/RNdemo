import { Dimensions } from 'react-native'

/**
 * 设计图宽度(375) / 元素宽度 = 手机屏幕 / 手机元素宽度
 * 手机元素宽度 = 手机屏幕 * 元素宽度 / 375
 */

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const pxToDp = (elePx) => screenWidth * elePx / 375;

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

export default {
  formatTime
}