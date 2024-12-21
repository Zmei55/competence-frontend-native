import { Text as TextNative, TextProps as TextPropsNative } from 'react-native';
import { Colors } from 'shared/theme';

enum TextSize {
  title = 40,
  subtitle = 30,
  body = 20,
  bodySmall = 10,
}

type CustomTextProps = TextPropsNative & {
  color?: 'text' | 'white' | 'error';
  variant?: 'title' | 'subtitle' | 'body' | 'bodySmall';
  bold?: boolean;
  italic?: boolean;
};

export const Text: React.FC<CustomTextProps> = ({
  variant = 'body',
  color = 'text',
  bold = false,
  italic = false,
  style,
  children,
  ...rest
}) => {
  return (
    <TextNative
      style={[
        {
          fontSize: TextSize[variant],
          fontWeight: bold ? 'bold' : 'normal',
          fontStyle: italic ? 'italic' : 'normal',
          color: Colors[color],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </TextNative>
  );
};
