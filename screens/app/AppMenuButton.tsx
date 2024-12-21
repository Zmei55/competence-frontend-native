import { FC, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Pressable, View } from 'react-native';
import { Dropdown, DropdownInputProps } from 'react-native-paper-dropdown';

import MenuIcon from 'shared/icons/Menu';
import CrossIcon from 'shared/icons/Cross';
import { TextInput } from 'react-native-paper';
import { Colors } from 'shared/theme';

interface AppMenuButtonProps {
  showAppMenu: boolean;
  setShowAppMenu: Dispatch<SetStateAction<boolean>>;
}

const OPTIONS = [
  { label: 'En', value: 'en' },
  { label: 'De', value: 'de' },
  { label: 'Ru', value: 'ru' },
];

const CustomDropdownInput = ({
  selectedLabel,
  rightIcon,
}: DropdownInputProps) => (
  <TextInput
    mode="outlined"
    value={selectedLabel}
    outlineColor={Colors.primary}
    activeOutlineColor={Colors.primaryDark}
    style={{
      width: 80,
      height: 40,
    }}
    right={rightIcon}
  />
);

export const AppMenuButton: FC<AppMenuButtonProps> = ({
  showAppMenu,
  setShowAppMenu,
}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        menuContentStyle={{
          top: 42,
        }}
        mode="outlined"
        options={OPTIONS}
        value={i18n.language}
        onSelect={e => changeLanguage(e)}
        hideMenuHeader={true}
        CustomDropdownInput={CustomDropdownInput}
      />

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
});
