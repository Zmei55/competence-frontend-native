import { StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppSelector } from 'screens/app';
import { AboutProjectScreen } from 'screens/aboutProject';
import { LoginScreen } from 'screens/auth/LoginScreen';
import { RegisterScreen } from 'screens/auth/RegisterScreen';
import { isAuthSelector } from './redux/auth';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type RootStackParamList = StaticParamList<typeof RootStack>;

const useIsSignedIn = () => {
  const isAuth = useAppSelector(isAuthSelector);
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
        AboutProject: {
          screen: AboutProjectScreen,
          options: {
            headerShown: false,
          },
        },
      },
    },
    SignedOut: {
      if: useIsSignedOut,
      screens: {
        Login: {
          screen: LoginScreen,
          options: {
            headerShown: false,
          },
        },
        Register: {
          screen: RegisterScreen,
          options: {
            headerShown: false,
          },
        },
      },
    },
    SignedIn: {
      if: useIsSignedIn,
      screens: {},
    },
  },
});
