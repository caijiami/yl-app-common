/**
 * @author sana_胡晓军;
 * @date 2020-04-23 09:44:23;
 */

import React, {FC, ReactElement} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {px2dp} from '../utils/kit';
import {useTheme} from 'react-native-paper';

export interface Props {
  height?: number;
  bordered?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  justify?: 'center' | 'start' | 'end' | 'between' | 'around';
  gap?: number | (number | string)[];
  children?: any;
  padding?: true;
}

const FlexJustifyContentMap = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
};

const Row: FC<Props> = props => {
  const {
    height,
    bordered,
    style,
    onPress,
    justify,
    gap,
    itemBg,
    padding,
  } = props;

  let {children} = props;

  const Container = onPress ? TouchableOpacity : View;

  const justifyContent = justify && FlexJustifyContentMap[justify];

  const {colors, paddingHorizontal} = useTheme();

  const sty = {height, justifyContent} as ViewStyle;
  if (bordered) {
    sty.borderBottomWidth = px2dp(1);
    sty.borderBottomColor = colors.divider;
  }

  if (padding) {
    sty.paddingHorizontal = paddingHorizontal;
  }

  if (itemBg) {
    sty.backgroundColor = colors.itemBg;
  }

  if (gap && children instanceof Array) {
    children = React.Children.map(children, (child, i) => {
      if (child) {
        return React.cloneElement(child, {
          style: [
            {
              marginLeft:
                i === 0
                  ? 0
                  : gap instanceof Array
                  ? gap[Math.min(i - 1, gap.length - 1)]
                  : gap,
            },
            ...(child.props.style instanceof Array
              ? (child.props.style as Array<any>)
              : [child.props.style]),
          ],
        });
      } else {
        return child;
      }
    });
  }

  return (
    <Container onPress={onPress} style={[styles.row, sty, style]}>
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default React.memo(Row);
