import { TextInput, TextInputProps } from 'react-native-paper';
import { Colors } from 'shared/theme';

type InputProps = TextInputProps & {
  password?: boolean;
};


export const Input: React.FC<InputProps> = ({ password = false, ...rest }) => {
  return (
    <TextInput
      style={{
        height: 50,
      }}
      mode='outlined'
      outlineColor={Colors.primary}
      activeOutlineColor={Colors.primaryDark}
      secureTextEntry={password}
      {...rest}
    />
  );
};
