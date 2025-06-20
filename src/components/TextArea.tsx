import React, {ForwardRefRenderFunction} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextInput,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {px2dp} from '../utils/kit';

interface Props extends TextInputProps {
  enableCount?: boolean;
  max?: number;
  height?: number;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  bordered?: boolean;
  countFormat?: (valueNum?: number, max?: number) => string;
}

const TextArea: ForwardRefRenderFunction<TextInput, Props> = (props, ref) => {
  const {
    enableCount,
    max,
    height,
    style,
    value,
    bordered,
    countFormat,
    containerStyle,
    ...otherProps
  } = props;

  const {colors, dark} = useTheme();

  const sty = {height, color: colors.text} as ViewStyle;

  if (bordered) {
    sty.borderColor = colors.divider;
    sty.borderWidth = px2dp(1);
  }

  const renderCount = () => {
    if (countFormat) {
      return countFormat(value?.length, max);
    }

    return (value ? value.length : 0) + (max ? '/' + max : '');
  };

  return (
    <View style={[{marginBottom: 30}, containerStyle]}>
      <TextInput
        testID="input"
        keyboardAppearance={dark ? 'dark' : 'light'}
        {...otherProps}
        value={value}
        maxLength={max}
        ref={ref}
        multiline
        style={[styles.input, sty, style]}
      />
      {!!enableCount && (
        <Text testID="counter" style={styles.count}>
          {renderCount()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#333',
    textAlignVertical: 'top',
    lineHeight: px2dp(24),
    borderRadius: 15,
    padding: 15,
    paddingBottom: 30,
    fontSize: 16,
  },
  count: {
    position: 'absolute',
    bottom: -24,
    right: 20,
    color: '#8E98A0',
    fontSize: 15,
  },
});

export default React.forwardRef(TextArea);
