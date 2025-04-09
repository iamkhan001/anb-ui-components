import React from 'react';
import { TouchableOpacity, Text, type TextStyle } from 'react-native';
import type { ViewStyle } from 'react-native';
import {
  defaultCurrency,
  defaultDecimalPlaces,
  defaultFontSize,
  defaultFontWeight,
  defaultTextAlign,
  defaultTextColor,
} from '../defaults';
import { formatAmountWithDecimal } from '../utils/number.utils';
import { LinearLayout } from '../layouts/LinearLayout';

export interface AnbTextProps {
  text: string;
  color?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  style?: ViewStyle;
  onPress?: () => void;
}

export const AnbText: React.FC<AnbTextProps> = ({
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

export interface AnbAmountProps {
  currency?: string;
  amount: number;
  decimalPlaces?: number;
  color?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  textAlign?: TextStyle['textAlign'];
  style?: object;
  valueColor?: string;
  valueFontSize?: number;
  valueFontWeight?: TextStyle['fontWeight'];
  decimalColor?: string;
  decimalFontSize?: number;
  decimalFontWeight?: TextStyle['fontWeight'];
}

export const AnbAmount = ({
  currency = defaultCurrency,
  amount,
  decimalPlaces = defaultDecimalPlaces,
  color,
  fontSize,
  fontWeight,
  textAlign,
  valueColor,
  valueFontSize,
  valueFontWeight,
  decimalColor,
  decimalFontSize,
  decimalFontWeight,
  style,
}: AnbAmountProps) => {
  const textStyle = {
    color: color || defaultTextColor,
    fontSize: fontSize || defaultFontSize,
    fontWeight: fontWeight || defaultFontWeight,
    textAlign: textAlign || defaultTextAlign,
  };

  const valueStyle = {
    color: valueColor || textStyle.color,
    fontSize: valueFontSize || textStyle.fontSize,
    fontWeight: valueFontWeight || textStyle.fontWeight,
    textAlign: textAlign || defaultTextAlign,
  };

  console.log(valueStyle);

  const decimalStyle = {
    color: decimalColor || textStyle.color,
    fontSize: decimalFontSize || textStyle.fontSize,
    fontWeight: decimalFontWeight || textStyle.fontWeight,
    textAlign: textAlign || textStyle.textAlign,
  };

  const { value, decimal } = formatAmountWithDecimal(amount, decimalPlaces);

  return (
    <LinearLayout direction={'row'} align="flex-end">
      <Text style={[textStyle, style]}>{currency} </Text>
      <Text style={[textStyle, style]}>{value}</Text>
      <Text style={[decimalStyle, style]}>{decimal}</Text>
    </LinearLayout>
  );
};
