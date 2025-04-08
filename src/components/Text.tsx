import React from 'react';
import { TouchableOpacity, Text, type TextStyle } from 'react-native';
import type { ViewStyle } from 'react-native';
import {
  defaultCurrency,
  defaultDecimalPlaces,
  defaultFontSize,
  defaultFontWeight,
  defaultTextColor,
} from '../defaults';
import { formatAmount } from '../utils/number.utils';

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
  style?: object;
}

export const AnbAmount = ({
  currency = defaultCurrency,
  amount,
  decimalPlaces = defaultDecimalPlaces,
  color,
  fontSize,
  fontWeight,
  style,
}: AnbAmountProps) => {
  const textStyle = {
    color: color || defaultTextColor,
    fontSize: fontSize || defaultFontSize,
    fontWeight: fontWeight || defaultFontWeight,
  };
  return (
    <Text style={[textStyle, style]}>
      {currency} {formatAmount(amount, decimalPlaces)}
    </Text>
  );
};
