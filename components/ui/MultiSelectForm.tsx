import React from 'react';
import { DimensionValue, StyleProp, TextStyle, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  MultiSelectDropdown,
  MultiSelectDropdownProps,
  DropdownInputProps,
  Option,
} from 'react-native-paper-dropdown';
import {
  Control,
  FieldError,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';

import { Text } from './Text';
import { Colors } from '@/constants/Colors';
import { ListItemType } from '@/types';
import { adaptationOfList } from '@/helpers';

type CommonMultiSelectProps = Omit<
  MultiSelectDropdownProps,
  'value' | 'options'
> & {
  outlineColor?: string;
  activeOutlineColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  style?: StyleProp<TextStyle>;
  required?: boolean;
  rightIcon?: JSX.Element;
  name: string;
  defaultValue?: string | string[];
  control?: Control<FieldValues>;
  errors?: FieldError;
  validate?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

type ListSelectProps = CommonMultiSelectProps & {
  list: ListItemType[];
  options?: never;
};
type OptionSelectProps = CommonMultiSelectProps & {
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

type MultiSelectProps = ListSelectProps | OptionSelectProps;

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
          disabled={disabled}
          right={rightIcon}
        />
      )}
    </>
  );
};

export const MultiSelectForm: React.FC<MultiSelectProps> = ({
  mode = 'outlined',
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
  name,
  defaultValue,
  control,
  errors,
  validate,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue,
    rules: validate,
  });

  return (
    <View>
      <MultiSelectDropdown
        menuContentStyle={{ top: typeof height === 'number' ? height + 2 : 56 }}
        options={options ? options : adaptationOfList(list)}
        value={field.value}
        onSelect={field.onChange}
        label={label}
        disabled={disabled}
        hideMenuHeader={true}
        CustomMultiSelectDropdownInput={({
          mode,
          selectedLabel,
          label,
          rightIcon,
          disabled,
        }) => (
          <CustomDropdownInput
            mode={mode}
            selectedLabel={selectedLabel}
            label={label}
            outlineColor={outlineColor}
            activeOutlineColor={activeOutlineColor}
            width={width}
            height={height}
            style={style}
            required={required}
            disabled={disabled}
            rightIcon={rightIcon}
          />
        )}
        {...rest}
      />
      {errors && errors.message && (
        <Text color="error" variant="bodySmall">
          {errors.message}
        </Text>
      )}
    </View>
  );
};
