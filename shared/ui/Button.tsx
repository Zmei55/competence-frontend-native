import { ReactNode, FC } from 'react';
import { Text } from 'react-native';
import {
  Button as ButtonNative,
  ButtonProps as ButtonNativeProps,
} from 'react-native-paper';
import { Colors, Theme } from 'shared/theme';

type ButtonColorType = 'primary' | 'error';

type TitleColorType = 'text' | 'white';

interface ButtonProps extends Omit<ButtonNativeProps, 'children'> {
  buttonColor?: ButtonColorType;
  titleColor?: TitleColorType;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  buttonColor,
  titleColor = 'text',
  mode = 'elevated',
  children,
  ...rest
}) => {
  return (
    <ButtonNative
      mode={mode}
      buttonColor={buttonColor ? Colors[buttonColor] : undefined}
      textColor={Colors[titleColor]}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: Theme.spacing(2),
        paddingHorizontal: Theme.spacing(4),
      }}
      {...rest}
    >
      {children}
    </ButtonNative>
  );
};
