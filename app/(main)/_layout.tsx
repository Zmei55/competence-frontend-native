import React from 'react';
import { Stack, Redirect } from 'expo-router';

import { isAuthSelector } from '@/redux/auth';
import { useAppSelector } from '@/hooks';

const MainLayout: React.FC = () => {
  const isAuth = useAppSelector(isAuthSelector);

  if (!isAuth) return <Redirect href={'/(auth)/loginScreen'} />;

  return (
    <>
      <Stack>
        <Stack.Screen name="profileScreen" options={{ headerShown: false }} />
        <Stack.Screen
          name="competenciesScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="competenceScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="requestsScreen" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default MainLayout;
