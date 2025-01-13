import React, { Dispatch, SetStateAction } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';

import { isAuthSelector } from '@/redux/auth';
import { useAppSelector, useDimensions } from '@/hooks';
import { useLogout } from '@/hooks/auth';
import { Text } from '@/components/ui';
import { firstLatterToUpperCase } from '@/helpers';

import Ionicons from '@expo/vector-icons/Ionicons';

interface AppMenuProps {
  setShowAppMenu: Dispatch<SetStateAction<boolean>>;
}

export const AppMenu: React.FC<AppMenuProps> = ({ setShowAppMenu }) => {
  const { t } = useTranslation(['header', 'buttons']);
  const { heightWindow } = useDimensions();
  const { handleLogout } = useLogout();
  const isAuth = useAppSelector(isAuthSelector);

  function closeAppMenu() {
    setShowAppMenu(false);
  }

  return (
    <View
      className="w-64 absolute right-0 top-[88px] bg-white z-50"
      style={{
        height: heightWindow - 88,
      }}
    >
      {!isAuth && (
        <>
          <TouchableOpacity>
            <Link
              href="/(auth)/loginScreen"
              className="text-3xl"
              onPress={closeAppMenu}
            >
              Login
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link
              href="/(auth)/registerScreen"
              className="text-3xl"
              onPress={closeAppMenu}
            >
              Register
            </Link>
          </TouchableOpacity>
        </>
      )}

      {isAuth && (
        <>
          <TouchableOpacity onPress={closeAppMenu}>
            <Link
              href={'/(main)/profileScreen'}
              className="text-3xl"
              onPress={closeAppMenu}
            >
              {t('myProfile')}
            </Link>
          </TouchableOpacity>

          <TouchableOpacity onPress={closeAppMenu}>
            <Link
              href={'/(main)/competenciesScreen'}
              className="text-3xl"
              onPress={closeAppMenu}
            >
              {t('competencies')}
            </Link>
          </TouchableOpacity>

          <TouchableOpacity onPress={closeAppMenu}>
            <Link
              href={'/(main)/requestsScreen'}
              className="text-3xl"
              onPress={closeAppMenu}
            >
              {t('requests')}
            </Link>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleLogout()}>
            {/* <Ionicons name="exit-outline" size={24} color="black" /> */}

            <Text variant="bodyLarge">
              {firstLatterToUpperCase(t('buttons:logOut'))}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
