import React, { useEffect, useState } from 'react';
import {
  Animated,
  TextInput,
  Text,
  View,
  type TextStyle,
  type ViewStyle,
  Image,
} from 'react-native';
import styles from './input.styles';
import type { InputProps } from './input.types';

const CustomTextInput: React.FC<InputProps> = ({
  name,
  hint,
  errorMessage = '',
  disabled = false,
  required = false,
  iconName,
  onCustomChange,
  onCustomBlur,
  onCustomFocus,
  value,
  style,
  placeholderTextColor = '#aaa',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useState(new Animated.Value(value ? 1 : 0))[0];

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedLabel, isFocused, value]);

  const handleFocus = () => {
    setIsFocused(true);
    if (onCustomFocus) onCustomFocus(name);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onCustomBlur) onCustomBlur(name);
  };

  const handleChangeText = (text: string) => {
    if (onCustomChange) onCustomChange(name, text);
  };

  const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
    position: 'absolute',
    left: iconName ? 40 : 12,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [14, -10],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: errorMessage ? '#ff4d4d' : isFocused ? '#3f51b5' : '#999',
    backgroundColor: '#fff',
    paddingHorizontal: 4,
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputWrapper,
          errorMessage && styles.inputError,
          disabled && styles.inputDisabled,
          style as ViewStyle,
        ]}
      >
        {iconName && (
          <View style={styles.icon}>
            <Image
              source={{ uri: iconName }}
              style={[
                styles.iconDefault,
                disabled && styles.iconDisabled,
                isFocused && styles.iconFocused,
              ]}
              resizeMode="contain"
            />
          </View>
        )}

        <Animated.Text style={[labelStyle]}>
          {name}
          {required ? ' *' : ''}
        </Animated.Text>

        <TextInput
          editable={!disabled}
          style={[
            styles.input,
            disabled && styles.inputDisabledText,
            iconName && { paddingLeft: 40 },
          ]}
          value={value}
          placeholder={isFocused ? hint : ''}
          placeholderTextColor={placeholderTextColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          {...rest}
        />
      </View>

      {errorMessage && errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export { CustomTextInput };
