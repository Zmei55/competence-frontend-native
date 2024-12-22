import { StyleSheet, ScrollView } from 'react-native';
import { Theme } from 'shared/theme';

import { Stack, StackProps } from 'shared/ui';

interface AppWrapperProps extends StackProps {}

export const AppWrapper: React.FC<AppWrapperProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <ScrollView>
      <Stack style={[styles.container, style]} {...rest}>
        {children}
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.spacing(1),
    paddingBottom: Theme.spacing(6),
  },
});
