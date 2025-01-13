import { Switch } from 'react-native-paper';
import {
  Control,
  FieldError,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';
import { Colors } from '@/constants/Colors';

interface SwitchFormProps {
  name: string;
  color?: string;
  control?: Control<FieldValues>;
  errors?: FieldError;
  validate?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export const SwitchForm: React.FC<SwitchFormProps> = ({
  name,
  control,
  color = Colors.primary.default,
}) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <Switch value={field.value} onValueChange={field.onChange} color={color} />
  );
};
