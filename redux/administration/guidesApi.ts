import { api } from '../app/api';
import {
  TDriverLicence,
  TEducationType,
  TIndustry,
  TJobTitle,
  TLanguage,
  TLanguageLevel,
  TProfession,
  TSkillLevel,
} from '@/types/administration';

const guidesApi = api.injectEndpoints({
  endpoints: builder => ({
    createIndustry: builder.mutation<TIndustry, string>({
      query: name => ({
        url: '/industry',
        method: 'POST',
        body: {
          name,
        },
      }),
      invalidatesTags: ['industries'],
      transformResponse: (response: TIndustry) => response,
    }),
    createJobTitle: builder.mutation<TJobTitle, string>({
      query: name => ({
        url: '/job-title',
        method: 'POST',
        body: {
          name,
        },
      }),
      invalidatesTags: ['jobTitles'],
      transformResponse: (response: TJobTitle) => response,
    }),
    createProfession: builder.mutation<TProfession, string>({
      query: name => ({
        url: '/profession',
        method: 'POST',
        body: {
          name,
        },
      }),
      invalidatesTags: ['professions'],
      transformResponse: (response: TProfession) => response,
    }),
    updateIndustryById: builder.mutation<
      TIndustry,
      { id: number | string; name: string }
    >({
      query: ({ id, name }) => ({
        url: `/industry/${id}`,
        method: 'PUT',
        body: {
          name,
        },
      }),
      invalidatesTags: ['industries'],
      transformResponse: (response: TIndustry) => response,
    }),
    updateJobTitleById: builder.mutation<
      TJobTitle,
      { id: number | string; name: string }
    >({
      query: ({ id, name }) => ({
        url: `/job-title/${id}`,
        method: 'PUT',
        body: {
          name,
        },
      }),
      invalidatesTags: ['jobTitles'],
      transformResponse: (response: TJobTitle) => response,
    }),
    updateProfessionById: builder.mutation<
      TProfession,
      { id: number | string; name: string }
    >({
      query: ({ id, name }) => ({
        url: `/profession/${id}`,
        method: 'PUT',
        body: {
          name,
        },
      }),
      invalidatesTags: ['professions'],
      transformResponse: (response: TProfession) => response,
    }),
    getAllDriverLicence: builder.query<TDriverLicence[], void>({
      query: () => ({
        url: '/driver-licences',
        method: 'GET',
      }),
      providesTags: ['driverLicence'],
      transformResponse: (response: TDriverLicence[]) => response,
    }),
    getAllEducationType: builder.query<TEducationType[], void>({
      query: () => ({
        url: '/education-types',
        method: 'GET',
      }),
      providesTags: ['educationType'],
      transformResponse: (response: TEducationType[]) => response,
    }),
    getAllIndustry: builder.query<TIndustry[], void>({
      query: () => ({
        url: '/industry/all',
        method: 'GET',
      }),
      providesTags: ['industries'],
      transformResponse: (response: TIndustry[]) => response,
    }),
    getAllJobTitle: builder.query<TJobTitle[], void>({
      query: () => ({
        url: '/job-title/all',
        method: 'GET',
      }),
      providesTags: ['jobTitles'],
      transformResponse: (response: TJobTitle[]) => response,
    }),
    getAllLanguage: builder.query<TLanguage[], void>({
      query: () => ({
        url: '/languages',
        method: 'GET',
      }),
      providesTags: ['language'],
      transformResponse: (response: TLanguage[]) => response,
    }),
    getAllLanguageLevel: builder.query<TLanguageLevel[], void>({
      query: () => ({
        url: '/language-levels',
        method: 'GET',
      }),
      providesTags: ['language'],
      transformResponse: (response: TLanguageLevel[]) => response,
    }),
    getAllProfession: builder.query<TProfession[], void>({
      query: () => ({
        url: '/profession/all',
        method: 'GET',
      }),
      providesTags: ['professions'],
      transformResponse: (response: TProfession[]) => response,
    }),
    getAllSkillLevel: builder.query<TSkillLevel[], void>({
      query: () => ({
        url: '/skill-levels',
        method: 'GET',
      }),
      providesTags: ['skillLevel'],
      transformResponse: (response: TSkillLevel[]) => response,
    }),
  }),
});

export const {
  useLazyGetAllDriverLicenceQuery,
  useLazyGetAllEducationTypeQuery,
  useCreateIndustryMutation,
  useUpdateIndustryByIdMutation,
  useLazyGetAllIndustryQuery,
  useCreateJobTitleMutation,
  useUpdateJobTitleByIdMutation,
  useLazyGetAllJobTitleQuery,
  useLazyGetAllLanguageQuery,
  useLazyGetAllLanguageLevelQuery,
  useCreateProfessionMutation,
  useUpdateProfessionByIdMutation,
  useLazyGetAllProfessionQuery,
  useLazyGetAllSkillLevelQuery,
} = guidesApi;
