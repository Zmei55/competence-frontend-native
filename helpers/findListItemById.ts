import { ListItemType } from '@/types';

export const findListItemById = (list: ListItemType[], id: number) => {
  return list.find(i => i.id === id);
};
