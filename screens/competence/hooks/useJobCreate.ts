import { useAppSelector, useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useCreateJobCompetaMutation } from 'redux/competence/jobApi';
import { useCompetaModalUpdate, useGetAllCompetasByUserId, TNewJob } from '..';
import { currentUserIdSelector } from 'redux/auth';
import { customErrorHandler } from 'shared/helpers';

export const useJobCreate = () => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(currentUserIdSelector);
  const { handleGetAllCompetas, isCompetencesLoading } =
    useGetAllCompetasByUserId();
  const { handleCompetaModalUpdate } = useCompetaModalUpdate();
  const [createJob, { isLoading, isError: isJobCompetaError }] =
    useCreateJobCompetaMutation();

  const isJobCompetaLoading = isLoading || isCompetencesLoading;

  const handleJobCreate = async (data: TNewJob) => {
    const newJob = {
      competaType: data.competaType,
      title: data.title ? data.title.trim() : null,
      description: data.description ? data.description.trim() : null,
      public: data.isPublic,
      includedInCV: data.isIncludedInCV,
      skillLevelId: data.skillLevelId ? data.skillLevelId : null,
      companyName: data.companyName ? data.companyName.trim() : null,
      jobStartDate: data.jobStartDate ? data.jobStartDate : null,
      jobEndDate: data.jobEndDate ? data.jobEndDate : null,
      currentJob: data.currentJob,
      jobTitleId: data.jobTitleId ? data.jobTitleId : null,
      industryId: data.industryId ? data.industryId : null,
      resultUrl: data.resultUrl ? data.resultUrl.trim() : null,
      achievements: data.achievements ? data.achievements.trim() : null,
    };

    const formData = new FormData();
    formData.append(
      'data',
      new Blob([JSON.stringify(newJob)], { type: 'application/json' })
    );
    if (data.competaImage) formData.append('file', data.competaImage[0]);

    try {
      await createJob(formData).unwrap();
      if (currentUserId) handleGetAllCompetas(currentUserId);
      handleCompetaModalUpdate();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleJobCreate, isJobCompetaLoading, isJobCompetaError };
};
