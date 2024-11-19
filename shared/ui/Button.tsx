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
  title: string;
  buttonColor?: ButtonColorType;
  titleColor?: TitleColorType;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  title,
  buttonColor,
  titleColor = 'text',
  mode = 'contained',
  children,
  onPress,
  ...rest
}) => {
  return (
    <ButtonNative
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: buttonColor ? Colors[buttonColor] : undefined,
        borderRadius: Theme.spacing(2),
        paddingHorizontal: Theme.spacing(4),
      }}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Text
          style={{
            fontSize: 16,
            color: Colors[titleColor],
          }}
        >
          {title}
        </Text>
      )}
    </ButtonNative>
  );
};
