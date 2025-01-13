import { View } from 'react-native';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native-paper';

import { Colors } from '@/constants/Colors';

type SpinnerColorType = 'white' | 'primary';
type SpinnerSizeType = 'small' | 'large' | number | undefined;

interface SpinnerProps extends ActivityIndicatorProps {
  color?: SpinnerColorType;
  height?: number;
}

const spinnerSize = (size: SpinnerSizeType) => {
  if (size === 'small') return 25;
  if (size === 'large') return 50;
  if (typeof size === 'number') return size;
  return 25;
};

export const Spinner: React.FC<SpinnerProps> = ({
  color = 'white',
  size = 'small',
  height,
  ...rest
}) => {
  return (
    <View
      className={`justify-center items-center h-[${height ? height : spinnerSize(size)}]`}
    >
      <ActivityIndicator
        animating={true}
        color={color === 'primary' ? Colors.primary.default : Colors.white}
        size={spinnerSize(size)}
        {...rest}
      />
    </View>
  );
};
