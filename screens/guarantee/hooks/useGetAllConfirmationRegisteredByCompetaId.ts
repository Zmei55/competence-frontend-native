import { useState } from 'react';
import { useLazyGetAllConfirmationRegisteredGuarantorByCompetaIdQuery } from 'redux/guarantee/guaranteeApi';
import { TCompetaConfirmationRegistered } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useGetAllConfirmationRegisteredByCompetaId = () => {
  const [getConfirmation, { isLoading: isGetConfirmationRegisteredLoading }] =
    useLazyGetAllConfirmationRegisteredGuarantorByCompetaIdQuery();
  const [confirmationRegisteredList, setConfirmationRegisteredList] = useState<
    TCompetaConfirmationRegistered[] | null
  >(null);
  const [getConfirmationRegisteredError, setGetConfirmationRegisteredError] =
    useState<string | null>(null);

  const handleGetAllConfirmationRegisteredByCompetaId = async (
    competaId: number
  ) => {
    try {
      const gettingConfirmation = await getConfirmation(competaId).unwrap();
      setConfirmationRegisteredList(gettingConfirmation);
    } catch (error) {
      setGetConfirmationRegisteredError(customErrorHandler(error));
    }
  };

  return {
    confirmationRegisteredList,
    handleGetAllConfirmationRegisteredByCompetaId,
    isGetConfirmationRegisteredLoading,
    getConfirmationRegisteredError,
  };
};
