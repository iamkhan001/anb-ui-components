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
  onPress?: () => void;
  onLongPress?: () => void;
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
  onPress,
  onLongPress,
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
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
