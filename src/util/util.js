import { Dimensions } from 'react-native'

/**
 * 设计图宽度(375) / 元素宽度 = 手机屏幕 / 手机元素宽度
 * 手机元素宽度 = 手机屏幕 * 元素宽度 / 375
 */

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const pxToDp = (elePx) => screenWidth * elePx / 375;