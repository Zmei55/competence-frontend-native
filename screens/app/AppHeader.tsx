import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route } from '@react-navigation/native';
import { getHeaderTitle, Header } from '@react-navigation/elements';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { AppMenuButton } from './AppMenuButton';
import { AppMenu } from './AppMenu';

interface AppHeaderProps {
  options: NativeStackNavigationOptions;
  route: Route<string>;
  back?: {
    title: string | undefined;
    href: string | undefined;
  };
}

export const AppHeader: FC<AppHeaderProps> = ({ options, route }) => {
  const [showAppMenu, setShowAppMenu] = useState<boolean>(false);
  const title = getHeaderTitle(options, route.name);

  return (
    <View>
      <Header
        title={title}
        {...options}
        headerRight={() => (
          <AppMenuButton
            showAppMenu={showAppMenu}
            setShowAppMenu={setShowAppMenu}
          />
        )}
      />

      {showAppMenu && <AppMenu />}
    </View>
  );
};

const styles = StyleSheet.create({});
