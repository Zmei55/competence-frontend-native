import { View, ViewProps } from 'react-native';

import { useDimensions } from '@/hooks';

export const WidthBox: React.FC<ViewProps> = ({ children, ...rest }) => {
  const { Breakpoints } = useDimensions();

  return (
    <View
      className={
        Breakpoints.md
          ? 'w-[600px] flex-row justify-between items-center'
          : 'w-full flex-col justify-start items-start'
      }
      {...rest}
    >
      {children}
    </View>
  );
};
