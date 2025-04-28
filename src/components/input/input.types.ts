import type { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
  hint?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  iconName?: string;
  onCustomChange?: (name: string, text: string) => void;
  onCustomBlur?: (name: string) => void;
  onCustomFocus?: (name: string) => void;
}

export type { InputProps };
