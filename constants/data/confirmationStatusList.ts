import { ListItemType } from '@/types';
import { CONFIRMED, NOT_CONFIRMED, REJECTED } from '@/constants/Constants';

export const confirmationStatusList: ListItemType[] = [
  { id: 1, name: CONFIRMED },
  { id: 2, name: NOT_CONFIRMED },
  { id: 3, name: REJECTED },
];
