import React, {FC, ReactElement} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {px2dp} from '../utils/kit';

import i_no_data from '../assets/images/no_data.png';
import i_no_comment from '../assets/images/no_comment.png';
import i_no_result from '../assets/images/no_result.png';
import i_no_location from '../assets/images/no_location.png';
import i_no_network from '../assets/images/no_network.png';
import i_no_message from '../assets/images/no_message.png';
import i_no_collection from '../assets/images/no_collection.png';

interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  hint: string;
  renderAction?: ReactElement;
  type?: EmptyType;
}

type EmptyType =
  | 'NoData'
  | 'NoComment'
  | 'NoResult'
  | 'NoLocation'
  | 'NoNetwork'
  | 'NoMessage'
  | 'NoCollection';

const EmptyIconMap: Record<EmptyType, {icon: number; text: string}> = {
  NoData: {icon: i_no_data, text: '暂无内容'},
  NoLocation: {icon: i_no_location, text: '暂无地址'},
  NoComment: {icon: i_no_comment, text: '暂无评论'},
  NoMessage: {icon: i_no_message, text: '暂无消息'},
  NoNetwork: {icon: i_no_network, text: '暂无网络'},
  NoResult: {icon: i_no_result, text: '暂无结果'},
  NoCollection: {icon: i_no_collection, text: '暂无收藏'},
};

const Black: FC<Props> = props => {
  const {style, textStyle, hint, renderAction, type = 'NoData'} = props;

  const item = EmptyIconMap[type] || EmptyIconMap.NoData;

  return (
    <View style={[styles.container, style]}>
      <FastImage
        source={item.icon}
        style={{height: px2dp(219), width: px2dp(250)}}
      />
      <Text style={[styles.hint, textStyle]}>{hint}</Text>
      {renderAction}
    </View>
  );
};

const styles = StyleSheet.create({
  hint: {
    color: '#9da6b8',
    fontSize: 21,
    marginTop: 15,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 100,
    alignItems: 'center',
  },
});

export default Black;
