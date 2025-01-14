import { FC, useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity, FlatList, DimensionValue } from 'react-native';
import { TextInputProps } from 'react-native-paper';

import { InputNotForm } from '@/components/ui/InputNotForm';
import { Modal } from '@/components/ui/Modal';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { ListItemType } from '@/types';
import { useShowKeyboard } from '@/hooks';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

interface SelectModalProps extends TextInputProps {
  list: ListItemType[] | null;
  onSelect: (e: any) => void;
  title?: string;
  filter?: boolean;
  required?: boolean;
  buttonBlock?: boolean;
  modalContainerStyles?: string;
  onOkButtonPress?: () => void;
  width?: DimensionValue;
  height?: DimensionValue;
}

export const SelectModal: FC<SelectModalProps> = ({
  list,
  onSelect,
  required = false,
  filter = false,
  defaultValue,
  title,
  buttonBlock = false,
  onOkButtonPress,
  modalContainerStyles,
  style,
  width = '100%',
  height = 56,
  ...rest
}) => {
  const selectRef = useRef<View>(null);
  const { t } = useTranslation(['buttons']);
  const { setIsShowKeyboardTrue, setIsShowKeyboardFalse } = useShowKeyboard();
  const [visible, setVisible] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<ListItemType[] | null>(list);

  // const listItem = list && list.find(i => i.id.toString() === defaultValue);
  const [selectValue, setSelectValue] = useState<ListItemType>();

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

  const onSelectItemPress = useCallback(
    (item: ListItemType) => {
      onSelect(item);
      setSelectValue(item);
      setFilteredList(list);
      setIsShowKeyboardFalse();
      setVisible(false);
    },
    [list, onSelect, setIsShowKeyboardFalse]
  );

  return (
    <View
      ref={selectRef}
      style={{
        width,
        height,
      }}
    >
      <InputNotForm
        value={
          selectValue && selectValue.name
            ? selectValue.name
            : selectValue && selectValue.description
              ? selectValue.description
              : 'Выбери...'
        }
        width={width}
        height={height}
        style={style}
        required={required}
        {...rest}
      />
      <View className="h-full justify-center absolute right-2">
        {visible ? (
          <Ionicons
            name="chevron-up-outline"
            size={24}
            color={Colors.primary.default}
          />
        ) : (
          <Ionicons
            name="chevron-down-outline"
            size={24}
            color={Colors.primary.default}
          />
        )}
      </View>
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
          {title && (
            <View className="px-3 py-2 border-b-2 border-b-primary-default">
              <Text variant="subtitle">{title ? title : 'Выбери'}</Text>
            </View>
          )}

          <View>
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
                    onPress={() => onSelectItemPress(item)}
                  >
                    <Text>{item.name ? item.name : item.description}</Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => (
                  <View className="w-full h-[1px] border border-gray-light" />
                )}
              />
            ) : (
              <Text>Список не загрузился</Text>
            )}
          </View>

          {(buttonBlock || onOkButtonPress) && (
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
          )}
        </View>
      </Modal>
    </View>
  );
};
