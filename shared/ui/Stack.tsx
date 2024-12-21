import { Children, FC } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { Theme } from 'shared/theme';

interface StackProps extends ViewProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: number;
}

export const Stack: FC<StackProps> = ({
  children,
  direction = 'column',
  spacing = 0,
  style,
  ...rest
}) => {
  return (
    <View
      style={[
        style,
        {
          ...styles.stack,
          flexDirection: direction,
          gap: Theme.spacing(spacing),
        },
      ]}
      {...rest}
    >
      {Children.map(children, (child, index) => (
        <View key={index}>{child}</View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stack: {
    display: 'flex',
  },
});
