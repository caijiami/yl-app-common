import {DefaultTheme} from 'react-native-paper';
import {px2dp} from '~/utils/kit';

declare global {
  export namespace ReactNativePaper {
    interface YLStatus {
      success: string;
      processing: string;
      default: string;
      error: string;
      warning: string;
    }

    interface ThemeColors {
      white: string;
      itemBg: string;
      itemPageBg: string;
      black: string;
      gray: string;
      systemBgColor: string;
      systemBgAccent: string;
      primaryBg: string;
      separator: string;
      divider: string;
      thirdtext: string;
      tabBarActiveColor: string;
      tabBarInactiveColor: string;
      sectext: string;
      backdrop: string;
      chatPage: string;
      ChatContent: string;
      bubbleBg: string;
      status: YLStatus;
      primaryBlock: string;
    }

    interface Theme {
      bold:
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
      paddingHorizontal: number;
      fontSize: {
        normal: number;
        large: number;
        small: number;
        tiny: number;
        huge: number;
      };
    }
  }
}

const LightTheme = {
  ...DefaultTheme,
  bold: '700',
  dark: false,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  fontSize: {
    normal: px2dp(14),
    large: px2dp(17),
    small: px2dp(13),
    tiny: px2dp(11),
    huge: px2dp(21),
  },
  colors: {
    ...DefaultTheme.colors,
    white: '#ffffff',
    black: '#000000',
    gray: '#65696B',
    primaryBlock: '#31C4CC',
    primary: '#31C4CC',
    accent: '#EEFEFF',
    text: '#333',
    placeholder: '#bfbfbf',
    paddingHorizatal: 15,
    divider: '#F2F4F7',
    separator: '#f2f2f2',
    tabBarActiveColor: '#333',
    tabBarInactiveColor: '#999',
    systemBgAccent: '#F8F9FB',
    primaryBg: '#EEFEFF',
    systemBgColor: '#fff',
    itemPageBg: '#f2f2f2',
    itemBg: '#fff',
    thirdtext: '#666',
    sectext: '#8E98A0',
    backdrop: 'black',
    chatPage: '#f6f6f6',
    chatContent: '#ededed',
    bubbleBg: '#fff',
    status: {
      success: '#31C4CC',
      processing: '#31C4CC',
      default: '#555',
      error: '#ff2557',
      warning: '#FFA500',
    },
  },
};

const DarkTheme = {
  ...DefaultTheme,
  bold: '700',
  dark: false,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  fontSize: {
    normal: px2dp(14),
    large: px2dp(17),
    small: px2dp(13),
    tiny: px2dp(11),
    huge: px2dp(21),
  },
  colors: {
    ...DefaultTheme.colors,
    white: '#ffffff',
    black: '#000000',
    gray: '#65696B',
    primaryBlock: '#31C4CC',
    primary: '#31C4CC',
    accent: '#EEFEFF',
    text: '#333',
    placeholder: '#bfbfbf',
    paddingHorizatal: 15,
    divider: '#F2F4F7',
    separator: '#f2f2f2',
    tabBarActiveColor: '#333',
    tabBarInactiveColor: '#999',
    systemBgAccent: '#F8F9FB',
    primaryBg: '#EEFEFF',
    systemBgColor: '#fff',
    itemPageBg: '#f2f2f2',
    itemBg: '#fff',
    thirdtext: '#666',
    sectext: '#8E98A0',
    backdrop: 'black',
    chatPage: '#f6f6f6',
    chatContent: '#ededed',
    bubbleBg: '#fff',
    status: {
      success: '#31C4CC',
      processing: '#31C4CC',
      default: '#555',
      error: '#ff2557',
      warning: '#FFA500',
    },
  },
};
// const DarkTheme = {
//   ...DefaultTheme,
//   bold: '700',
//   dark: true,
//   paddingHorizontal: 15,
//   fontSize: {
//     normal: 16,
//     large: 18,
//     small: 14,
//     tiny: 12,
//     huge: 20,
//   },
//   colors: {
//     ...DefaultTheme.colors,
//     systemBgColor: '#000',
//     white: '#ffffff',
//     black: '#000000',
//     gray: '#65696B',
//     primary: '#31C4CC',
//     primaryBlock: '#2d2d30',
//     accent: '#EEFEFF',
//     text: '#fff',
//     thirdtext: '#fff',
//     separator: '#333',
//     placeholder: '#bfbfbf',
//     paddingHorizatal: 15,
//     chatPage: '#1c1c1c',
//     chatContent: '#000',
//     divider: '#333',
//     tabBarActiveColor: '#31C4CC',
//     tabBarInactiveColor: '#bfbfbf',
//     systemBgAccent: '#333',
//     primaryBg: '#333',
//     itemPageBg: '#000',
//     itemBg: '#222225',
//     sectext: '#8E98A0',
//     backdrop: '#f2f4f7',
//     bubbleBg: '#2c2c2c',
//     status: {
//       success: '#31C4CC',
//       processing: '#31C4CC',
//       default: '#555',
//       error: '#ff2557',
//       warning: '#FFA500',
//     },
//   },
// };

const Theme = {
  dark: DarkTheme,
  light: LightTheme,
};

export default Theme;
