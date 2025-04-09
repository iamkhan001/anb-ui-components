import React from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';

export type direction = 'row' | 'column';

interface LinearLayoutProps {
  direction: direction;
  children: React.ReactNode;
  style?: ViewStyle;
  gap?: number;
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
}

export const LinearLayout: React.FC<LinearLayoutProps> = ({
  children,
  direction,
  style = {},
  gap = 0,
  align = 'stretch',
  justify = 'flex-start',
}) => {
  const containerStyle: ViewStyle = {
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flex: 1,
  };
  const childrenArray = React.Children.toArray(children);
  return (
    <View style={[containerStyle, style]}>
      {childrenArray.map((child, index) => (
        <View
          key={index}
          style={{ marginRight: index !== childrenArray.length - 1 ? gap : 0 }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};
