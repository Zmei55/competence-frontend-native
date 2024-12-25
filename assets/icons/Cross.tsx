import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { IconSvgProps } from 'shared/types';
import { Colors } from 'shared/theme';

const CrossIcon = ({ fill = Colors.gray }: IconSvgProps) => (
  <View style={{ width: 24, height: 24 }}>
    <Svg fill={fill}>
      <Path d="M5.293 6.707 10.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414L12 13.414l5.293 5.293a.999.999 0 1 0 1.414-1.414L13.414 12l5.293-5.293a.999.999 0 1 0-1.414-1.414L12 10.586 6.707 5.293a.999.999 0 1 0-1.414 1.414z" />
    </Svg>
  </View>
);
export default CrossIcon;
