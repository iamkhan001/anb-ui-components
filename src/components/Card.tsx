import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { createViewStyle } from '../utils/style.helper';

interface CardProps extends ViewStyle {
  children: React.ReactNode;
  styles?: object[];
}

export const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  const cardStyle = createViewStyle(rest);

  return (
    <View style={[styles.card, cardStyle, ...(rest.styles || [])]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#fff',
  },
});
