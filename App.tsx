import {
  createStaticNavigation,
  ParamListBase,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { PaperProvider } from 'react-native-paper';

import { store } from './redux/store';
import { RootStack } from './router';
import i18n from 'shared/i18next/i18n';

export default function App() {
  const navigationRef = useNavigationContainerRef<ParamListBase>();
  useReduxDevToolsExtension(navigationRef);

  const Navigation = createStaticNavigation(RootStack);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <PaperProvider>
          <Navigation ref={navigationRef} />
        </PaperProvider>
      </I18nextProvider>
    </Provider>
  );
}
