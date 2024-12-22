import { ActivityIndicator, ActivityIndicatorProps } from 'react-native-paper';

import { Colors } from 'shared/theme';

type SpinnerColorType = 'white' | 'primary';
type SpinnerSizeType = 'small' | 'large' | number | undefined;

interface SpinnerProps extends ActivityIndicatorProps {
  color?: SpinnerColorType;
}

const spinnerSize = (size: SpinnerSizeType) => {
  if (size === 'small') return 25;
  if (size === 'large') return 50;
  if (typeof size === 'number') return size;
  return 25;
};

export const Spinner: React.FC<SpinnerProps> = ({
  color = 'primary',
  size = 'small',
  ...rest
}) => {
  return (
    <ActivityIndicator
      animating={true}
      color={Colors[color]}
      {...rest}
      size={spinnerSize(size)}
    />
  );
};
