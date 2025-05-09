import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import type { BaseButtonProps } from '../utils/common.types';
import { createTextStyle, createViewStyle } from '../utils/style.helper';

export const AnbButton: React.FC<BaseButtonProps> = ({
  enabled = true,
  ...rest
}) => {
  if (enabled) {
    const buttonStyle = createViewStyle(rest.buttonStyle);
    const textStyle = createTextStyle(rest);
    return (
      <TouchableOpacity
        style={[buttonStyle, ...(rest.extraStyles || [])]}
        onPress={rest.onPress}
        onLongPress={rest.onLongPress}
      >
        <Text style={textStyle}>{rest.text}</Text>
      </TouchableOpacity>
    );
  }

  const buttonStyle = rest.disableButtonStyle
    ? createViewStyle(rest.disableButtonStyle)
    : createViewStyle(rest.buttonStyle);

  const textStyle = createTextStyle(rest);

  return (
    <TouchableOpacity style={[buttonStyle, ...(rest.extraStyles || [])]}>
      <Text style={textStyle}>{rest.text}</Text>
    </TouchableOpacity>
  );
};
