import Svg, { Path } from 'react-native-svg';
import { IconSvgProps } from 'shared/types';
import { Colors } from 'shared/theme';

const PlusCircle = ({ fill = Colors.gray }: IconSvgProps) => (
  <Svg fill={fill}>
    <Path d="M23 12c0-3.037-1.232-5.789-3.222-7.778S15.037 1 12 1 6.211 2.232 4.222 4.222 1 8.963 1 12s1.232 5.789 3.222 7.778S8.963 23 12 23s5.789-1.232 7.778-3.222S23 15.037 23 12zm-2 0c0 2.486-1.006 4.734-2.636 6.364S14.486 21 12 21s-4.734-1.006-6.364-2.636S3 14.486 3 12s1.006-4.734 2.636-6.364S9.514 3 12 3s4.734 1.006 6.364 2.636S21 9.514 21 12zM8 13h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2z" />
  </Svg>
);
export default PlusCircle;
