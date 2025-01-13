import { Text as TextNative, TextProps as TextPropsNative } from 'react-native';
import { Colors } from '@/constants/Colors';

enum TextSize {
  title = 36,
  subtitle = 30,
  bodyLarge = 24,
  body = 20,
  bodySmall = 16,
}

type CustomTextProps = TextPropsNative & {
  color?: 'text' | 'white' | 'error' | 'primary';
  variant?: 'title' | 'subtitle' | 'bodyLarge' | 'body' | 'bodySmall';
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
      className="text-x"
      style={[
        {
          fontSize: TextSize[variant],
        },
        color === 'text' && { color: Colors.text },
        color === 'white' && { color: Colors.white },
        color === 'error' && { color: Colors.error },
        color === 'primary' && { color: Colors.primary.default },
        bold && { fontWeight: 'bold' },
        italic && { fontStyle: 'italic' },
        style,
      ]}
      {...rest}
    >
      {children}
    </TextNative>
  );
};
