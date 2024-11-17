import dayjs, { Dayjs } from 'dayjs';

export const monthDiff = (d1: Dayjs, d2: Dayjs): number => {
	if (dayjs(d2) > dayjs(d1)) return dayjs(d2).diff(d1, 'months');
	if (dayjs(d1) > dayjs(d2)) return dayjs(d1).diff(d2, 'months');
	return 0;
};
