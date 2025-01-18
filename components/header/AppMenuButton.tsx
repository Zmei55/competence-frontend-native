import { FC, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import { SelectModal } from '@/components/ui';

import Ionicons from '@expo/vector-icons/Ionicons';

interface AppMenuButtonProps {
  showAppMenu: boolean;
  setShowAppMenu: Dispatch<SetStateAction<boolean>>;
}

type LanguageOptionType = {
  id: string;
  name: string;
};

const LANGUAGE_OPTIONS: LanguageOptionType[] = [
  { name: 'En', id: 'en' },
  { name: 'De', id: 'de' },
  { name: 'Ru', id: 'ru' },
];

export const AppMenuButton: FC<AppMenuButtonProps> = ({
  showAppMenu,
  setShowAppMenu,
}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    if (typeof language === 'number') return null;
    i18n.changeLanguage(language);
  };

  return (
    <View className="flex-row gap-2 mr-3">
      <SelectModal<LanguageOptionType>
        list={LANGUAGE_OPTIONS}
        value={i18n.language}
        onSelect={e => changeLanguage(e.id)}
        modalContainerStyles="w-40"
        width={70}
        height={40}
      />
      <Pressable
        className="w-10 h-10 justify-center items-center"
        onPress={() => setShowAppMenu(showAppMenu => !showAppMenu)}
      >
        {showAppMenu ? (
          <Ionicons
            name="close-outline"
            size={40}
            color={Colors.gray.default}
          />
        ) : (
          <Ionicons name="menu-outline" size={40} color={Colors.gray.default} />
        )}
      </Pressable>
    </View>
  );
};
