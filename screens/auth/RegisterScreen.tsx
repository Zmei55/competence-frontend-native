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

import { useRegister } from 'screens/auth/hooks';
import { TRegisterForm } from 'screens/auth/types';
import {
  validateEmailSchema,
  validateNicknameSchema,
  validatePasswordSchema,
} from 'screens/auth/validateSchemas';
import {
  Text,
  Input,
  Button,
  KeyboardAvoidingContainer,
  Spinner,
} from 'shared/ui';
import { Colors, Theme } from 'shared/theme';
import { useShowKeyboard } from 'shared/hooks';
import { validateRequired } from 'shared/validateSchemas';

export const RegisterScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation(['auth', 'buttons']);
  const { isShowKeyboard, setIsShowKeyboardTrue, setIsShowKeyboardFalse } =
    useShowKeyboard();
  const { handleRegister, isRegisterLoading } = useRegister();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<TRegisterForm>({
    defaultValues: {
      email: undefined,
      nickName: undefined,
      password: undefined,
      passwordRepeat: undefined,
    },
  });

  function keyboardHide() {
    setIsShowKeyboardFalse();
    isShowKeyboard && Keyboard.dismiss();
  }

  function handleSubmitButton() {
    keyboardHide();
  }

  const onSubmit: SubmitHandler<TRegisterForm> = data => {
    handleRegister(data);
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
            <Text variant="title" textBreakStrategy="balanced">
              {t('register')}
            </Text>

            <Pressable onPress={() => navigate('Login')}>
              <Text style={styles.link}>{t('loginContinue')}</Text>
            </Pressable>
          </View>

          <View
            style={{
              ...styles.inputContainer,
              gap: isShowKeyboard ? Theme.spacing(2) : Theme.spacing(4),
            }}
          >
            <Input
              name="email"
              control={control}
              label={t('email')}
              required
              errors={errors.email}
              keyboardType="email-address"
              onFocus={setIsShowKeyboardTrue}
              validate={validateEmailSchema}
            />

            <Input
              name="nickName"
              control={control}
              label={t('nickName')}
              required
              errors={errors.nickName}
              onFocus={setIsShowKeyboardTrue}
              validate={validateNicknameSchema}
            />

            <Input
              name="password"
              control={control}
              label={t('password')}
              required
              isPassword
              errors={errors.password}
              onFocus={setIsShowKeyboardTrue}
              validate={validatePasswordSchema}
            />

            <Input
              name="passwordRepeat"
              control={control}
              label={t('passwordRepeat')}
              required
              isPassword
              errors={errors.passwordRepeat}
              onFocus={setIsShowKeyboardTrue}
              validate={validateRequired}
            />
          </View>

          <Button
            style={styles.registerButton}
            buttonColor="primary"
            titleColor="white"
            onPress={handleSubmit(onSubmit)}
            disabled={
              !isDirty ||
              !isValid ||
              getValues('password') !== getValues('passwordRepeat')
            }
          >
            {isRegisterLoading ? (
              <Spinner color="white" />
            ) : (
              <Text color="white">{t('buttons:register')}</Text>
            )}
          </Button>
        </View>
      </KeyboardAvoidingContainer>
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
  registerButton: {
    width: 100,
  },
});
