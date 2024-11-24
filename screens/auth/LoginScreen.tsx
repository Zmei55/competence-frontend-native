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

import { TCredentials } from 'screens/auth';
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

export const LoginScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation(['auth', 'buttons']);
  const { isShowKeyboard, setIsShowKeyboardTrue, setIsShowKeyboardFalse } =
    useShowKeyboard();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TCredentials>({
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const onSubmit: SubmitHandler<TCredentials> = data => console.log({ data });

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
              <Text variant="title">{t('login')}</Text>

              <Pressable onPress={() => navigate('Register')}>
                <Text style={styles.link}>{t('registerContinue')}</Text>
              </Pressable>
            </View>

            <View style={styles.inputContainer}>
              <View>
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
              </View>

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
              onPress={handleSubmit(onSubmit)}
              buttonColor="primary"
              titleColor="white"
            >
              {t('buttons:login')}
            </Button>
          </View>
        </KeyboardAvoidingContainer>
      </AppContainer>
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
});
