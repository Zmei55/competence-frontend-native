import {
  View,
  Animated,
  FlatList,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Control,
  FieldError,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';

import { Modal } from '@/components/ui/Modal';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { ListItemType, SelectModalButtonType, SelectModalType } from '@/types';
import { Colors } from '@/constants/Colors';

import { competenceStatusList } from '@/constants/data/competenceStatusList';
import { countries } from '@/constants/data/countries';
import { Dispatch, SetStateAction } from 'react';

type SelectItemProps = {
  item: ListItemType;
  onSelect?: () => void;
  control?: Control<FieldValues>;
  setSelectModal?: Dispatch<SetStateAction<SelectModalButtonType>>;
};

const SelectItem: React.FC<SelectItemProps> = ({
  item,
  onSelect,
  setSelectModal,
}) => {
  return (
    <TouchableOpacity
      className="h-14 justify-center px-3"
      onPress={() => {
        if (onSelect) onSelect();
        if (setSelectModal)
          setSelectModal({
            selectValue: item,
            visible: false,
          });
      }}
    >
      <Text>{item.name ? item.name : item.description}</Text>
    </TouchableOpacity>
  );
};

export const SelectWhitFilterModal: React.FC<SelectModalType> = ({
  visible,
  title,
  list,
  setSelectModal,
  modalContainerStyles,
  onSelect,
  onOkButtonPress,
  onCancelButtonPress,
  ...rest
}) => {
  const { t } = useTranslation(['buttons']);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      modalContainerStyles={modalContainerStyles}
      {...rest}
    >
      <View className="gap-3">
        <View className="px-3 py-2 border-b-2 border-b-primary-default">
          <Text variant="subtitle">{title ? title : 'Выбери'}</Text>
        </View>

        <View>
          {competenceStatusList ? (
            <FlatList
              data={competenceStatusList}
              ItemSeparatorComponent={() => (
                <View className="w-full h-[1px] border border-gray-light" />
              )}
              renderItem={({ item }) => (
                <SelectItem
                  key={item.id}
                  item={item}
                  onSelect={onSelect}
                  setSelectModal={setSelectModal}
                />
              )}
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

          {onCancelButtonPress && (
            <Button
              className="w-48"
              buttonColor="error"
              onPress={onCancelButtonPress}
            >
              {t('buttons:cancel')}
            </Button>
          )}
        </View>
      </View>
    </Modal>
  );
};
