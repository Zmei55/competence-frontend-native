import { createStaticNavigation, ParamListBase, useNavigationContainerRef  } from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { RootStack } from './router';

export default function App() {
  const navigationRef = useNavigationContainerRef<ParamListBase>();
  useReduxDevToolsExtension(navigationRef);
  
  const Navigation = createStaticNavigation(RootStack);

  return (
    <Provider store={store}>
      <Navigation ref={navigationRef} />
    </Provider>
  );
}
