import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { useForm } from 'react-hook-form';

import {
  professionListSelector,
  skillLevelSelector,
} from '@/redux/administration';
import { countriesSelector } from '@/redux/profile';
import { TProfile, IProfileFormValues } from '@/types/profile';
import { useDimensions, useAppSelector } from '@/hooks';
import { useDeleteAddress } from '@/hooks/profile';
import {
  Button,
  Text,
  SwitchForm,
  InputForm,
  SelectFormModal,
  Spinner,
  DatePickerForm,
} from '@/components/ui';
import {
  validateNameRequired,
  validatePhoneRequired,
  validateRequired,
} from '@/constants/validateSchemas';
import { Colors } from '@/constants/Colors';

import { WidthBox } from '@/components/profile/WidthBox';
import { SaveProfileModalModal } from '@/components/profile/SaveProfileModal';

import Ionicons from '@expo/vector-icons/Ionicons';

// import { professionList } from '@/constants/data/professionList';
// import { skillLevelList } from '@/constants/data/skillLevelList';
// import { countries } from '@/constants/data/countries';

interface ProfileFormProps {
  profile: TProfile;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  profile,
  setEditMode,
}) => {
  const { deleteSecondAddress, isDeletionSecondAddressLoading } =
    useDeleteAddress();
  const { t } = useTranslation(['profile', 'buttons']);
  const { Breakpoints } = useDimensions();
  const professionList = useAppSelector(professionListSelector);
  const skillLevelList = useAppSelector(skillLevelSelector);
  const countries = useAppSelector(countriesSelector);
  const [showUpdateProfileModal, setShowUpdateProfileModal] =
    useState<boolean>(false);
  const [showSecondAddress, setShowSecondAddress] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IProfileFormValues>({
    defaultValues: {
      firstName: profile && profile.firstName ? profile.firstName : undefined,
      lastName: profile && profile.lastName ? profile.lastName : undefined,
      phone: profile && profile.phone ? profile.phone : undefined,
      dateOfBirth:
        profile && profile.dateOfBirth ? profile.dateOfBirth : undefined,
      profession:
        profile && profile.profession
          ? profile.profession.toString()
          : undefined,
      skillLevelId:
        profile && profile.skillLevelId ? profile.skillLevelId.toString() : '1',
      public: profile && profile.public ? profile.public : false,
      residence:
        profile && profile.residence ? profile.residence.toString() : undefined,
      readyToMove: profile && profile.readyToMove ? profile.readyToMove : false,
      address: {
        country:
          profile && profile.address && profile.address.country
            ? profile.address.country.toString()
            : undefined,
        city:
          profile && profile.address && profile.address.city
            ? profile.address.city
            : undefined,
        address:
          profile && profile.address && profile.address.address
            ? profile.address.address
            : undefined,
        postcode:
          profile && profile.address && profile.address.postcode
            ? profile.address.postcode
            : undefined,
      },
      otherAddress: {
        country:
          profile && profile.otherAddress && profile.otherAddress.country
            ? profile.otherAddress.country.toString()
            : undefined,
        city:
          profile && profile.otherAddress && profile.otherAddress.city
            ? profile.otherAddress.city
            : undefined,
        address:
          profile && profile.otherAddress && profile.otherAddress.address
            ? profile.otherAddress.address
            : undefined,
        postcode:
          profile && profile.otherAddress && profile.otherAddress.postcode
            ? profile.otherAddress.postcode
            : undefined,
      },
      location: profile && profile.location ? profile.location : undefined,
    },
  });

  return (
    <View>
      <View className="gap-3">
        <View className="w-full flex-row justify-between">
          <Button onPress={() => setShowUpdateProfileModal(true)}>
            {t('buttons:save')}
          </Button>

          <Button buttonColor="error" onPress={() => setEditMode(false)}>
            {t('buttons:cancel')}
          </Button>
        </View>

        <View
          className={`${Breakpoints.md ? 'items-center' : undefined} gap-3`}
        >
          <WidthBox>
            <Text
              variant={Breakpoints.sm ? 'subtitle' : 'bodyLarge'}
              bold
              italic
            >
              {t('personalInformation')}
            </Text>

            <View
              className={`flex-row items-center ${Breakpoints.md ? 'justify-start' : 'w-full justify-between'}`}
            >
              <Text variant="body">{t('public')}</Text>
              <SwitchForm name="public" control={control} />
            </View>
          </WidthBox>

          <View className="gap-3">
            <InputForm
              name="firstName"
              control={control}
              label={t('firstName')}
              required
              errors={errors.firstName}
              validate={validateNameRequired}
              // disabled
            />

            <InputForm
              name="lastName"
              control={control}
              label={t('lastName')}
              required
              errors={errors.lastName}
              validate={validateNameRequired}
              // disabled
            />

            <InputForm
              name="phone"
              control={control}
              label={t('phoneNumber')}
              required
              errors={errors.phone}
              validate={validatePhoneRequired}
              // disabled
            />

            <DatePickerForm
              name="dateOfBirth"
              control={control}
              label={t('dateOfBirth')}
              // disabled
            />

            <SelectFormModal
              name="residence"
              control={control}
              defaultValue={getValues('residence')}
              filter
              modalContainerStyles="w-[96%]"
              validate={validateRequired}
              title={t('country')}
              list={countries}
              label={t('residence')}
              required
              // disabled
            />

            <SelectFormModal
              name="profession"
              control={control}
              defaultValue={getValues('profession')}
              filter
              modalContainerStyles="w-[96%]"
              validate={validateRequired}
              title={t('currentProfession')}
              list={professionList}
              label={t('currentProfession')}
              required
              // disabled
            />

            <SelectFormModal
              name="skillLevelId"
              control={control}
              defaultValue={getValues('skillLevelId')}
              modalContainerStyles="w-[96%]"
              validate={validateRequired}
              title={t('expertLevel')}
              list={skillLevelList}
              label={t('expertLevel')}
              required
              // disabled
            />
          </View>

          <View className="gap-3 border-t-2 border-primary-default py-3 mt-3">
            <WidthBox>
              <Text
                variant={Breakpoints.md ? 'subtitle' : 'bodyLarge'}
                bold
                italic
              >
                {t('address')}
              </Text>

              <View
                className={`flex-row items-center ${Breakpoints.md ? 'justify-start' : 'w-full justify-between'}`}
              >
                <Text variant="body">{t('readyToMove')}</Text>
                <SwitchForm name="readyToMove" control={control} />
              </View>
            </WidthBox>

            <SelectFormModal
              name="address.country"
              control={control}
              defaultValue={getValues('address.country')}
              filter
              modalContainerStyles="w-[96%]"
              title={t('country')}
              list={countries}
              label={t('country')}
            />

            <InputForm
              name="address.city"
              control={control}
              label={t('city')}
              errors={errors.address && errors.address.city}
            />

            <InputForm
              name="address.address"
              control={control}
              label={t('address')}
              errors={errors.address && errors.address.address}
            />

            <InputForm
              name="address.postcode"
              control={control}
              label={t('postcode')}
              errors={errors.address && errors.address.postcode}
            />
          </View>

          {profile.address && !profile.otherAddress && (
            <TouchableOpacity
              className="flex-row items-center gap-3"
              onPress={() => setShowSecondAddress(state => !state)}
            >
              {showSecondAddress ? (
                <Ionicons
                  name="remove-circle-outline"
                  size={36}
                  color={Colors.primary.default}
                />
              ) : (
                <Ionicons
                  name="add-circle-outline"
                  size={36}
                  color={Colors.primary.default}
                />
              )}
              <Text variant="subtitle">{t('buttons:addSecondAddress')}</Text>
            </TouchableOpacity>
          )}

          {showSecondAddress && (
            <View className="gap-3 border-t-2 border-primary-default pt-3">
              <View className="w-full flex-row justify-between">
                <Text
                  variant={Breakpoints.md ? 'subtitle' : 'bodyLarge'}
                  bold
                  italic
                >
                  {t('secondAddress')}
                </Text>

                {profile.otherAddress && (
                  <Button
                    buttonColor="error"
                    onPress={() => deleteSecondAddress(getValues())}
                    className="w-30"
                    isLoading={isDeletionSecondAddressLoading}
                  >
                    {isDeletionSecondAddressLoading ? (
                      <Spinner size="small" />
                    ) : (
                      t('buttons:delete')
                    )}
                  </Button>
                )}
              </View>

              <SelectFormModal
                name="otherAddress.country"
                control={control}
                defaultValue={getValues('otherAddress.country')}
                filter
                modalContainerStyles="w-[96%]"
                title={t('country')}
                list={countries}
                label={t('country')}
              />

              <InputForm
                name="otherAddress.city"
                control={control}
                label={t('city')}
                errors={errors.otherAddress && errors.otherAddress.city}
              />

              <InputForm
                name="otherAddress.address"
                control={control}
                label={t('address')}
                errors={errors.otherAddress && errors.otherAddress.address}
              />

              <InputForm
                name="otherAddress.postcode"
                control={control}
                label={t('postcode')}
                errors={errors.otherAddress && errors.otherAddress.postcode}
              />
            </View>
          )}
        </View>
      </View>

      <SaveProfileModalModal
        formValues={getValues()}
        handleSubmit={handleSubmit}
        showUpdateProfileModal={showUpdateProfileModal}
        setShowUpdateProfileModal={setShowUpdateProfileModal}
      />
    </View>
  );
};
