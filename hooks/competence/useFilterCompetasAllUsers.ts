import { useState } from 'react';
import {
  TCompetenceFeed,
  TFilterCompetasAllUsers,
  THandleCompetasAllUsersFilter,
} from '@/types/competence';
import { DEFAULT_STRING, HARDSKILL, JOB } from '@/constants/Constants';

export const useFilterCompetasAllUsers = (
  initialCompetas: TCompetenceFeed[] | null
) => {
  const [filterState, setFilterState] = useState<TFilterCompetasAllUsers>({
    title: ''.trim(),
    type: '',
    industry: '',
    author: '',
  });

  const handleFilterCompetasAllUsers = ({
    target: { name, value },
  }: THandleCompetasAllUsersFilter) => {
    setFilterState(prev => ({ ...prev, [name]: value }));
  };

  let filteredCompetas: TCompetenceFeed[] | string | null = initialCompetas;

  if (filteredCompetas && typeof filteredCompetas !== 'string') {
    if (filterState.title !== DEFAULT_STRING) {
      filteredCompetas = filteredCompetas.filter(c =>
        c.title?.toLowerCase().includes(filterState.title.toLowerCase())
      );
    }
    if (filterState.type === HARDSKILL) {
      filteredCompetas = filteredCompetas.filter(
        c => c.competaType.slice(0, 10) === HARDSKILL
      );
    }
    if (filterState.type !== DEFAULT_STRING && filterState.type !== HARDSKILL) {
      filteredCompetas = filteredCompetas.filter(
        c => c.competaType === filterState.type
      );
    }
    if (filterState.industry !== DEFAULT_STRING) {
      filteredCompetas = filteredCompetas
        .filter(c => c.competaType === JOB)
        .filter(c =>
          c.jobSkill ? c.jobSkill.industryId === filterState.industry : null
        );
    }
    if (filterState.author !== DEFAULT_STRING) {
      const [authorFirstName, authorLastName] = filterState.author
        .toLowerCase()
        .split(' ');
      filteredCompetas = filteredCompetas.filter(
        c =>
          c.authorFirstName.toLowerCase().includes(authorFirstName) &&
          c.authorLastName.toLowerCase().includes(authorLastName)
      );
    }
  }

  const resetFilter = () => {
    setFilterState({
      title: '',
      type: '',
      industry: '',
      author: '',
    });
  };

  return {
    filterState,
    filteredCompetas,
    handleFilterCompetasAllUsers,
    resetFilter,
  };
};
