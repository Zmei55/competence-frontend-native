import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import i18n from '@/constants/i18next/i18n';
import 'react-native-reanimated';

import { store } from '@/redux/store';
import { AppHeader } from '@/components/header/AppHeader';
import { Colors } from '@/constants/Colors';

import '../global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Stack
          screenOptions={{
            header: ({ options, route }) => (
              <AppHeader options={options} route={route} />
            ),
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: 'Competence Center App',
              headerTintColor: Colors.primary.default,
            }}
          />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(main)" />
        </Stack>

        <StatusBar style="auto" />
      </I18nextProvider>
    </Provider>
  );
};

export default RootLayout;
