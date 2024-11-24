import { Text as TextNative, TextProps as TextPropsNative } from 'react-native';
import { Colors } from 'shared/theme';

enum TextSize {
  title = 40,
  subtitle = 30,
  body = 20,
  bodySmall = 10,
}

type CustomTextProps = Omit<TextPropsNative, 'children'> & {
  color?: 'text' | 'white' | 'error';
  variant?: 'title' | 'subtitle' | 'body' | 'bodySmall';
  children: string;
};

export const Text: React.FC<CustomTextProps> = ({
  variant = 'body',
  color = 'text',
  children,
  ...rest
}) => {
  return (
    <TextNative
      style={{
        fontSize: TextSize[variant],
        color: Colors[color],
      }}
      {...rest}
    >
      {children}
    </TextNative>
  );
};
