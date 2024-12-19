import Svg, { Path } from 'react-native-svg';
import { IconSvgProps } from 'shared/types';
import { Colors } from 'shared/theme';

const TrashIcon = ({ fill = Colors.gray }: IconSvgProps) => (
  <Svg fill={fill}>
    <Path d="M18 7v13c0 .276-.111.525-.293.707S17.276 21 17 21H7c-.276 0-.525-.111-.707-.293S6 20.276 6 20V7zm-1-2V4a2.997 2.997 0 0 0-3-3h-4a2.997 2.997 0 0 0-3 3v1H3a1 1 0 0 0 0 2h1v13a2.997 2.997 0 0 0 3 3h10a2.997 2.997 0 0 0 3-3V7h1a1 1 0 0 0 0-2zM9 5V4c0-.276.111-.525.293-.707S9.724 3 10 3h4c.276 0 .525.111.707.293S15 3.724 15 4v1zm0 6v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0z" />
  </Svg>
);
export default TrashIcon;
