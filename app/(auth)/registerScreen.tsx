import { View, ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, InputForm, Spinner } from '@/components/ui';
import { useRegister } from '@/hooks/auth';
import { TRegisterForm } from '@/types/auth';
import {
  validateEmailSchemaRequired,
  validateNicknameSchemaRequired,
  validatePasswordSchemaRequired,
  validateRequired,
} from '@/constants/validateSchemas';

const RegisterScreen: React.FC = () => {
  const { t } = useTranslation(['auth', 'buttons']);
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

  const onSubmit: SubmitHandler<TRegisterForm> = data => {
    handleRegister(data);
  };

  return (
    <SafeAreaView className="flex-1 mt-[-24]">
      <ScrollView>
        <View
          className={`w-full min-h-[63vh] justify-center items-center px-4 gap-10 my-20`}
        >
          <View className="gap-3 items-center">
            <Text className="text-4xl text-center">{t('register')}</Text>

            <Link
              href={'/loginScreen'}
              className="text-2xl text-link text-center"
            >
              {t('loginContinue')}
            </Link>
          </View>

          <View className="w-full gap-5 max-w-90">
            <InputForm
              label={t('email')}
              name="email"
              control={control}
              required
              errors={errors.email}
              validate={validateEmailSchemaRequired}
              keyboardType="email-address"
            />

            <InputForm
              label={t('nickName')}
              name="nickName"
              control={control}
              required
              errors={errors.nickName}
              validate={validateNicknameSchemaRequired}
            />

            <InputForm
              label={t('password')}
              name="password"
              control={control}
              required
              isPassword
              errors={errors.password}
              validate={validatePasswordSchemaRequired}
            />

            <InputForm
              label={t('passwordRepeat')}
              name="passwordRepeat"
              control={control}
              required
              isPassword
              errors={errors.passwordRepeat}
              validate={validateRequired}
            />
          </View>

          <Button
            onPress={handleSubmit(onSubmit)}
            disabled={
              !isDirty ||
              !isValid ||
              getValues('password') !== getValues('passwordRepeat')
            }
            className="w-[250px]"
          >
            {isRegisterLoading ? (
              <Spinner color="white" />
            ) : (
              t('buttons:register')
            )}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
