import { StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppSelector } from 'screens/app';
import { LoginScreen } from 'screens/auth/LoginScreen';
import { RegisterScreen } from 'screens/auth/RegisterScreen';
import { isAuthSelector } from './redux/auth';
import { HomePageScreen } from 'screens/homePage/HomePage';

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
  groups: {
    Common: {
      screens: {
        HomePage: {
          screen: HomePageScreen,
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
      screens: {},
    },
  },
});
