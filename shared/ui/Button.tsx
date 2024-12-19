import {
  Button as ButtonNative,
  ButtonProps as ButtonNativeProps,
} from 'react-native-paper';
import { Colors, Theme } from 'shared/theme';

type ButtonColorType = 'primary' | 'error';
type TitleColorType = 'text' | 'white';

interface ButtonProps extends ButtonNativeProps {
  buttonColor?: ButtonColorType;
  titleColor?: TitleColorType;
}

export const Button: React.FC<ButtonProps> = ({
  buttonColor = 'primary',
  titleColor = 'text',
  mode = 'elevated',
  children,
  ...rest
}) => {
  return (
    <ButtonNative
      mode={mode}
      buttonColor={Colors[buttonColor]}
      textColor={Colors[titleColor]}
      {...rest}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: Theme.spacing(2),
        paddingHorizontal: Theme.spacing(4),
      }}
    >
      {children}
    </ButtonNative>
  );
};
