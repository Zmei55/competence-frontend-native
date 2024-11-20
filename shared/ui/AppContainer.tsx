import {
  StyleSheet,
  View,
  ViewProps,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native';
import { Header } from './Header';

interface AppContainerProps extends ViewProps {
  onPressTouchableWithoutFeedback?: (event: GestureResponderEvent) => void;
}

export const AppContainer: React.FC<AppContainerProps> = ({
  children,
  onPressTouchableWithoutFeedback,
  ...rest
}) => {
  return (
    <View style={styles.container} {...rest}>
      <Header />

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
