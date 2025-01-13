import { useTranslation } from 'react-i18next';

import { saveSnackbarMessage, saveSnackbarError } from '@/redux/app';
import { useUpdateUserProfileMutation } from '@/redux/profile/profileApi';
import { useAppDispatch } from '@/hooks';
import { IProfileFormValues } from '@/types/profile';
import { customErrorHandler } from '@/helpers';

export const useUpdateProfile = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['profile']);
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserProfileMutation();

  const handleUpdateProfile = async (
    data: IProfileFormValues,
    callBack?: () => void
  ) => {
    const newProfile: IProfileFormValues = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      residence: data.residence,
      profession: data.profession,
      specialty: data.specialty,
      skillLevelId: data.skillLevelId,
      statusInSchool: data.statusInSchool,
      public: data.public,
      readyToMove: data.readyToMove,
      location: data.location,
      address: null,
      otherAddress: null,
    };

    if (
      data.address &&
      (data.address.country ||
        data.address.city ||
        data.address.address ||
        data.address.postcode)
    ) {
      newProfile.address = {
        country: data.address.country,
        city: data.address.city,
        address: data.address.address,
        postcode: data.address.postcode,
      };
    }

    if (
      data.otherAddress &&
      (data.otherAddress.country ||
        data.otherAddress.city ||
        data.otherAddress.address ||
        data.otherAddress.postcode)
    ) {
      newProfile.otherAddress = {
        country: data.otherAddress.country,
        city: data.otherAddress.city,
        address: data.otherAddress.address,
        postcode: data.otherAddress.postcode,
      };
    }

    try {
      await updateProfile(newProfile).unwrap();
      dispatch(saveSnackbarMessage(t('snackbar.dataUpdated')));

      if (callBack) callBack();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleUpdateProfile, isUpdateProfileLoading };
};
