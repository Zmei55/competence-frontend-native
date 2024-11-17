import { ReactNode, FC } from 'react';
import { Text } from 'react-native'
import { Button as ButtonNative, ButtonProps as ButtonNativeProps } from 'react-native-paper';
import { Colors, Theme } from '../theme';

type ButtonColorType = 'primary' | 'error' | 'transparent';

type TitleColorType = 'default' | 'white';

interface ButtonProps extends Omit<ButtonNativeProps, 'children'> {
  title: string;
  buttonColor?: ButtonColorType;
  titleColor?: TitleColorType;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  title,
  buttonColor = 'transparent',
  titleColor = 'default',
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
        backgroundColor: buttonColor === 'primary' ? Colors.primary : buttonColor === 'error' ? Colors.error : 'transparent',
        borderRadius: Theme.spacing(2),
        paddingHorizontal: Theme.spacing(4),
      }}
      {...rest}
    >
      {children ?
        children :
        <Text style={{
          fontSize: 16,
          color: titleColor === 'white' ? Colors.white : Colors.text
        }}>{title}</Text>
      }
        
    </ButtonNative>
  )
}
