import { StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppSelector } from 'screens/app';
import { isAuthSelector } from 'redux/auth';
import { LoginScreen } from 'screens/auth/LoginScreen';
import { RegisterScreen } from 'screens/auth/RegisterScreen';
import { HomePageScreen } from 'screens/homePage';
import { ProfileScreen } from 'screens/profile';
import { AppHeader } from 'screens/app/AppHeader';
import { Colors } from 'shared/theme';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type RootStackParamList = StaticParamList<typeof RootStack>;

const useIsSignedIn = () => {
  const isAuth = useAppSelector(isAuthSelector);
  console.log('useIsSignedIn ~ isAuth:', isAuth);
  return isAuth;
};

const useIsSignedOut = () => {
  const isAuth = useAppSelector(isAuthSelector);
  return !isAuth;
};

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screenOptions: {
    header: ({ options, back, route }) => (
      <AppHeader options={options} route={route} back={back} />
    ),
  },
  groups: {
    Common: {
      screens: {
        HomePage: {
          screen: HomePageScreen,
          options: {
            headerTitle: 'COMPETENCE CENTER',
            headerTitleStyle: {
              color: Colors.primary,
            },
          },
        },
      },
    },
    SignedOut: {
      if: useIsSignedOut,
      screens: {
        Login: {
          screen: LoginScreen,
        },
        Register: {
          screen: RegisterScreen,
        },
      },
    },
    SignedIn: {
      if: useIsSignedIn,
      screens: {
        Profile: {
          screen: ProfileScreen,
        },
      },
    },
  },
});
