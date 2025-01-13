import { FC, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useDeleteCurrentAccount } from '@/hooks/auth';
import { Button, Spinner, Text, Modal } from '@/components/ui';

interface DeleteProfileModalProps {
  showDeleteProfileModal: boolean;
  setShowDeleteProfileModal: Dispatch<SetStateAction<boolean>>;
}

export const DeleteProfileModal: FC<DeleteProfileModalProps> = ({
  showDeleteProfileModal,
  setShowDeleteProfileModal,
}) => {
  const { handleDeleteCurrentAccount, isDeleteCurrentAccount } =
    useDeleteCurrentAccount();
  const { t } = useTranslation(['profile', 'buttons']);

  return (
    <Modal
      visible={showDeleteProfileModal}
      onDismiss={() => setShowDeleteProfileModal(false)}
      onBackdropPress={() => setShowDeleteProfileModal(false)}
      animationType="fade"
    >
      <View className="w-80 h-32 justify-center items-center gap-4">
        <Text className="text-center">{t('deleteAccount')}?</Text>

        <View className="w-full flex-row justify-around">
          <Button
            buttonColor="warning"
            isLoading={isDeleteCurrentAccount}
            className="w-30"
            onPress={handleDeleteCurrentAccount}
          >
            {isDeleteCurrentAccount ? (
              <Spinner size="small" />
            ) : (
              t('buttons:yes')
            )}
          </Button>

          <Button
            buttonColor="error"
            onPress={() => setShowDeleteProfileModal(false)}
          >
            {t('buttons:cancel')}
          </Button>
        </View>
      </View>
    </Modal>
  );
};
