import Svg, { Path } from 'react-native-svg';
import { IconSvgProps } from 'shared/types';
import { Colors } from 'shared/theme';

const SaveIcon = ({ fill = Colors.gray }: IconSvgProps) => (
  <Svg fill={fill}>
    <Path d="M19 22a2.997 2.997 0 0 0 3-3V8a.997.997 0 0 0-.293-.707l-5-5A.997.997 0 0 0 16 2H5a2.997 2.997 0 0 0-3 3v14a2.997 2.997 0 0 0 3 3zM8 20v-6h8v6zM6 4v4a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H8V4h7.586L20 8.414V19c0 .276-.111.525-.293.707S19.276 20 19 20h-1v-7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19V5c0-.276.111-.525.293-.707S4.724 4 5 4z" />
  </Svg>
)
export default SaveIcon;