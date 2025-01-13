import { useUpdateUserProfileMutation } from '@/redux/profile/profileApi';
import {
  saveProfileError,
  resetProfileError,
  deleteOtherAddress,
} from '@/redux/profile';
import { useAppDispatch } from '@/hooks';
import { IProfileFormValues } from '@/types/profile';
import { customErrorHandler } from '@/helpers';

export const useDeleteAddress = () => {
  const dispatch = useAppDispatch();
  const [updateProfile, { isLoading: isDeletionSecondAddressLoading }] =
    useUpdateUserProfileMutation();

  const deleteSecondAddress = async (data: IProfileFormValues) => {
    const newProfile: IProfileFormValues = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      residence: data.residence,
      profession: data.profession,
      // specialty: data.specialty,
      skillLevelId: data.skillLevelId,
      // statusInSchool: data.statusInSchool,
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

    try {
      await updateProfile(newProfile).unwrap();
      dispatch(deleteOtherAddress());

      dispatch(resetProfileError());
    } catch (error) {
      dispatch(saveProfileError(customErrorHandler(error)));
    }
  };

  return { deleteSecondAddress, isDeletionSecondAddressLoading };
};
