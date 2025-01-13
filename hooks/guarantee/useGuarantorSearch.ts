import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useGetAllGuarantorByFilterMutation } from '@/redux/guarantee/guaranteeApi';
import { TGuarantor, TGuarantorFilter } from '@/types/guarantee';
import { saveCompetaError, resetCompetaError } from '@/redux/competence';
import { customErrorHandler } from '@/helpers';

export const useGuarantorSearch = () => {
  const dispatch = useDispatch();
  const [getAllGuarantor, { isLoading: isGuarantorListLoading }] =
    useGetAllGuarantorByFilterMutation();
  const [guarantorList, setGuarantorList] = useState<TGuarantor[] | null>(null);

  const handleGetGuarantorList = async (values: TGuarantorFilter) => {
    const filter = values.filter === '' ? null : values.filter;
    const statusInSchool =
      values.statusInSchool === '' ? null : values.statusInSchool;

    try {
      const gettingGuarantors = await getAllGuarantor({
        filter,
        statusInSchool,
      }).unwrap();
      dispatch(resetCompetaError());
      setGuarantorList(gettingGuarantors);
    } catch (error) {
      dispatch(saveCompetaError(customErrorHandler(error)));
    }
  };

  return { guarantorList, handleGetGuarantorList, isGuarantorListLoading };
};
