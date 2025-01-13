import { ModalProps as ModalPropsRN } from 'react-native';
import {
  Control,
  FieldError,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import { ListItemType } from '@/types/listItemType';
import { Dispatch, SetStateAction } from 'react';

export type ModalPropsType = ModalPropsRN & {
  modalContainerStyles?: string;
  onBackdropPress?: () => void;
};

export type SelectModalType = ModalPropsType & {
  title?: string;
  list?: ListItemType[];
  onSelect?: () => void;
  onOkButtonPress?: () => void;
  onCancelButtonPress?: () => void;
  setSelectModal?: Dispatch<SetStateAction<SelectModalButtonType>>;
};

export type SelectModalButtonType = ModalPropsType & {
  title?: string;
  selectValue?: ListItemType;
  list?: ListItemType[];
  onSelect?: (id: string) => void;
  onOkButtonPress?: () => void;
  onCancelButtonPress?: () => void;
  name?: string;
  defaultValue?: string | string[];
  control?: Control<FieldValues>;
  errors?: FieldError;
  validate?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};
