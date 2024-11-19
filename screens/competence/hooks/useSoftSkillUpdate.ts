import { useAppSelector, useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useUpdateSoftSkillCompetaMutation } from 'redux/competence/softSkillsApi';
import {
  useCompetaModalUpdate,
  useGetAllCompetasByUserId,
  TNewSoftSkill,
} from '..';
import { currentUserIdSelector } from 'redux/auth';
import { customErrorHandler } from 'shared/helpers';

export const useSoftSkillUpdate = () => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(currentUserIdSelector);
  const { handleGetAllCompetas, isCompetencesLoading } =
    useGetAllCompetasByUserId();
  const [updateCompetence, { isLoading }] = useUpdateSoftSkillCompetaMutation();
  const { handleCompetaModalUpdate } = useCompetaModalUpdate();

  const isUpdatingCompetaLoading = isLoading || isCompetencesLoading;

  const handleSoftSkillUpdate = async (
    competaId: number,
    data: TNewSoftSkill
  ) => {
    const newSoftSkill = {
      competaType: data.competaType,
      title: data.title ? data.title.trim() : null,
      description: data.description ? data.description.trim() : null,
      competenceDate: data.competenceDate ? data.competenceDate : null,
      public: data.isPublic,
      includedInCV: data.isIncludedInCV,
    };

    const formData = new FormData();
    formData.append(
      'data',
      new Blob([JSON.stringify(newSoftSkill)], { type: 'application/json' })
    );
    if (data.competaImage) formData.append('file', data.competaImage[0]);

    try {
      await updateCompetence({ competaId, formData }).unwrap();
      if (currentUserId) handleGetAllCompetas(currentUserId);
      handleCompetaModalUpdate();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleSoftSkillUpdate, isUpdatingCompetaLoading };
};
