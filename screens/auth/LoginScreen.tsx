import { StyleSheet, View, Pressable, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import {
  Text,
  Input,
  Button,
  AppContainer,
  KeyboardAvoidingContainer,
} from 'shared/ui';
import { Colors, Theme } from 'shared/theme';
import { useShowKeyboard } from 'shared/hooks';

export const LoginScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation(['auth', 'buttons']);
  const { isShowKeyboard, setIsShowKeyboardTrue, setIsShowKeyboardFalse } =
    useShowKeyboard();

  function handleSubmitButton() {
    setIsShowKeyboardFalse();
    isShowKeyboard && Keyboard.dismiss();
  }

  return (
    <AppContainer>
      <KeyboardAvoidingContainer>
        <View
          style={{
            ...styles.content,
            gap: isShowKeyboard ? Theme.spacing(5) : Theme.spacing(10),
          }}
        >
          <View style={styles.titleContainer}>
            <Text title>{t('login')}</Text>

            <Pressable onPress={() => navigate('Register')}>
              <Text style={styles.link}>{t('registerContinue')}</Text>
            </Pressable>
          </View>

          <View style={styles.inputContainer}>
            <Input label={t('email')} onFocus={setIsShowKeyboardTrue} />

            <Input
              isPassword
              label={t('password')}
              onFocus={setIsShowKeyboardTrue}
            />
          </View>

          <Button
            buttonColor="primary"
            titleColor="white"
            onPress={() => handleSubmitButton()}
          >
            {t('buttons:login')}
          </Button>
        </View>
      </KeyboardAvoidingContainer>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    gap: Theme.spacing(1),
  },
  inputContainer: {
    width: '70%',
    gap: Theme.spacing(4),
  },
  link: {
    fontSize: 20,
    color: Colors.link,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.link,
  },
});
