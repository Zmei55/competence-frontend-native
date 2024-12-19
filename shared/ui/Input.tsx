import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { TextInput as TextInputRNP, TextInputProps } from 'react-native-paper';
import {
  Control,
  FieldError,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';

import { Text } from 'shared/ui';
import { Colors, Theme } from 'shared/theme';
import EyeClosedIcon from 'shared/icons/EyeClosed';
import EyeOpeningIcon from 'shared/icons/EyeOpening';

type InputProps = TextInputProps & {
  name: string;
  defaultValue?: string;
  required?: boolean;
  isPassword?: boolean;
  control?: Control<FieldValues>;
  errors?: FieldError;
  validate?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

export const Input: FC<InputProps> = ({
  label,
  name,
  defaultValue = '',
  control,
  validate,
  required = false,
  isPassword = false,
  errors,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue,
    rules: validate,
  });

  return (
    <View>
      <TextInputRNP
        value={field.value}
        onChangeText={field.onChange}
        style={{
          height: 50,
        }}
        mode="outlined"
        outlineColor={Colors.primary}
        activeOutlineColor={Colors.primaryDark}
        secureTextEntry={isPassword && !isPasswordVisible}
        label={
          <>
            {label}
            {required && <Text style={{ color: Colors.error }}> *</Text>}
          </>
        }
        {...rest}
      />
      {isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible(state => !state)}
          style={styles.eyeIcon}
        >
          {isPasswordVisible ? <EyeClosedIcon /> : <EyeOpeningIcon />}
        </Pressable>
      )}

      {errors && errors.message && (
        <Text color="error" variant="bodySmall">
          {errors.message}
        </Text>
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
  error: {
    color: Colors.error,
  },
});
