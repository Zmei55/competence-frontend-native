import React from 'react';
import { Stack, Redirect } from 'expo-router';

import { isAuthSelector } from '@/redux/auth';
import { useAppSelector } from '@/hooks';

const AuthLayout: React.FC = () => {
  const isAuth = useAppSelector(isAuthSelector);

  if (isAuth) return <Redirect href={'/'} />;

  return (
    <>
      <Stack>
        <Stack.Screen name="loginScreen" options={{ headerShown: false }} />
        <Stack.Screen name="registerScreen" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
