import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconSvgProps, Colors } from 'shared';

const CrossIcon = ({ size, fill = Colors.default }: IconSvgProps) => (
  <Svg width={size} height={size} fill={fill}>
    <Path d="M5.293 6.707 10.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414L12 13.414l5.293 5.293a.999.999 0 1 0 1.414-1.414L13.414 12l5.293-5.293a.999.999 0 1 0-1.414-1.414L12 10.586 6.707 5.293a.999.999 0 1 0-1.414 1.414z" />
  </Svg>
)
export default CrossIcon;
