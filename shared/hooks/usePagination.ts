import { ChangeEvent, MouseEvent, useState } from 'react';

export const usePagination = (initialPage: number, initialRowsPerPage: number) => {
	const [page, setPage] = useState<number>(initialPage);
	const [rowsPerPage, setRowsPerPage] = useState<number>(initialRowsPerPage);

	const handleChangePage = (
		event: MouseEvent<HTMLButtonElement> | ChangeEvent<unknown> | null,
		newPage: number
	): void => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setRowsPerPage(parseInt(event.target.value));
		setPage(0);
	};

	return {
		page,
		setPage,
		rowsPerPage,
		setRowsPerPage,
		handleChangePage,
		handleChangeRowsPerPage,
	};
};
