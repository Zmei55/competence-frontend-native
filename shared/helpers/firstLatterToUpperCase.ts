export const firstLatterToUpperCase = (string: string | null) => {
	if (string === null) return null;
	return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
};
