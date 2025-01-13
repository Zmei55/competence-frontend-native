import { useState, useEffect } from 'react';
import { ListItemType } from '@/types';

export const useListSort = (initList: ListItemType[] | null) => {
  const [sortedData, setSortedData] = useState<ListItemType[] | null>(null);
  useEffect(() => {
    setSortedData(initList);
  }, [initList]);

  const handleSortByName = () => {
    setSortedData(currentData => {
      if (currentData === null) return null;
      // eslint-disable-next-line
      // @ts-ignore
      return [...currentData].sort((a, b) => a.name.localeCompare(b.name));
    });
  };

  const handleSortById = () => {
    setSortedData(currentData => {
      if (currentData === null) return null;
      return [...currentData].sort((a, b) => +a.id - +b.id);
    });
  };

  return { sortedData, handleSortById, handleSortByName };
};
