import {
  DEFAULT_STRING,
  CONFIRMED,
  NOT_CONFIRMED,
  REJECTED,
  ASCENDING,
  DESCENDING,
} from 'shared/Constants';

export type TConfirmationFilter = {
  statusConfirmation:
    | typeof DEFAULT_STRING
    | typeof CONFIRMED
    | typeof NOT_CONFIRMED
    | typeof REJECTED;
  sortByDate: typeof DEFAULT_STRING | typeof ASCENDING | typeof DESCENDING;
};

export type THandleFilter = {
  target: {
    name: string;
    value: unknown;
  };
};
