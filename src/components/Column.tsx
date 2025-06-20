/**
 * @author sana_胡晓军;
 * @date 2020-04-23 09:44:23;
 */

import React, {FC, ReactElement} from 'react';
import {View, TouchableOpacity, ViewStyle, StyleProp} from 'react-native';
import {px2dp} from '../utils/kit';
import {useTheme} from 'react-native-paper';

type JustifyAlignKey = 'center' | 'start' | 'end' | 'between' | 'around';
export interface Props {
  height?: number;
  bordered?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  justify?: JustifyAlignKey;
  gap?: number | number[];
  children?: Array<ReactElement<any> | false> | ReactElement<any> | false;
  itemBg?: true;
  padding?: true;
  align?: JustifyAlignKey;
}

const FlexJustifyContentMap = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
};

const Column: FC<Props> = props => {
  const {
    height,
    bordered,
    style,
    onPress,
    justify,
    gap,
    itemBg,
    padding,
    align,
  } = props;

  let {children} = props;

  const Container = onPress ? TouchableOpacity : View;

  const justifyContent = justify && FlexJustifyContentMap[justify];
  const alignItems = align && FlexJustifyContentMap[align];

  const {colors, paddingHorizontal} = useTheme();

  const sty = {height, justifyContent, alignItems} as ViewStyle;
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
              marginTop:
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
    <Container onPress={onPress} style={[sty, style]}>
      {children}
    </Container>
  );
};

export default React.memo(Column);
