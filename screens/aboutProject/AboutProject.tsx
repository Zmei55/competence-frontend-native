import { Button, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Header } from 'shared/ui';

export const AboutProjectScreen: React.FC = () => {
  const { t } = useTranslation(['aboutProject', 'buttons']);

  return (
    <View style={styles.container}>
      {/* <Header /> */}

      <Text>aboutProjectScreen</Text>

      {/* <Button onPress={() => navigate('Login')} title={'Login'} />
      <Button onPress={() => navigate('Register')} title={'Register'} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
