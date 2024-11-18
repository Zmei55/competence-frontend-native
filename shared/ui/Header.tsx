import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors, Theme } from '../theme';

interface HeaderProps {};

export const Header: React.FC<HeaderProps> = () => {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState<boolean>(false);

  return (
    <View id='layout' style={styles.header}>
      <Text style={styles.appTitle}>COMPETENCE CENTER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Theme.spacing(10),
    paddingVertical: Theme.spacing(4),
    paddingLeft: Theme.spacing(4),
    backgroundColor: Colors.gray,
  },
  appTitle: {
    color: Colors.primary,
  },
});
