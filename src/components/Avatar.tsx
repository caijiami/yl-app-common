import React from 'react';
import {Pressable, StyleProp} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';

interface Props {
  size: number;
  src?: {uri?: string};
  sty?: StyleProp<ImageStyle>;
  onPress?(): void;
}

const Avatar: React.FC<Props> = props => {
  const {
    size,
    onPress,
    src = {
      uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588518726618&di=6efc980f091866bf69fa876bdd165846&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181226%2F97d5877e0ac1445980e755225514efc5.jpeg',
    },
    sty,
  } = props;
  const style = {height: size, width: size, borderRadius: size};

  const normalisedSource = src && typeof src.uri === 'string' && !src.uri.split('http')[1] ? null : src;


  return (
    <Pressable onPress={onPress}>
      <FastImage
        source={normalisedSource}
        style={[{backgroundColor: '#efefef'}, style, sty]}
      />
    </Pressable>
  );
};

export default Avatar;
