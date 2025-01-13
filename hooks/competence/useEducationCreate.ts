import { saveSnackbarError } from '@/redux/app';
import { useCreateEducationCompetaMutation } from '@/redux/competence/educationsApi';
import { currentUserIdSelector } from '@/redux/auth';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { useCompetaModalUpdate } from '@/hooks/competence/useCompetaModalUpdate';
import { useGetAllCompetasByUserId } from '@/hooks/competence/useGetAllCompetasByUserId';
import { TNewEducation } from '@/types/competence';
import { customErrorHandler } from '@/helpers';

export const useEducationCreate = () => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(currentUserIdSelector);
  const { handleGetAllCompetas, isCompetencesLoading } =
    useGetAllCompetasByUserId();
  const { handleCompetaModalUpdate } = useCompetaModalUpdate();
  const [createEducation, { isLoading, isError: isEducationCompetaError }] =
    useCreateEducationCompetaMutation();

  const isEducationCompetaLoading = isLoading || isCompetencesLoading;

  const handleEducationCreate = async (data: TNewEducation) => {
    const newEducation = {
      competaType: data.competaType,
      title: data.title ? data.title.trim() : null,
      description: data.description ? data.description.trim() : null,
      competenceDate: data.competenceDate ? data.competenceDate : null,
      public: data.isPublic,
      includedInCV: data.isIncludedInCV,
      name: data.name ? data.name.trim() : null,
      educationTypeId: data.educationTypeId ? data.educationTypeId : null,
      professionId: data.professionId ? data.professionId : null,
      resultUrl: data.resultUrl ? data.resultUrl.trim() : null,
    };

    const formData = new FormData();
    formData.append(
      'data',
      new Blob([JSON.stringify(newEducation)], { type: 'application/json' })
    );
    if (data.competaImage) formData.append('file', data.competaImage[0]);

    try {
      await createEducation(formData).unwrap();
      if (currentUserId) handleGetAllCompetas(currentUserId);
      handleCompetaModalUpdate();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return {
    handleEducationCreate,
    isEducationCompetaLoading,
    isEducationCompetaError,
  };
};
