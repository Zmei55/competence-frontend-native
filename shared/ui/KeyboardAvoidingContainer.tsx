import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from 'react-native';

export const KeyboardAvoidingContainer: React.FC<KeyboardAvoidingViewProps> = ({
  children,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
