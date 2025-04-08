import React from 'react';
import { TouchableOpacity, Text, type TextStyle } from 'react-native';
import type { ViewStyle } from 'react-native';
import {
  defaultBackgroundColor,
  defaultBorderColor,
  defaultBorderRadius,
  defaultBorderWidth,
  defaultFontSize,
  defaultFontWeight,
  defaultPadding,
  defaultTextColor,
  type ButtonActions,
} from '../defaults';

export interface ButtonProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  padding?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  style?: ViewStyle;
  actions?: ButtonActions;
}

export const AnbButton: React.FC<ButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  fontSize,
  fontWeight,
  padding,
  borderRadius,
  borderWidth,
  borderColor,
  style,
  actions,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || defaultBackgroundColor,
    padding: padding || defaultPadding,
    borderRadius: borderRadius || defaultBorderRadius,
    borderWidth: borderWidth || defaultBorderWidth,
    borderColor: borderColor || defaultBorderColor,
  };
  const textStyle = {
    color: textColor || defaultTextColor,
    fontSize: fontSize || defaultFontSize,
    fontWeight: fontWeight || defaultFontWeight,
  };
  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      onPress={actions?.onPress}
      onLongPress={actions?.onLongPress}
      onPressIn={actions?.onPressIn}
      onPressOut={actions?.onPressOut}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
