import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput as TextInputRNP, TextInputProps } from 'react-native-paper';
import {
  Control,
  FieldError,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';

import { Colors } from '@/constants/Colors';

import Ionicons from '@expo/vector-icons/Ionicons';

interface InputFormProps extends TextInputProps {
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
}

export const InputForm: FC<InputFormProps> = ({
  label,
  name,
  defaultValue = '',
  control,
  validate,
  required = false,
  isPassword = false,
  errors,
  right,
  style,
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
    <View className="h-[58px]">
      <TextInputRNP
        value={field.value}
        onChangeText={field.onChange}
        mode="outlined"
        outlineColor={
          errors && errors.message ? Colors.error : Colors.primary.default
        }
        activeOutlineColor={
          errors && errors.message ? Colors.error : Colors.primary.dark
        }
        secureTextEntry={isPassword && !isPasswordVisible}
        label={
          <>
            {label}
            {required && <Text className="text-error"> *</Text>}
          </>
        }
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity
          className="w-[46] h-[46] justify-center items-center absolute bottom-[2px] right-[2px]"
          onPress={() => setIsPasswordVisible(state => !state)}
        >
          {isPasswordVisible ? (
            <Ionicons
              name="eye-off-outline"
              size={32}
              color={Colors.gray.default}
            />
          ) : (
            <Ionicons
              name="eye-outline"
              size={32}
              color={Colors.gray.default}
            />
          )}
        </TouchableOpacity>
      )}

      {errors && errors.message && (
        <Text className="text-base text-error">{errors.message}</Text>
      )}
    </View>
  );
};
