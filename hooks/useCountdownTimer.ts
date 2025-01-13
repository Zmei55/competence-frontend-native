import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export const useCountdownTimer = (targetDate: Dayjs) => {
  const countDownDate = dayjs(targetDate);
  const [countDown, setCountDown] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate.diff(dayjs(new Date())));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};
