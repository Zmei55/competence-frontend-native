import { FC, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useUpdateProfile } from '@/hooks/profile';
import { Button, Spinner, Text, Modal } from '@/components/ui';
import { IProfileFormValues } from '@/types/profile';
import { UseFormHandleSubmit } from 'react-hook-form';

interface SaveProfileModalProps {
  formValues: IProfileFormValues;
  showUpdateProfileModal: boolean;
  setShowUpdateProfileModal: Dispatch<SetStateAction<boolean>>;
  handleSubmit: UseFormHandleSubmit<IProfileFormValues, undefined>;
}

export const SaveProfileModalModal: FC<SaveProfileModalProps> = ({
  formValues,
  showUpdateProfileModal,
  setShowUpdateProfileModal,
  handleSubmit,
}) => {
  const { handleUpdateProfile, isUpdateProfileLoading } = useUpdateProfile();
  const { t } = useTranslation(['profile', 'buttons']);

  function closeModal() {
    setShowUpdateProfileModal(false);
  }

  function onProfileFormSubmit(values: IProfileFormValues) {
    handleUpdateProfile(values);
  }

  return (
    <Modal
      visible={showUpdateProfileModal}
      onDismiss={closeModal}
      onBackdropPress={closeModal}
      animationType="fade"
    >
      <View className="w-80 h-32 justify-center items-center gap-4">
        <Text className="text-center">{t('deleteAccount')}?</Text>

        <View className="w-full flex-row justify-around">
          <Button
            buttonColor="warning"
            isLoading={isUpdateProfileLoading}
            className="w-30"
            onPress={() => handleSubmit(onProfileFormSubmit)}
          >
            {isUpdateProfileLoading ? (
              <Spinner size="small" />
            ) : (
              t('buttons:yes')
            )}
          </Button>

          <Button buttonColor="error" onPress={closeModal}>
            {t('buttons:cancel')}
          </Button>
        </View>
      </View>
    </Modal>
  );
};
