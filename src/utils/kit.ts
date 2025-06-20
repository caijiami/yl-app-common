import {Dimensions} from 'react-native';


/**
 * 将px转为rn内单位
 * @param {number} px
 * @returns {number}
 * @constructor
 */
export function px2dp(px: number): number {
  return (px / 375) * Dimensions.get('screen').width;
}
