import { FC, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route } from '@react-navigation/native';
import { getHeaderTitle, Header } from '@react-navigation/elements';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { AppMenuButton } from './AppMenuButton';
import { AppMenu } from './AppMenu';

import { useAppSelector } from 'screens/app';
import { userSelector } from 'redux/auth';
import {
  useGetDriverLicences,
  useGetEducationTypes,
  useGetIndustries,
  useGetJobTitles,
  useGetLanguages,
  useGetLanguageLevels,
  useGetProfessions,
  useGetSkillLevels,
} from 'screens/administration';

interface AppHeaderProps {
  options: NativeStackNavigationOptions;
  route: Route<string>;
  back?: {
    title: string | undefined;
    href: string | undefined;
  };
}

export const AppHeader: FC<AppHeaderProps> = ({ options, route }) => {
  const currentUser = useAppSelector(userSelector);
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
  }, [currentUser]);

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
