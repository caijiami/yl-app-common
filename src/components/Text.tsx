import React, {FC} from 'react';
import {
  Text as NativeText,
  TextStyle,
  StyleProp,
  TextProps,
} from 'react-native';
import {useTheme} from '../components/Paper';

interface Props extends TextProps {
  bold?: boolean;
  style?: StyleProp<TextStyle>;
  placeholder?: boolean;
  primary?: true;
  size?: 'large' | 'small' | 'tiny' | 'normal' | 'huge';
  status?: 'success' | 'error' | 'default' | 'warning' | 'processing';
  color?: string;
  maxWidth?: number;
  ajust?: number;
}

const Text: FC<Props> = props => {
  const {bold, colors, fontSize} = useTheme();

  const {
    style = {},
    color,
    size = 'normal',
    primary,
    status,
    placeholder,
    bold: isBold,
    maxWidth,
    ...rest
  } = props;

  let textColor: string = colors.text;

  if (placeholder) {
    textColor = colors.placeholder;
  }

  if (status) {
    textColor = colors.status[status] || textColor;
  }

  if (primary) {
    textColor = colors.primary;
  }

  if (color) {
    textColor = (colors as any)[color];
  }

  if (props.ajust) {
    rest.numberOfLines = props.ajust;
  }

  return (
    <NativeText
      style={[
        props.ajust !== undefined && {flex: 1},
        {
          fontSize: fontSize[size] || fontSize.normal,
          color: textColor,
          maxWidth,
        },
        isBold && {fontWeight: bold},
        style,
      ]}
      {...rest}>
      {props.children}
    </NativeText>
  );
};

export default Text;
