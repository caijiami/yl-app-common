import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {px2dp} from '../utils/kit';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Divider: React.FC<Props> = props => {
  const {colors} = useTheme();

  const {style} = props;
  return (
    <View style={[styles.style, {backgroundColor: colors.divider}, style]} />
  );
};

export default Divider;

const styles = StyleSheet.create({
  style: {
    height: px2dp(1),
  },
});
