import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllSkillLevelQuery, saveSkillLevels } from '..';
import { customErrorHandler } from 'shared';

export const useGetSkillLevels = () => {
	const dispatch = useAppDispatch();
	const [get] = useLazyGetAllSkillLevelQuery();

	const getSkillLevels = async () => {
		try {
			const skillLevels = await get().unwrap();
			dispatch(saveSkillLevels(skillLevels));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { getSkillLevels };
};
