import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { IconSvgProps } from 'shared/types';
import { Colors } from 'shared/theme';

const CircleIcon = ({ fill = Colors.gray }: IconSvgProps) => (
  <View style={{ width: 24, height: 24 }}>
    <Svg fill={fill}>
      <Circle cx={14} cy={14} r={4} />
    </Svg>
  </View>
);
export default CircleIcon;
