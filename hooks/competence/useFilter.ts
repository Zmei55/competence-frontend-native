import { useState } from 'react';
import { TFilter, THandleFilter, TCompetence } from '@/types/competence';
import {
  DEFAULT_STRING,
  HARDSKILL,
  JOB,
  PRIVATE,
  PUBLIC,
} from '@/constants/Constants';

export const useFilter = (initialCompetas: TCompetence[] | null) => {
  const [filterState, setFilterState] = useState<TFilter>({
    title: ''.trim(),
    type: '',
    industry: '',
    status: '',
  });

  const handleFilter = ({ target: { name, value } }: THandleFilter) => {
    setFilterState(prev => ({ ...prev, [name]: value }));
  };

  let filteredCompetas: TCompetence[] | string | null = initialCompetas;

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
    if (filterState.status === PUBLIC) {
      filteredCompetas = filteredCompetas.filter(c => c.public === true);
    }
    if (filterState.status === PRIVATE) {
      filteredCompetas = filteredCompetas.filter(c => c.public === false);
    }
  }

  const resetFilter = () => {
    setFilterState({
      title: '',
      type: '',
      industry: '',
      status: '',
    });
  };

  return { filterState, filteredCompetas, handleFilter, resetFilter };
};
