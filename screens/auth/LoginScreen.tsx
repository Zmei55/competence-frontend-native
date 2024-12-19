import {
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';

import { TCredentials, useLogin } from 'screens/auth';
import {
  Text,
  Input,
  Button,
  KeyboardAvoidingContainer,
  Spinner,
} from 'shared/ui';
import { Colors, Theme } from 'shared/theme';
import { useShowKeyboard } from 'shared/hooks';

export const LoginScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation(['auth', 'buttons']);
  const { isShowKeyboard, setIsShowKeyboardTrue, setIsShowKeyboardFalse } =
    useShowKeyboard();
  const { handleLogin, isLoginLoading } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TCredentials>({
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  function keyboardHide() {
    setIsShowKeyboardFalse();
    isShowKeyboard && Keyboard.dismiss();
  }

  function handleSubmitButton() {
    keyboardHide();
  }

  const onSubmit: SubmitHandler<TCredentials> = data => {
    handleLogin(data);
    handleSubmitButton();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingContainer>
        <View
          style={{
            ...styles.content,
            gap: isShowKeyboard ? Theme.spacing(5) : Theme.spacing(10),
          }}
        >
          <View style={styles.titleContainer}>
            <Text variant="title">{t('login')}</Text>

            <Pressable onPress={() => navigate('Register')}>
              <Text style={styles.link}>{t('registerContinue')}</Text>
            </Pressable>
          </View>

          <View style={styles.inputContainer}>
            <Input
              name="email"
              control={control}
              label={t('email')}
              required
              errors={errors.email}
              keyboardType="email-address"
              onFocus={setIsShowKeyboardTrue}
            />

            <Input
              name="password"
              control={control}
              label={t('password')}
              required
              isPassword
              errors={errors.password}
              onFocus={setIsShowKeyboardTrue}
            />
          </View>

          <Button
            style={styles.loginButton}
            onPress={handleSubmit(onSubmit)}
            buttonColor="primary"
            titleColor="white"
            disabled={!isDirty}
          >
            {isLoginLoading ? (
              <Spinner color="white" />
            ) : (
              <Text color="white">{t('buttons:login')}</Text>
            )}
          </Button>
        </View>
      </KeyboardAvoidingContainer>
    </TouchableWithoutFeedback>
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
  loginButton: {
    width: 100,
  },
});
