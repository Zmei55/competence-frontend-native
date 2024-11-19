import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import EyeClosedIcon from 'shared/icons/EyeClosed';
import EyeOpeningIcon from 'shared/icons/EyeOpening';
import { Colors, Theme } from 'shared/theme';

type InputProps = TextInputProps & {
  isPassword?: boolean;
};

export const Input: React.FC<InputProps> = ({
  isPassword = false,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View>
      <TextInput
        style={{
          height: 50,
        }}
        mode="outlined"
        outlineColor={Colors.primary}
        activeOutlineColor={Colors.primaryDark}
        secureTextEntry={isPassword && !isPasswordVisible}
        {...rest}
      />
      {isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible(state => !state)}
          style={styles.eyeIcon}
        >
          {isPasswordVisible ? <EyeOpeningIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  eyeIcon: {
    position: 'absolute',
    top: Theme.spacing(5),
    right: Theme.spacing(3),
    height: Theme.spacing(6),
    width: Theme.spacing(6),
  },
});
