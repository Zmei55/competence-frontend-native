import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

type ButtonColorType = 'primary' | 'error' | 'warning';
type TextColorType = 'text' | 'white' | 'primary' | 'error';

interface ButtonProps extends TouchableOpacityProps {
  buttonColor?: ButtonColorType;
  textColor?: TextColorType;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated';
  className?: string;
  textStyles?: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  buttonColor = 'primary',
  textColor = 'white',
  mode = 'elevated',
  onPress,
  className,
  textStyles,
  isLoading,
  disabled,
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`
        h-14 px-8 justify-center items-center
        ${buttonColor === 'primary' ? 'bg-primary-default border-primary-default' : undefined}
        ${buttonColor === 'error' ? 'bg-error border-error' : undefined}
        ${buttonColor === 'warning' ? 'bg-orange-default border-orange-default' : undefined}
        ${mode === 'text' ? 'bg-transparent border-none' : undefined}
        ${mode === 'outlined' ? 'rounded-xl bg-transparent border-2' : undefined}
        ${mode === 'contained' ? `rounded-xl` : undefined}
        ${mode === 'elevated' ? `rounded-xl shadow-slate-950 shadow-lg` : undefined}
        ${className}
        ${isLoading || disabled ? 'opacity-50' : undefined}
        `}
      disabled={disabled || isLoading}
      {...rest}
    >
      {typeof children === 'string' ? (
        <Text
          className={`
          text-2xl text-center
          ${mode === 'text' ? 'underline' : undefined}
          ${textColor === 'white' ? 'text-white' : undefined}
          ${textColor === 'primary' ? 'text-primary-default' : undefined}
          ${textColor === 'error' ? 'text-error' : undefined}
          ${textColor === 'text' ? 'text-text' : undefined}
          ${textStyles}
          `}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
