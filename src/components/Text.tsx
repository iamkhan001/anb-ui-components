import React from 'react';
import { TouchableOpacity, Text, type TextStyle } from 'react-native';
import {
  defaultFontSize,
  defaultFontWeight,
  defaultTextColor,
} from '../defaults';

export interface TextProps {
  text: string;
  color?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  style?: object;
  onPress?: () => void;
}

export const AnbText: React.FC<TextProps> = ({
  text,
  color,
  fontSize,
  fontWeight,
  style,
  onPress,
}) => {
  const textStyle = {
    color: color || defaultTextColor,
    fontSize: fontSize || defaultFontSize,
    fontWeight: fontWeight || defaultFontWeight,
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[textStyle, style]}>{text}</Text>
    </TouchableOpacity>
  );
};
