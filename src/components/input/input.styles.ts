import { StyleSheet, type ImageStyle, type TextStyle } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  inputWrapper: {
    position: 'relative',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 4,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#333',
    paddingLeft: 8,
  },
  inputError: {
    borderColor: '#ff4d4d',
  },
  inputDisabled: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
  },
  inputDisabledText: {
    color: '#aaa',
  },
  icon: {
    position: 'absolute',
    top: 18,
    left: 10,
  },
  iconDefault: {
    width: 20,
    height: 20,
    color: '#666',
  } as ImageStyle,
  iconDisabled: {
    color: '#ccc',
  } as ImageStyle,
  iconFocused: {
    color: '#3f51b5',
  } as ImageStyle,
  errorText: {
    color: '#ff4d4d',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  label: {
    position: 'absolute',
    left: 12,
    top: 14,
  },
  labelDefault: {
    fontSize: 16,
    color: '#999',
  } as TextStyle,
  labelFocused: {
    top: -10,
    fontSize: 12,
    color: '#3f51b5',
  } as TextStyle,
  labelError: {
    color: '#ff4d4d',
  } as TextStyle,
});

export default styles;
