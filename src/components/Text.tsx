import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { formatAmountWithDecimal } from '../utils/number.utils';
import { LinearLayout } from '../layouts/LinearLayout';
import type { BaseTextProps, ViewActions } from '../utils/common.types';
import { createTextStyle } from '../utils/style.helper';

export const AnbText: React.FC<BaseTextProps> = ({ ...rest }) => {
  const textStyle = createTextStyle(rest);

  return (
    <TouchableOpacity onPress={rest.onPress} onLongPress={rest.onLongPress}>
      <Text style={[textStyle, ...(rest.textStyles || [])]}>{rest.text}</Text>
    </TouchableOpacity>
  );
};

export interface AnbAmountProps extends ViewActions {
  currency: string;
  amount: number;
  decimalPlaces: number;
  amountProps: BaseTextProps;
  fractionalProps?: BaseTextProps;
}

export const AnbAmount: React.FC<AnbAmountProps> = ({ ...rest }) => {
  const integerStyle = createTextStyle(rest.amountProps);
  const fractionalStyle = rest.fractionalProps
    ? createTextStyle(rest.fractionalProps)
    : integerStyle;

  const { value, decimal } = formatAmountWithDecimal(
    rest.amount,
    rest.decimalPlaces
  );

  return (
    <TouchableOpacity onPress={rest.onPress} onLongPress={rest.onLongPress}>
      <LinearLayout direction={'row'} align="flex-end">
        <Text style={[integerStyle, ...(rest.amountProps.textStyles || [])]}>
          {rest.currency}{' '}
        </Text>
        <Text style={[integerStyle, ...(rest.amountProps.textStyles || [])]}>
          {value}
        </Text>
        <Text
          style={[
            fractionalStyle,
            ...(rest.fractionalProps?.textStyles ||
              rest.amountProps.textStyles ||
              []),
          ]}
        >
          {decimal}
        </Text>
      </LinearLayout>
    </TouchableOpacity>
  );
};
