import Svg, { Path } from 'react-native-svg';
import { IconSvgProps } from 'shared/types';
import { Colors } from 'shared/theme';

const EyeOpeningIcon = ({ fill = Colors.gray }: IconSvgProps) => (
  <Svg fill={fill}>
    <Path d="M.106 11.553a.997.997 0 0 0 0 .894s.396.789 1.12 1.843a20.553 20.553 0 0 0 1.757 2.218c.894.979 2.004 1.987 3.319 2.8C7.897 20.294 9.808 21 12 21s4.103-.706 5.698-1.692c1.315-.813 2.425-1.821 3.319-2.8a20.678 20.678 0 0 0 1.757-2.218 17.468 17.468 0 0 0 1.12-1.843.997.997 0 0 0 0-.894s-.396-.789-1.12-1.843a20.553 20.553 0 0 0-1.757-2.218c-.894-.979-2.004-1.987-3.319-2.8C16.103 3.706 14.192 3 12 3s-4.103.706-5.698 1.692c-1.315.813-2.425 1.821-3.319 2.8A20.455 20.455 0 0 0 1.226 9.71a17.468 17.468 0 0 0-1.12 1.843zM2.14 12a18.575 18.575 0 0 1 2.319-3.159c.805-.881 1.775-1.756 2.894-2.448C8.703 5.559 10.254 5 12 5s3.297.559 4.646 1.393c1.119.692 2.089 1.567 2.894 2.448A18.701 18.701 0 0 1 21.859 12a18.575 18.575 0 0 1-2.319 3.159c-.805.881-1.775 1.756-2.894 2.448C15.297 18.441 13.746 19 12 19s-3.297-.559-4.646-1.393c-1.119-.692-2.089-1.567-2.894-2.448A18.701 18.701 0 0 1 2.14 12zM16 12c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 16 12zm-2 0c0 .553-.223 1.051-.586 1.414S12.553 14 12 14s-1.051-.223-1.414-.586S10 12.553 10 12s.223-1.051.586-1.414S11.447 10 12 10s1.051.223 1.414.586S14 11.447 14 12z" />
  </Svg>
);
export default EyeOpeningIcon;
