import { FC, useState, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Route } from '@react-navigation/native';
import { getHeaderTitle, Header } from '@react-navigation/elements';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { useGetCurrentUserQuery } from '@/redux/auth/authApi';
import { isAuthSelector, saveAuthLoading } from '@/redux/auth';
import { useAppSelector, useAppDispatch } from '@/hooks';
import {
  useGetDriverLicences,
  useGetEducationTypes,
  useGetIndustries,
  useGetJobTitles,
  useGetLanguages,
  useGetLanguageLevels,
  useGetProfessions,
  useGetSkillLevels,
} from '@/hooks/administration';
import LeftIcon from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';

import { AppMenuButton } from './AppMenuButton';
import { AppMenu } from './AppMenu';

interface AppHeaderProps {
  options: NativeStackNavigationOptions;
  route: Route<string>;
}

export const AppHeader: FC<AppHeaderProps> = ({ options, route }) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const { data: currentUser, isFetching } = useGetCurrentUserQuery(null, {
    skip: !isAuth,
  });
  const router = useRouter();
  const { getDriverLicences } = useGetDriverLicences();
  const { getEducationTypes } = useGetEducationTypes();
  const { getIndustries } = useGetIndustries();
  const { getJobTitles } = useGetJobTitles();
  const { getLanguages } = useGetLanguages();
  const { getLanguageLevels } = useGetLanguageLevels();
  const { getProfessions } = useGetProfessions();
  const { getSkillLevels } = useGetSkillLevels();
  const [showAppMenu, setShowAppMenu] = useState<boolean>(false);
  const title = getHeaderTitle(options, route.name);

  useEffect(() => {
    if (currentUser) {
      const fetchInitialData = () => {
        getDriverLicences();
        getEducationTypes();
        getIndustries();
        getJobTitles();
        getLanguages();
        getLanguageLevels();
        getProfessions();
        getSkillLevels();
      };

      fetchInitialData();
    }
  }, [
    currentUser,
    getDriverLicences,
    getEducationTypes,
    getIndustries,
    getJobTitles,
    getLanguageLevels,
    getLanguages,
    getProfessions,
    getSkillLevels,
  ]);

  useEffect(() => {
    dispatch(saveAuthLoading(isFetching));
  }, [dispatch, isFetching]);

  return (
    <PaperProvider>
      <View>
        <Header
          title={title}
          {...options}
          headerLeft={() => (
            <View className="mr-2">
              {route.name !== 'index' && (
                <Pressable onPress={() => router.back()}>
                  <LeftIcon
                    name="left"
                    size={24}
                    color={Colors.gray.default}
                    className="ml-2"
                  />
                </Pressable>
              )}
            </View>
          )}
          headerRight={() => (
            <AppMenuButton
              showAppMenu={showAppMenu}
              setShowAppMenu={setShowAppMenu}
            />
          )}
        />

        {showAppMenu && <AppMenu setShowAppMenu={setShowAppMenu} />}
      </View>
    </PaperProvider>
  );
};
