import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { StyleProp } from 'react-native';
import type { ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  elevation?: number;
  padding?: number;
  borderRadius?: number;
  backgroundColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  elevation = 4,
  padding = 16,
  borderRadius = 12,
  backgroundColor = '#fff',
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          elevation,
          padding,
          borderRadius,
          backgroundColor,
          shadowOffset: { width: 0, height: elevation / 2 },
          shadowOpacity: 0.2,
          shadowRadius: elevation,
        },
        style,
      ]}
    >
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
