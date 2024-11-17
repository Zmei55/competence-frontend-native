import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation  } from '@react-navigation/native';

interface RegisterScreenProps {};

export const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>

      <Button onPress={() => navigate('Home')} title={'Home'} />
      <Button onPress={() => navigate('Login')} title={'Login'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
