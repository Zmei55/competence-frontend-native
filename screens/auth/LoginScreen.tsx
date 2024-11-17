import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation  } from '@react-navigation/native';

export const LoginScreen: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>

      <Button onPress={() => navigate('Home')} title={'Home'} />
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
