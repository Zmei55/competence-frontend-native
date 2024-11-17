import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllIndustryQuery, saveIndustryList } from '..';
import { customErrorHandler } from 'shared';

export const useGetIndustries = () => {
	const dispatch = useAppDispatch();
	const [get] = useLazyGetAllIndustryQuery();

	const getIndustries = async () => {
		try {
			const industries = await get().unwrap();
			dispatch(saveIndustryList(industries));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { getIndustries };
};
