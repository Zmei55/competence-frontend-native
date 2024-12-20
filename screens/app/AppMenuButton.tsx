import { FC, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

import MenuIcon from 'shared/icons/Menu';
import CrossIcon from 'shared/icons/Cross';

interface AppMenuButtonProps {
  showAppMenu: boolean;
  setShowAppMenu: Dispatch<SetStateAction<boolean>>;
}

export const AppMenuButton: FC<AppMenuButtonProps> = ({
  showAppMenu,
  setShowAppMenu,
}) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => setShowAppMenu(showAppMenu => !showAppMenu)}
    >
      {showAppMenu ? (
        <View
          style={{
            width: 24,
            height: 24,
          }}
        >
          <CrossIcon />
        </View>
      ) : (
        <View
          style={{
            width: 24,
            height: 24,
          }}
        >
          <MenuIcon />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
});
