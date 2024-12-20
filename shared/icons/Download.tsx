import Svg, { Path } from 'react-native-svg';
import { IconSvgProps } from 'shared/types';
import { Colors } from 'shared/theme';

const DownloadIcon = ({ fill = Colors.gray }: IconSvgProps) => (
  <Svg fill={fill}>
    <Path d="M20 15v4c0 .276-.111.525-.293.707S19.276 20 19 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19v-4a1 1 0 0 0-2 0v4a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3v-4a1 1 0 0 0-2 0zm-7-2.414V3a1 1 0 0 0-2 0v9.586L7.707 9.293a.999.999 0 1 0-1.414 1.414l5 5A1.008 1.008 0 0 0 12 16a.997.997 0 0 0 .707-.293l5-5a.999.999 0 1 0-1.414-1.414z" />
  </Svg>
);
export default DownloadIcon;
