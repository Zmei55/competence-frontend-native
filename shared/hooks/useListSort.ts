import { useState, useEffect } from 'react';
import { TListItem } from 'shared';

export const useListSort = (initList: TListItem[] | null) => {
	const [sortedData, setSortedData] = useState<TListItem[] | null>(null);
	useEffect(() => {
		setSortedData(initList);
	}, [initList]);

	const handleSortByName = () => {
		setSortedData((currentData) => {
			if (currentData === null) return null;
			// eslint-disable-next-line
      // @ts-ignore
			return [...currentData].sort((a, b) => a.name.localeCompare(b.name));
		});
	};

	const handleSortById = () => {
		setSortedData((currentData) => {
			if (currentData === null) return null;
			return [...currentData].sort((a, b) => +a.id - +b.id);
		});
	};

	return { sortedData, handleSortById, handleSortByName };
};
