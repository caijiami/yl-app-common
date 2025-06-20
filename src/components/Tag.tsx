import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {px2dp} from '../utils/kit';

interface Props {
  text: string;
  theme: 'green' | 'orange' | 'danger';
  style?: StyleProp<ViewStyle>;
  type?: 'ghost' | 'tile';
  onPress?: (e: GestureResponderEvent) => void;
}

interface Themes {
  [key: string]: {color: string; bg: string};
}

const themes: Themes = {
  green: {color: '#31C4CC', bg: '#EEFEFF'},
  orange: {color: '#FFB701', bg: '#FFF8E7'},
  danger: {color: '#ff2557', bg: '#ffeeee'},
};

const Tag: React.FC<Props> = props => {
  const {text, theme, style, onPress, type = 'tile'} = props;

  const sty = {} as ViewStyle;
  const textSty = {} as TextStyle;

  const obj = themes[theme];

  if (type === 'ghost') {
    sty.borderWidth = 1.3;
    sty.borderColor = obj.color;
    textSty.color = obj.color;
  }

  if (type === 'tile') {
    sty.backgroundColor = obj.bg;
    textSty.color = obj.color;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={[styles.content, sty]}>
        <Text style={[styles.text, textSty]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
  },
});

export default Tag;
