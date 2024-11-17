import { useState, useEffect } from 'react';
import { TListUsersItem } from 'shared';

export const useListUsersSort = (initList: TListUsersItem[] | null) => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [sortedData, setSortedData] = useState<TListUsersItem[] | null>(null);
	const [sortDirection, setSortDirection] = useState({
		email: 'asc',
		nickName: 'asc',
		id: 'asc',
	});

	useEffect(() => {
		if (initList) {
			const filteredData = initList.filter(
				(item) =>
					item.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.nickName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.id.toString().includes(searchQuery) ||
					item.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.lastName?.toLowerCase()?.includes(searchQuery.toLowerCase())
			);
			setSortedData(filteredData);
		} else {
			setSortedData(null);
		}
	}, [initList, searchQuery]);

	const handleSortByEmail = () => {
		setSortedData((currentData) => {
			if (currentData === null) return null;
			const direction = sortDirection.email === 'asc' ? 'desc' : 'asc';
			setSortDirection((prevState) => ({
				...prevState,
				email: direction,
			}));
			return [...currentData].sort((a, b) => {
				const emailA = a.email || '';
				const emailB = b.email || '';
				const comparison = emailA.localeCompare(emailB);
				return direction === 'asc' ? comparison : -comparison;
			});
		});
	};

	const handleSortByNickName = () => {
		setSortedData((currentData) => {
			if (currentData === null) return null;
			const direction = sortDirection.nickName === 'asc' ? 'desc' : 'asc';
			setSortDirection((prevState) => ({
				...prevState,
				nickName: direction,
			}));
			return [...currentData].sort((a, b) => {
				const nickNameA = a.nickName || '';
				const nickNameB = b.nickName || '';
				const comparison = nickNameA.localeCompare(nickNameB);
				return direction === 'asc' ? comparison : -comparison;
			});
		});
	};

	const handleSortById = () => {
		setSortedData((currentData) => {
			if (currentData === null) return null;
			const direction = sortDirection.id === 'asc' ? 'desc' : 'asc';
			setSortDirection((prevState) => ({
				...prevState,
				id: direction,
			}));
			return [...currentData].sort((a, b) => {
				const comparison = +a.id - +b.id;
				return direction === 'asc' ? comparison : -comparison;
			});
		});
	};

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	return {
		sortedData,
		handleSortById,
		handleSortByEmail,
		handleSortByNickName,
		handleSearch,
	};
};
