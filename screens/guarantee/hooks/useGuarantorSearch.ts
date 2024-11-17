import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useGetAllGuarantorByFilterMutation, TGuarantor, TGuarantorFilter } from '..';
import { saveCompetaError, resetCompetaError } from 'src/features/competence';
import { customErrorHandler } from 'shared';

export const useGuarantorSearch = () => {
	const dispatch = useDispatch();
	const [getAllGuarantor, { isLoading: isGuarantorListLoading }] =
		useGetAllGuarantorByFilterMutation();
	const [guarantorList, setGuarantorList] = useState<TGuarantor[] | null>(null);

	const handleGetGuarantorList = async (values: TGuarantorFilter) => {
		const filter = values.filter === '' ? null : values.filter;
		const statusInSchool = values.statusInSchool === '' ? null : values.statusInSchool;

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
