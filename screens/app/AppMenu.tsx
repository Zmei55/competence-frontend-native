import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDimensions } from 'shared/hooks';
import { Theme } from 'shared/theme';

interface AppMenuProps {}

export const AppMenu: React.FC<AppMenuProps> = () => {
  const { navigate } = useNavigation();
  const { heightWindow } = useDimensions();

  return (
    <View
      style={{
        ...styles.container,
        height: heightWindow - 88,
      }}
    >
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Profile</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Competence</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Administration</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Requests</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 88,
    right: 0,
    backgroundColor: '#FFF',
    zIndex: 1000,
    width: 250,
  },
  button: {
    paddingHorizontal: Theme.spacing(5),
    paddingVertical: Theme.spacing(1),
  },
  buttonText: {
    fontSize: 25,
  },
});
