import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import type { BaseButtonProps } from '../utils/common.types';
import { createTextStyle, createViewStyle } from '../utils/style.helper';

export const AnbButton: React.FC<BaseButtonProps> = ({ ...rest }) => {
  const buttonStyle = createViewStyle(rest);
  const textStyle = createTextStyle(rest);
  return (
    <TouchableOpacity
      style={[buttonStyle]}
      onPress={rest.onPress}
      onLongPress={rest.onLongPress}
    >
      <Text style={textStyle}>{rest.text}</Text>
    </TouchableOpacity>
  );
};
