import { TListItem } from 'shared/types';
import { CONFIRMED, NOT_CONFIRMED, REJECTED } from 'shared/Constants';

export const confirmationStatusList: TListItem[] = [
  { id: 1, name: CONFIRMED },
  { id: 2, name: NOT_CONFIRMED },
  { id: 3, name: REJECTED },
];
