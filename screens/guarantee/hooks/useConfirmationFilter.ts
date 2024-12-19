import { useState } from 'react';
import {
  TCompetaConfirmationRegistered,
  TConfirmationFilter,
  THandleFilter,
} from '..';
import {
  CONFIRMED,
  DEFAULT_STRING,
  NOT_CONFIRMED,
  REJECTED,
} from 'shared/Constants';

export const useConfirmationFilter = (
  initialList: TCompetaConfirmationRegistered[] | null
) => {
  const [confirmationFilterState, setConfirmationFilterState] =
    useState<TConfirmationFilter>({
      statusConfirmation: DEFAULT_STRING,
      sortByDate: DEFAULT_STRING,
    });
  const handleConfirmationFilter = ({
    target: { name, value },
  }: THandleFilter) => {
    setConfirmationFilterState(prev => ({ ...prev, [name]: value }));
  };
  const resetConfirmationFilter = () => {
    setConfirmationFilterState({
      statusConfirmation: DEFAULT_STRING,
      sortByDate: DEFAULT_STRING,
    });
  };

  let filteredConfirmations: TCompetaConfirmationRegistered[] | null =
    initialList;

  if (
    filteredConfirmations !== null &&
    confirmationFilterState.statusConfirmation === DEFAULT_STRING
  ) {
    filteredConfirmations = initialList;
  }

  if (
    filteredConfirmations !== null &&
    confirmationFilterState.statusConfirmation === CONFIRMED
  ) {
    filteredConfirmations = filteredConfirmations.filter(
      c => c.statusCompetaConfirmation === CONFIRMED
    );
  }

  if (
    filteredConfirmations !== null &&
    confirmationFilterState.statusConfirmation === NOT_CONFIRMED
  ) {
    filteredConfirmations = filteredConfirmations.filter(
      c => c.statusCompetaConfirmation === NOT_CONFIRMED
    );
  }

  if (
    filteredConfirmations !== null &&
    confirmationFilterState.statusConfirmation === REJECTED
  ) {
    filteredConfirmations = filteredConfirmations.filter(
      c => c.statusCompetaConfirmation === REJECTED
    );
  }

  if (
    filteredConfirmations !== null &&
    confirmationFilterState.sortByDate === DEFAULT_STRING
  ) {
    if (confirmationFilterState.statusConfirmation === DEFAULT_STRING) {
      filteredConfirmations = initialList;
    } else {
      filteredConfirmations = filteredConfirmations.filter(
        c =>
          c.statusCompetaConfirmation ===
          confirmationFilterState.statusConfirmation
      );
    }
  }

  // if (filteredConfirmations !== null && confirmationFilterState.sortByDate === ASCENDING) {
  // 	console.log('sort: ', ASCENDING);
  // 	filteredConfirmations = filteredConfirmations.sort((a, b) =>
  // 		a.timeStart.localeCompare(b.timeStart)
  // 	);
  // 	console.log(filteredConfirmations);
  // }

  // if (filteredConfirmations !== null && confirmationFilterState.sortByDate === DESCENDING) {
  // 	console.log('sort: ', DESCENDING);
  // 	filteredConfirmations = filteredConfirmations.sort((a, b) =>
  // 		b.timeStart.localeCompare(a.timeStart)
  // 	);
  // 	console.log(filteredConfirmations);
  // }

  return {
    confirmationFilterState,
    filteredConfirmations,
    handleConfirmationFilter,
    resetConfirmationFilter,
  };
};
