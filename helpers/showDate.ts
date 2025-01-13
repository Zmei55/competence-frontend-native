import dayjs, { Dayjs } from 'dayjs';

export const showDate = (date: Dayjs | string | null) => {
  return dayjs(date).format('DD.MM.YYYY');
};

export const showMonthYear = (date: Dayjs | string | null) => {
  return dayjs(date).format('MM.YYYY');
};

export const showTime = (date: Dayjs | string | null) => {
  return dayjs(date).format('HH:mm');
};
