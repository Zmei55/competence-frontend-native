import { ListItemType } from '@/types';
import { DEFAULT_STRING } from '@/constants/Constants';

export const adaptationOfList = (list: ListItemType[]) => {
  const newList: { value: string; label: string }[] = list.map(c => ({
    value: c.id.toString(),
    label: c.name ? c.name : c.description ? c.description : DEFAULT_STRING,
  }));
  return newList;
};
