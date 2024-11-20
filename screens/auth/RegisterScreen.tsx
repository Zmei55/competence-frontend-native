import {
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
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

export const RegisterScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation(['auth', 'buttons']);
  const { isShowKeyboard, setIsShowKeyboardTrue, setIsShowKeyboardFalse } =
    useShowKeyboard();

  function keyboardHide() {
    setIsShowKeyboardFalse();
    isShowKeyboard && Keyboard.dismiss();
  }

  function handleSubmitButton() {
    keyboardHide();
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <AppContainer>
        <KeyboardAvoidingContainer>
          <View
            style={{
              ...styles.content,
              gap: isShowKeyboard ? Theme.spacing(5) : Theme.spacing(10),
            }}
          >
            <View style={styles.titleContainer}>
              <Text title textBreakStrategy="balanced">
                {t('register')}
              </Text>

              <Pressable onPress={() => navigate('Login')}>
                <Text style={styles.link}>Login?</Text>
              </Pressable>
            </View>

            <View
              style={{
                ...styles.inputContainer,
                gap: isShowKeyboard ? Theme.spacing(2) : Theme.spacing(4),
              }}
            >
              <Input label={t('email')} onFocus={setIsShowKeyboardTrue} />

              <Input label={t('nickName')} onFocus={setIsShowKeyboardTrue} />

              <Input
                isPassword
                label={t('password')}
                onFocus={setIsShowKeyboardTrue}
              />

              <Input
                isPassword
                label={t('passwordRepeat')}
                onFocus={setIsShowKeyboardTrue}
              />
            </View>

            <Button
              buttonColor="primary"
              titleColor="white"
              onPress={() => handleSubmitButton()}
            >
              {t('buttons:register')}
            </Button>
          </View>
        </KeyboardAvoidingContainer>
      </AppContainer>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
  },
  link: {
    fontSize: 20,
    color: Colors.link,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.link,
  },
});
