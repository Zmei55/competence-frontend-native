import { View, ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, InputForm, Spinner } from '@/components/ui';
import { useLogin } from '@/hooks/auth';
import { TCredentials } from '@/types/auth';

const LoginScreen: React.FC = () => {
  const { t } = useTranslation(['auth', 'buttons']);
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

  const onSubmit: SubmitHandler<TCredentials> = data => {
    handleLogin(data);
  };

  return (
    <SafeAreaView className="flex-1 mt-[-24]">
      <ScrollView>
        <View className="w-full min-h-[53vh] justify-center items-center px-4 gap-10 my-20">
          <View className="gap-3 items-center">
            <Text className="text-4xl text-center">{t('login')}</Text>

            <Link
              href={'/registerScreen'}
              className="text-2xl text-link text-center"
            >
              {t('registerContinue')}
            </Link>
          </View>

          <View className="w-full gap-5 max-w-90">
            <InputForm
              name="email"
              control={control}
              label={t('email')}
              required
              errors={errors.email}
              keyboardType="email-address"
            />

            <InputForm
              name="password"
              control={control}
              label={t('password')}
              required
              isPassword
              errors={errors.password}
            />
          </View>

          <Button
            onPress={handleSubmit(onSubmit)}
            disabled={!isDirty}
            className="w-[250px]"
          >
            {isLoginLoading ? <Spinner color="white" /> : t('buttons:login')}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
