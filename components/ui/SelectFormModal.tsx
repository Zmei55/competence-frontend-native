import { FC, useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { TextInputProps } from 'react-native-paper';
import {
  Control,
  FieldError,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';

import { InputNotForm } from '@/components/ui/InputNotForm';
import { Modal } from '@/components/ui/Modal';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { ListItemType } from '@/types';
import { useShowKeyboard } from '@/hooks';

interface SelectFormModalProps extends TextInputProps {
  list: ListItemType[] | null;
  filter?: boolean;
  required?: boolean;
  name: string;
  control?: Control<FieldValues>;
  errors?: FieldError;
  validate?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  title?: string;
  onOkButtonPress?: () => void;
  modalContainerStyles?: string;
}

export const SelectFormModal: FC<SelectFormModalProps> = ({
  list,
  required = false,
  filter = false,
  defaultValue,
  name,
  control,
  errors,
  validate,
  title,
  onOkButtonPress,
  modalContainerStyles,
  ...rest
}) => {
  const selectRef = useRef<View>(null);
  const { t } = useTranslation(['buttons']);
  const { isShowKeyboard, setIsShowKeyboardTrue, setIsShowKeyboardFalse } =
    useShowKeyboard();
  const [visible, setVisible] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<ListItemType[] | null>(list);

  const listItem = list && list.find(i => i.id.toString() === defaultValue);
  const [value, setValue] = useState<string | undefined>(
    listItem && listItem.name
      ? listItem.name
      : listItem && listItem.description
        ? listItem.description
        : undefined
  );

  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue,
    rules: validate,
  });

  const onSelect = useCallback(
    (item: ListItemType) => {
      field.onChange(item.id);
      setValue(
        item && item.name
          ? item.name
          : item && item.description
            ? item.description
            : undefined
      );
      setFilteredList(list);
      setIsShowKeyboardFalse();
      setVisible(false);
    },
    [field, list, setIsShowKeyboardFalse]
  );

  function onFilteringList(filter: string) {
    setFilteredList(
      list &&
        list.filter(i =>
          i.name
            ? i.name.toLowerCase().includes(filter.toLowerCase())
            : i.description
              ? i.description.toLowerCase().includes(filter.toLowerCase())
              : undefined
        )
    );
  }

  function closeSelectModal() {
    setFilteredList(list);
    setVisible(false);
  }

  return (
    <View ref={selectRef}>
      <InputNotForm value={value} required={required} {...rest} />
      <TouchableOpacity
        className="w-full h-full absolute"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        animationType="slide"
        onBackdropPress={closeSelectModal}
        modalContainerStyles={modalContainerStyles}
      >
        <View className="gap-3">
          <View className="px-3 py-2 border-b-2 border-b-primary-default">
            <Text variant="subtitle">{title ? title : 'Выбери'}</Text>
          </View>

          <View className={isShowKeyboard ? 'max-h-[350px]' : 'max-h-[550px]'}>
            {filter && (
              <View className="px-3">
                <InputNotForm
                  onChangeText={filter => onFilteringList(filter)}
                  onFocus={setIsShowKeyboardTrue}
                  onBlur={setIsShowKeyboardFalse}
                />
              </View>
            )}

            {list ? (
              <FlatList
                data={filter ? filteredList : list}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    key={item.id}
                    className="h-14 justify-center px-3"
                    onPress={() => onSelect(item)}
                  >
                    <Text>{item.name ? item.name : item.description}</Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => (
                  <View className="w-full h-[1px] border border-gray-light" />
                )}
                // keyboardDismissMode="on-drag"
                // keyboardShouldPersistTaps="handled"
                // contentInsetAdjustmentBehavior="always"
              />
            ) : (
              <Text>Список не загрузился</Text>
            )}
          </View>

          <View
            className={`flex-row px-3 py-2 border-t-2 border-t-primary-default ${onOkButtonPress ? 'justify-between' : 'justify-end'}`}
          >
            {onOkButtonPress && (
              <Button onPress={onOkButtonPress}>{t('buttons:ok')}</Button>
            )}

            <Button
              className="w-48"
              buttonColor="error"
              onPress={closeSelectModal}
            >
              {t('buttons:cancel')}
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};
