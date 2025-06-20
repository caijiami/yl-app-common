/**
 * @author sana_胡晓军;
 * @date 2020-06-09 14:39:42;
 */

import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import LottieView from 'lottie-react-native';

let loading: any = null;

export default class LoadingUtil {
  static show(title: string = '加载中...') {
    loading && loading.destroy();
    loading = new RootSiblings(<LoadingContainer title={title} />);
    return loading;
  }
  static hide() {
    if (loading) {
      loading.destroy();
    }
  }
}

interface Props {
  title?: string;
}

export const LoadingContainer: FC<Props> = props => {
  const {title} = props;

  return (
    <View style={styles.content}>
      <LottieView
        style={styles.icon}
        source={require('../assets/lottie/loading-circle.json')}
        autoPlay
        loop
      />
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    height: 120,
    width: 110,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: '30%',
    left: '50%',
    transform: [{translateX: -55}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    height: 80,
    width: 80,
  },
});
