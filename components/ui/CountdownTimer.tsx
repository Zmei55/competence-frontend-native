import { useTranslation } from 'react-i18next';
import { Dayjs } from 'dayjs';

import { useCountdownTimer } from '@/hooks';
import { Text } from '@/components/ui/Text';
import { Colors } from '@/constants/Colors';

interface CountdownTimerProps {
  targetDate: Dayjs;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
}) => {
  const [days, hours, minutes, seconds] = useCountdownTimer(targetDate);
  const { t } = useTranslation(['shared']);

  if (days + hours + minutes + seconds <= 0) {
    return <Text color="error">{`${t('expired')}!!!`}</Text>;
  } else {
    return (
      <Text
        style={[
          days <= 1 && days > 0 && { color: Colors.orange.default },
          days < 1 && { color: Colors.error },
        ]}
      >{`${days} Days  ${hours} Hours  ${minutes} Mins  ${seconds} Seconds`}</Text>
    );
  }
};
