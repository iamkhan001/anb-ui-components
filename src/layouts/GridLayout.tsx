import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';

interface GridLayoutProps {
  columns: number;
  children: React.ReactNode;
  gap?: number;
  style?: ViewStyle;
  itemStyle?: ViewStyle;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  columns,
  children,
  gap = 10,
  style = {},
  itemStyle = {},
}) => {
  const childrenArray = React.Children.toArray(children);
  const rows = [];

  for (let i = 0; i < childrenArray.length; i += columns) {
    const rowItems = childrenArray.slice(i, i + columns);

    rows.push(
      <View key={`row-${i}`} style={[styles.row, { marginBottom: gap }]}>
        {rowItems.map((child, index) => (
          <View
            key={`item-${i + index}`}
            style={[
              {
                flex: 1 / columns,
                marginRight: index < rowItems.length - 1 ? gap : 0,
              },
              itemStyle,
            ]}
          >
            {child}
          </View>
        ))}
      </View>
    );
  }

  return <View style={[style]}>{rows}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default GridLayout;
