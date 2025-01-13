import { View, Modal as ModalRN, TouchableWithoutFeedback } from 'react-native';

import { ModalPropsType } from '@/types';
import { Colors } from '@/constants/Colors';

export const Modal: React.FC<ModalPropsType> = ({
  children,
  modalContainerStyles,
  onBackdropPress,
  ...rest
}) => {
  return (
    <ModalRN transparent {...rest}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (onBackdropPress) onBackdropPress();
        }}
        touchSoundDisabled
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <TouchableWithoutFeedback
            onPress={e => e.stopPropagation()}
            touchSoundDisabled
          >
            <View
              className={`border-2 border-primary-default rounded bg-white ${modalContainerStyles}`}
              // style={{
              //   borderWidth: 2,
              //   borderColor: Colors.primary.default,
              //   borderRadius: 4,
              //   backgroundColor: Colors.white,
              // }}
            >
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </ModalRN>
  );
};
