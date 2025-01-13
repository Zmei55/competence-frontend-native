import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { userSelector } from '@/redux/auth';
import { profileSelector } from '@/redux/profile';
import { useAppSelector } from '@/hooks';
import { useGetCurrentUserProfile, useGetAllCountries } from '@/hooks/profile';
import { Spinner, Text } from '@/components/ui';
import { showDate } from '@/helpers';

import { ProfileData, ProfileForm } from '@/components/profile';

const ProfileScreen: FC = () => {
  const currentUser = useAppSelector(userSelector);
  const profile = useAppSelector(profileSelector);
  const { handleGetCurrentUserProfile, isCurrentUserProfileLoading } =
    useGetCurrentUserProfile();
  const { handleGetAllCountries } = useGetAllCountries();
  const { t } = useTranslation(['profile', 'buttons']);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    handleGetCurrentUserProfile();
    handleGetAllCountries();

    if (currentUser && !currentUser.firstName) {
      setShowModal(!showModal);
      setEditMode(!editMode);
    }
  }, [
    currentUser,
    editMode,
    handleGetAllCountries,
    handleGetCurrentUserProfile,
    showModal,
  ]);

  return (
    <SafeAreaView className="flex-1 mt-[64px]">
      {!profile && isCurrentUserProfileLoading && (
        <Spinner size="large" height={300} />
      )}

      <ScrollView>
        {profile && (
          <View className="w-full h-full items-center px-3 gap-3 mt-10 mb-3">
            <Image
              src={`data:image/png;base64,${profile?.avatarImageData}`}
              className="w-[250px] h-[250px] bg-white border-2 border-primary-default rounded-full"
            />

            <Text variant="title">{`${profile?.firstName} ${profile?.lastName} (${profile?.nickName})`}</Text>

            <Text>{`${t('dateRegistration')}: ${showDate(profile?.dateCreate)}`}</Text>

            <View className="w-full items-center px-2 py-3 border-2 border-primary-default rounded-md">
              {!editMode && (
                <ProfileData profile={profile} setEditMode={setEditMode} />
              )}

              {editMode && (
                <ProfileForm profile={profile} setEditMode={setEditMode} />
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
