import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconSvgProps, Colors } from 'shared';

const MenuIcon = ({ size, fill = Colors.default }: IconSvgProps) => (
  <Svg width={size} height={size} fill={fill}>
    <Path d="M3 13h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0-6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0 12h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z" />
  </Svg>
)
export default MenuIcon;
