import { createStaticNavigation, ParamListBase, StaticParamList, useNavigationContainerRef  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/auth/LoginScreen';
import { RegisterScreen } from './screens/auth/RegisterScreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type RootStackParamList = StaticParamList<typeof RootStack>;

const useIsSignedIn = () => {
  const isSignedIn = true;
  return isSignedIn;
}

const useIsSignedOut = () => {
  const isSignedIn = false;
  return !isSignedIn;
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
  },
  groups: {
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
    }
  }
  });

export default function App() {
  const navigationRef = useNavigationContainerRef<ParamListBase>();
  useReduxDevToolsExtension(navigationRef);
  
  const Navigation = createStaticNavigation(RootStack);

  return <Navigation ref={navigationRef} />;
}
