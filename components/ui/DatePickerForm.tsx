import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { DatePickerInputProps } from 'react-native-paper-dates/lib/typescript/Date/DatePickerInput.shared';
import {
  Control,
  FieldError,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';

import { Colors } from '@/constants/Colors';

interface DatePickerFormProps
  extends Omit<
    DatePickerInputProps,
    'locale' | 'inputMode' | 'onChange' | 'value'
  > {
  name: string;
  control?: Control<FieldValues>;
  errors?: FieldError;
  validate?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  inputMode?: 'start' | 'end';
}

export const DatePickerForm: React.FC<DatePickerFormProps> = ({
  label,
  mode = 'outlined',
  outlineColor = Colors.primary.default,
  activeOutlineColor = Colors.primary.dark,
  iconColor = Colors.primary.default,
  inputMode = 'start',
  name,
  control,
  defaultValue,
  validate,
  ...rest
}) => {
  const { i18n } = useTranslation();

  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue,
    rules: validate,
  });

  return (
    <View style={{ height: 56 }}>
      <PaperProvider
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: Colors.primary.default,
          },
        }}
      >
        <DatePickerInput
          locale={i18n.language}
          label={label}
          value={new Date(field.value)}
          onChange={d => field.onChange(d)}
          inputMode={inputMode}
          mode={mode}
          outlineColor={outlineColor}
          activeOutlineColor={activeOutlineColor}
          iconColor={iconColor}
          startWeekOnMonday
          {...rest}
        />
      </PaperProvider>
    </View>
  );
};
