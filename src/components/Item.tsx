import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React, { FC, ReactElement } from "react";
import Row, { Props as RowProps } from "./Row";
import IconFont from "~/components/IconFont";
import { SvgXml } from "react-native-svg";
import YLText from "./Text";
import FastImage from "react-native-fast-image";

interface Props extends RowProps {
  title: string;
  leftIcon?: any;
  leftIconType?: "iconfont" | "svg" | "image";
  leftIconProps?: any;
  leftContainerStyle?: StyleProp<ViewStyle>;
  renderRight?:
    | ReactElement<any>
    | ((arrow: ReactElement) => ReactElement<any>);
}

const Item: FC<Omit<Props, "children">> = (props) => {
  const {
    title,
    leftIconType,
    leftIcon,
    leftIconProps,
    leftContainerStyle,
    renderRight,
    ...RowP
  } = props;

  const _renderLeftIcon = () => {
    switch (leftIconType) {
      case "svg":
        return <SvgXml xml={leftIcon} {...leftIconProps} />;
      case "iconfont":
        return <IconFont name={leftIcon} {...leftIconProps} />;
      case "image":
        return <FastImage source={leftIcon} {...leftIconProps} />;
      default:
        return null;
    }
  };

  const _renderRight = () => {
    const arrow = <IconFont name="youjiantou" size={15} color="#bfbfbf" />;
    if (renderRight) {
      if (typeof renderRight === "function") {
        return renderRight(arrow);
      } else {
        return renderRight;
      }
    } else {
      return arrow;
    }
  };

  return (
    <Row {...RowP}>
      {leftIcon && (
        <View style={[styles.icon, leftContainerStyle]}>
          {_renderLeftIcon()}
        </View>
      )}
      <YLText style={[styles.title]}>{title}</YLText>
      {_renderRight()}
    </Row>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
  },
  icon: {
    width: 40,
  },
});

export default Item;
