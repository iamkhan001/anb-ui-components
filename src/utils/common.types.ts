import type { TextStyle, ViewStyle } from 'react-native';

export interface ViewActions {
  onPress?: () => void;
  onLongPress?: () => void;
}

export interface BaseTextProps extends ViewActions, TextStyle {
  text: string;
  textStyles?: object[];
}

export interface BaseButtonProps extends BaseTextProps, ViewStyle {
  buttonStyles?: object[];
}
