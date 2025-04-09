import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';

interface GridLayoutProps {
  columns: number;
  children: React.ReactNode;
  gap?: number;
  containerStyles?: ViewStyle[];
  itemStyles?: ViewStyle[];
}

export const GridLayout: React.FC<GridLayoutProps> = ({
  columns,
  children,
  gap = 10,
  containerStyles = [],
  itemStyles = [],
}) => {
  const childrenArray = React.Children.toArray(children);
  const rows = [];

  for (let i = 0; i < childrenArray.length; i += columns) {
    const rowItems = childrenArray.slice(i, i + columns);

    rows.push(
      <View
        key={`row-${i}`}
        style={[styles.row, { marginBottom: gap }, ...containerStyles]}
      >
        {rowItems.map((child, index) => (
          <View
            key={`item-${i + index}`}
            style={[
              {
                flex: 1 / columns,
                marginRight: index < rowItems.length - 1 ? gap : 0,
              },
              ...itemStyles,
            ]}
          >
            {child}
          </View>
        ))}
      </View>
    );
  }

  return <View style={[...containerStyles]}>{rows}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
