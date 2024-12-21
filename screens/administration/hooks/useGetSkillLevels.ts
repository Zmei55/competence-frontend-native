import { saveSnackbarError } from 'redux/app';
import { useLazyGetAllSkillLevelQuery } from 'redux/administration/guidesApi';
import { saveSkillLevels } from 'redux/administration';
import { useAppDispatch } from 'screens/app';
import { customErrorHandler } from 'shared/helpers';

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
