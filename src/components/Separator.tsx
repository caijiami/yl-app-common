import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {px2dp} from '../utils/kit';

interface Props {
  height?: number;
  bg?: string;
  marinVertical?: number;
}

const Separator: React.FC<Props> = props => {
  const {colors} = useTheme();

  const {height, bg} = props;
  return (
    <View
      style={{
        height,
        backgroundColor: colors.separator || bg,
        marginVertical: props.marinVertical,
      }}
    />
  );
};

Separator.defaultProps = {
  height: px2dp(12),
};

export default Separator;
