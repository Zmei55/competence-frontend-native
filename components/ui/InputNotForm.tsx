import React, { FC, useState } from 'react';
import { DimensionValue, Text, TouchableOpacity, View } from 'react-native';
import { TextInput as TextInputRNP, TextInputProps } from 'react-native-paper';

import { Colors } from '@/constants/Colors';

import Ionicons from '@expo/vector-icons/Ionicons';

interface InputNotFormProps extends TextInputProps {
  required?: boolean;
  isPassword?: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
}

export const InputNotForm: FC<InputNotFormProps> = ({
  label,
  defaultValue = '',
  required = false,
  isPassword = false,
  right,
  style,
  width = '100%',
  height = 56,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View style={{ width, height }}>
      {label ? (
        <TextInputRNP
          mode="outlined"
          outlineColor={Colors.primary.default}
          activeOutlineColor={Colors.primary.dark}
          secureTextEntry={isPassword && !isPasswordVisible}
          label={
            <>
              {label}
              {required && <Text className="text-error"> *</Text>}
            </>
          }
          style={[{ width, height }, style]}
          {...rest}
        />
      ) : (
        <TextInputRNP
          mode="outlined"
          outlineColor={Colors.primary.default}
          activeOutlineColor={Colors.primary.dark}
          secureTextEntry={isPassword && !isPasswordVisible}
          style={[{ width, height }, style]}
          {...rest}
        />
      )}
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
    </View>
  );
};
