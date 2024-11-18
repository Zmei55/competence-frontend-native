import { Text as TextNative, TextProps as TextPropsNative } from 'react-native';
import { Colors } from 'shared/theme';

type TextProps = TextPropsNative & {
  color?: 'text' | 'white';
  children: string;
};

type TitleTextProps = TextProps & {
  title?: boolean;
  subtitle?: never;
};

type SubtitleTextProps = TextProps & {
  subtitle?: boolean;
  title?: never;
};

type CustomTextProps = TitleTextProps | SubtitleTextProps;

export const Text: React.FC<CustomTextProps> = ({ title = false, subtitle = false, color = 'text', children, ...rest }) => {
  return (
    <TextNative style={{
      fontSize: title ? 40 : subtitle ? 30 : 20,
      color: Colors[color],
    }}
      {...rest}
    >{children}</TextNative>
  )
}
