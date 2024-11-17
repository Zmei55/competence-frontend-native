import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation(['aboutProject', 'buttons']);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <Button onPress={() => navigate('Login')} title={'Login'} />
      <Button onPress={() => navigate('Register')} title={'Register'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
