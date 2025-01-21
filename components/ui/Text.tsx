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
  className?: string;
};

export const Text: React.FC<CustomTextProps> = ({
  variant = 'body',
  color = 'text',
  bold = false,
  italic = false,
  style,
  children,
  className,
  ...rest
}) => {
  return (
    <TextNative
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
      className={`text-x ${className}`}
      {...rest}
    >
      {children}
    </TextNative>
  );
};
