import React from 'react';
import { DimensionValue, StyleProp, TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  Dropdown,
  DropdownProps,
  DropdownInputProps,
  Option,
} from 'react-native-paper-dropdown';

import { Text } from './Text';
import { ListItemType } from '@/types';
import { Colors } from '@/constants/Colors';
import { adaptationOfList } from '@/helpers';

type CommonSelectProps = Omit<DropdownProps, 'options'> & {
  outlineColor?: string;
  activeOutlineColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  style?: StyleProp<TextStyle>;
  required?: boolean;
  rightIcon?: JSX.Element;
};

type ListSelectProps = CommonSelectProps & {
  list: ListItemType[];
  options?: never;
};
type OptionSelectProps = CommonSelectProps & {
  options: Option[];
  list: never;
};

type CustomDropdownInputProps = DropdownInputProps & {
  outlineColor?: string;
  activeOutlineColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  style?: StyleProp<TextStyle>;
  required?: boolean;
};

type SelectProps = ListSelectProps | OptionSelectProps;

const CustomDropdownInput = ({
  mode = 'outlined',
  selectedLabel,
  label,
  rightIcon,
  outlineColor,
  activeOutlineColor,
  width,
  height,
  style,
  required,
  disabled,
}: CustomDropdownInputProps) => {
  return (
    <>
      {label && (
        <TextInput
          mode={mode}
          value={selectedLabel}
          outlineColor={outlineColor}
          activeOutlineColor={activeOutlineColor}
          disabled={disabled}
          style={[{ width, height }, style]}
          label={
            <>
              {label}
              {required && <Text style={{ color: Colors.error }}> *</Text>}
            </>
          }
          right={rightIcon}
        />
      )}

      {!label && (
        <TextInput
          mode={mode}
          value={selectedLabel}
          outlineColor={outlineColor}
          activeOutlineColor={activeOutlineColor}
          style={[{ width, height }, style]}
          right={rightIcon}
        />
      )}
    </>
  );
};

export const SelectNotForm: React.FC<SelectProps> = ({
  mode = 'outlined',
  value,
  list,
  options,
  label,
  required = false,
  onSelect,
  outlineColor = Colors.primary.default,
  activeOutlineColor = Colors.primary.dark,
  width = '100%',
  height = 56,
  style,
  disabled,
  ...rest
}) => {
  return (
    <Dropdown
      menuContentStyle={{ top: height ? height : 56 }}
      options={options ? options : adaptationOfList(list)}
      value={value}
      onSelect={onSelect}
      hideMenuHeader={true}
      CustomDropdownInput={({ mode, selectedLabel, label, rightIcon }) => (
        <CustomDropdownInput
          mode={mode}
          selectedLabel={selectedLabel}
          label={label}
          outlineColor={outlineColor}
          activeOutlineColor={activeOutlineColor}
          required={required}
          width={width}
          height={height}
          style={style}
          rightIcon={rightIcon}
        />
      )}
      {...rest}
    />
  );
};
