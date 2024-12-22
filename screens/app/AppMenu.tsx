import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useLogout } from 'screens/auth/hooks';
import { useDimensions } from 'shared/hooks';
import { Theme } from 'shared/theme';
import { firstLatterToUpperCase } from 'shared/helpers';

interface AppMenuProps {}

export const AppMenu: React.FC<AppMenuProps> = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation(['header', 'buttons']);
  const { heightWindow } = useDimensions();
  const { handleLogout } = useLogout();

  return (
    <View
      style={{
        ...styles.container,
        height: heightWindow - 88,
      }}
    >
      <Pressable style={styles.button} onPress={() => navigate('Profile')}>
        <Text style={styles.buttonText}>{t('myProfile')}</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{t('competencies')}</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{t('requests')}</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{t('administration')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => handleLogout()}>
        <Text style={styles.buttonText}>
          {firstLatterToUpperCase(t('buttons:logOut'))}
        </Text>
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
    width: 300,
  },
  button: {
    paddingHorizontal: Theme.spacing(5),
    paddingVertical: Theme.spacing(1),
  },
  buttonText: {
    fontSize: 25,
  },
});
