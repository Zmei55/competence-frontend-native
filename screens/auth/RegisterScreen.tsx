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

import { TRegisterForm } from 'screens/auth';
import {
  Text,
  Input,
  Button,
  AppContainer,
  KeyboardAvoidingContainer,
} from 'shared/ui';
import { Colors, Theme } from 'shared/theme';
import { useShowKeyboard } from 'shared/hooks';
import { validateEmailSchemaRequired } from 'shared/validateSchemas';

export const RegisterScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation(['auth', 'buttons']);
  const { isShowKeyboard, setIsShowKeyboardTrue, setIsShowKeyboardFalse } =
    useShowKeyboard();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    defaultValues: {
      email: undefined,
      nickName: undefined,
      password: undefined,
      passwordRepeat: undefined,
    },
  });

  const onSubmit: SubmitHandler<TRegisterForm> = data => console.log({ data });

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
                validate={validateEmailSchemaRequired}
              />

              <Input
                name="nickName"
                control={control}
                label={t('nickName')}
                required
                errors={errors.nickName}
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

              <Input
                name="passwordRepeat"
                control={control}
                label={t('passwordRepeat')}
                required
                isPassword
                errors={errors.passwordRepeat}
                onFocus={setIsShowKeyboardTrue}
              />
            </View>

            <Button
              buttonColor="primary"
              titleColor="white"
              onPress={handleSubmit(onSubmit)}
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
