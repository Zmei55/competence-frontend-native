import Svg, { Circle } from 'react-native-svg';
import { IconSvgProps } from 'shared/types';
import { Colors } from 'shared/theme';

const CircleIcon = ({ fill = Colors.gray }: IconSvgProps) => (
  <Svg fill={fill}>
    <Circle cx={14} cy={14} r={4} />
  </Svg>
);
export default CircleIcon;
