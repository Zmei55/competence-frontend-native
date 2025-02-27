import { useState } from 'react';
import { useLazyGetAllConfirmationUnregisteredGuarantorByCompetaIdQuery } from '@/redux/guarantee/guaranteeApi';
import { TCompetaConfirmationUnregistered } from '@/types/guarantee';
import { customErrorHandler } from '@/helpers';

export const useGetAllConfirmationUnregisteredByCompetaId = () => {
  const [getConfirmation, { isLoading: isGetConfirmationUnregisteredLoading }] =
    useLazyGetAllConfirmationUnregisteredGuarantorByCompetaIdQuery();
  const [confirmationUnregisteredList, setConfirmationUnregisteredList] =
    useState<TCompetaConfirmationUnregistered[] | null>(null);
  const [
    getConfirmationUnregisteredError,
    setGetConfirmationUnregisteredError,
  ] = useState<string | null>(null);

  const handleGetAllConfirmationUnregisteredByCompetaId = async (
    competaId: number
  ) => {
    try {
      const gettingConfirmation = await getConfirmation(competaId).unwrap();
      setConfirmationUnregisteredList(gettingConfirmation);
    } catch (error) {
      setGetConfirmationUnregisteredError(customErrorHandler(error));
    }
  };

  return {
    confirmationUnregisteredList,
    handleGetAllConfirmationUnregisteredByCompetaId,
    isGetConfirmationUnregisteredLoading,
    getConfirmationUnregisteredError,
  };
};
