import { Dispatch, SetStateAction, FC, useState } from 'react';
import { View, ViewProps } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  professionListSelector,
  skillLevelSelector,
} from '@/redux/administration';
import { countriesSelector } from '@/redux/profile';
import { TProfile } from '@/types/profile';
import { useDimensions, useAppSelector } from '@/hooks';
import { Button, Text } from '@/components/ui';
import { Colors } from '@/constants/Colors';
import { showDate, findListItemById } from '@/helpers';

import { DeleteProfileModal } from '@/components/profile/DeleteProfileModal';
import { WidthBox } from '@/components/profile/WidthBox';

import Ionicons from '@expo/vector-icons/Ionicons';

// import { professionList } from '@/constants/data/professionList';
// import { skillLevelList } from '@/constants/data/skillLevelList';
// import { countries } from '@/constants/data/countries';

interface AddressBlockProps {
  showReadyToMove?: boolean;
  readyToMove?: boolean;
  country?: string | 0;
  city?: string;
  address?: string;
  postcode?: string;
}

interface ProfileDataProps {
  profile: TProfile;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const InfoText: React.FC<ViewProps> = ({ children, ...rest }) => {
  return (
    <View
      className="w-[300px] h-14 justify-center items-center bg-gray-light rounded-lg"
      {...rest}
    >
      <Text>{children}</Text>
    </View>
  );
};

const AddressBlock: React.FC<AddressBlockProps> = ({
  showReadyToMove = false,
  readyToMove = false,
  country,
  city,
  address,
  postcode,
}) => {
  const { t } = useTranslation(['profile']);
  const { Breakpoints } = useDimensions();

  return (
    <View className="gap-3">
      <WidthBox>
        <Text variant={Breakpoints.md ? 'subtitle' : 'bodyLarge'} bold italic>
          {t('address')}
        </Text>

        {showReadyToMove && (
          <Text variant="body">
            {readyToMove ? t('readyToMove') : t('notReadyToMove')}
          </Text>
        )}
      </WidthBox>

      <WidthBox>
        <Text bold>{t('country')}:</Text>
        <InfoText>{typeof country === 'string' ? country : undefined}</InfoText>
      </WidthBox>

      <WidthBox>
        <Text bold>{t('city')}:</Text>
        <InfoText>{city}</InfoText>
      </WidthBox>

      <WidthBox>
        <Text bold>{t('address')}:</Text>
        <InfoText>{address}</InfoText>
      </WidthBox>

      <WidthBox>
        <Text bold>{t('postcode')}:</Text>
        <InfoText>{postcode}</InfoText>
      </WidthBox>
    </View>
  );
};

export const ProfileData: FC<ProfileDataProps> = ({ profile, setEditMode }) => {
  const { t } = useTranslation(['profile', 'buttons']);
  const { Breakpoints } = useDimensions();
  const professionList = useAppSelector(professionListSelector);
  const skillLevelList = useAppSelector(skillLevelSelector);
  const countries = useAppSelector(countriesSelector);
  const [showDeleteProfileModal, setShowDeleteProfileModal] =
    useState<boolean>(false);

  return (
    <View>
      <View className={`${Breakpoints.md ? 'items-center' : undefined} gap-3`}>
        <View className="w-full flex-row justify-between">
          <Button>
            <Ionicons name="camera" size={24} color={Colors.white} />
          </Button>

          <Button onPress={() => setEditMode(true)}>{t('buttons:edit')}</Button>
        </View>

        <WidthBox>
          <Text variant={Breakpoints.sm ? 'subtitle' : 'bodyLarge'} bold italic>
            {t('personalInformation')}
          </Text>
          <Text>{profile.public ? t('public') : t('private')}</Text>
        </WidthBox>

        <WidthBox>
          <Text bold>{t('email')}:</Text>
          <InfoText>{profile.email}</InfoText>
        </WidthBox>

        <WidthBox>
          <Text bold>{t('phoneNumber')}:</Text>
          <InfoText>{profile.phone}</InfoText>
        </WidthBox>

        <WidthBox>
          <Text bold>{t('dateOfBirth')}:</Text>
          <InfoText>{showDate(profile.dateOfBirth)}</InfoText>
        </WidthBox>

        <WidthBox>
          <Text bold>{t('residence')}:</Text>
          <InfoText>
            {countries &&
              profile &&
              profile.residence &&
              findListItemById(countries, profile.residence)?.name}
          </InfoText>
        </WidthBox>

        <WidthBox>
          <Text bold>{t('currentProfession')}:</Text>
          <InfoText>
            {professionList &&
              profile &&
              profile.profession &&
              findListItemById(professionList, profile.profession)?.name}
          </InfoText>
        </WidthBox>

        <WidthBox>
          <Text bold>{t('expertLevel')}:</Text>
          <InfoText>
            {skillLevelList &&
              profile &&
              profile.skillLevelId &&
              findListItemById(skillLevelList, profile.skillLevelId)
                ?.description}
          </InfoText>
        </WidthBox>

        <WidthBox>
          <Button mode="text" textColor="primary">
            {t('changePassword')}
          </Button>

          <Button
            mode="text"
            textColor="error"
            onPress={() => setShowDeleteProfileModal(true)}
          >
            {t('deleteAccount')}
          </Button>
        </WidthBox>

        {profile.address && (
          <AddressBlock
            showReadyToMove
            readyToMove={profile.readyToMove}
            country={
              countries &&
              profile.address.country &&
              findListItemById(countries, profile.address.country)?.name
            }
            city={profile.address.city}
            address={profile.address.address}
            postcode={profile.address.postcode}
          />
        )}

        {profile.otherAddress && (
          <AddressBlock
            country={
              countries &&
              profile.otherAddress.country &&
              findListItemById(countries, profile.otherAddress.country)?.name
            }
            city={profile.otherAddress.city}
            address={profile.otherAddress.address}
            postcode={profile.otherAddress.postcode}
          />
        )}
      </View>

      <DeleteProfileModal
        showDeleteProfileModal={showDeleteProfileModal}
        setShowDeleteProfileModal={setShowDeleteProfileModal}
      />
    </View>
  );
};
