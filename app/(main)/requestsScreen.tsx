import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Spinner,
  Text,
  SelectModal,
  Button,
  CountdownTimer,
  Modal,
} from '@/components/ui';
import { CONFIRMED, NOT_CONFIRMED, REJECTED, ALL } from '@/constants/Constants';
import { TCompetaConfirmationRegistered } from '@/types/guarantee';
import {
  useGetAllConfirmationsCurrentUser,
  useSendNewStatusConfirmation,
} from '@/hooks/guarantee';
import { useCountdownTimer } from '@/hooks';

import { confirmationsCurrentUser } from '@/constants/data/requestList';

type FilterOptionType = {
  id: string;
  value: typeof ALL | typeof CONFIRMED | typeof NOT_CONFIRMED | typeof REJECTED;
  name: 'All' | 'Confirmed' | 'Not confirmed' | 'Rejected';
};

interface ConfirmationArticleProps {
  confirmation: TCompetaConfirmationRegistered;
  setConfirmationId: Dispatch<SetStateAction<number | null>>;
  setConfirmationStatus: Dispatch<
    SetStateAction<typeof CONFIRMED | typeof REJECTED | null>
  >;
  setShowConfirmationModal: Dispatch<SetStateAction<boolean>>;
}

const FILTER_OPTIONS: FilterOptionType[] = [
  { id: '1', value: ALL, name: 'All' },
  { id: '2', value: CONFIRMED, name: 'Confirmed' },
  { id: '3', value: NOT_CONFIRMED, name: 'Not confirmed' },
  { id: '4', value: REJECTED, name: 'Rejected' },
];

const RequestsScreen: FC = () => {
  const { t } = useTranslation(['guarantee', 'buttons']);
  const {
    // confirmationsCurrentUser,
    confirmationsCurrentUserError,
    handleGetAllConfirmation,
    isConfirmationCurrentUserLoading,
  } = useGetAllConfirmationsCurrentUser();
  const { handleSendNewStatusConfirmation } = useSendNewStatusConfirmation();
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);
  const [confirmationId, setConfirmationId] = useState<number | null>(null);
  const [confirmationStatus, setConfirmationStatus] = useState<
    typeof CONFIRMED | typeof REJECTED | null
  >(null);
  const [isConfirmedStatus, setIsConfirmedStatus] = useState<boolean>(false);

  useEffect(() => {
    handleGetAllConfirmation();
  }, [handleGetAllConfirmation]);

  const [filterOption, setFilterOption] = useState<FilterOptionType>({
    id: '1',
    value: ALL,
    name: 'All',
  });

  function submitNewStatusConfirmation(
    id: number | null,
    status: typeof CONFIRMED | typeof REJECTED | null
  ) {
    if (!id) return null;
    if (!status) return null;

    handleSendNewStatusConfirmation(id, status);
    setIsConfirmedStatus(true);
    setShowConfirmationModal(true);
  }

  function closeModal() {
    setShowConfirmationModal(false);
    if (isConfirmedStatus) {
      handleGetAllConfirmation();
      setIsConfirmedStatus(false);
      setShowConfirmationModal(false);
    }
  }

  return (
    <SafeAreaView className="flex-1 mt-[64px]">
      {!confirmationsCurrentUser && isConfirmationCurrentUserLoading && (
        <View className="h-[300px] justify-center">
          <Spinner size="large" color="primary" />
        </View>
      )}

      {(!confirmationsCurrentUser || confirmationsCurrentUser.length === 0) &&
        !isConfirmationCurrentUserLoading && (
          <View className="items-center">
            <Text variant="bodyLarge">
              {t('guarantee:haveBeenNoRequestsConfirmation')}
            </Text>
          </View>
        )}

      {confirmationsCurrentUserError && (
        <Text variant="bodyLarge" color="error">
          {confirmationsCurrentUserError}
        </Text>
      )}

      <ScrollView>
        <View className="w-full h-full px-3 gap-4 mt-3 mb-3">
          {confirmationsCurrentUser && confirmationsCurrentUser.length > 1 && (
            <View className="gap-1">
              <Text>Фильтр:</Text>

              <SelectModal<FilterOptionType>
                list={FILTER_OPTIONS}
                value={filterOption.id}
                onSelect={item => setFilterOption(item)}
                modalContainerStyles="h-64"
              />
            </View>
          )}

          {confirmationsCurrentUser && (
            <View className="gap-4">
              {filterOption.value === ALL &&
                confirmationsCurrentUser.map(confirmation => (
                  <ConfirmationArticle
                    key={confirmation.id}
                    confirmation={confirmation}
                    setConfirmationId={setConfirmationId}
                    setConfirmationStatus={setConfirmationStatus}
                    setShowConfirmationModal={setShowConfirmationModal}
                  />
                ))}

              {confirmationsCurrentUser
                .filter(
                  confirmation =>
                    filterOption.value !== ALL &&
                    confirmation.statusCompetaConfirmation ===
                      filterOption.value
                )
                .map(confirmation => (
                  <ConfirmationArticle
                    key={confirmation.id}
                    confirmation={confirmation}
                    setConfirmationId={setConfirmationId}
                    setConfirmationStatus={setConfirmationStatus}
                    setShowConfirmationModal={setShowConfirmationModal}
                  />
                ))}
            </View>
          )}
        </View>
      </ScrollView>

      <Modal
        visible={showConfirmationModal}
        onDismiss={closeModal}
        onBackdropPress={closeModal}
        animationType="fade"
      >
        <View className="w-[350px] px-4 py-3 gap-4">
          <Text variant="subtitle" className="text-center">
            {isConfirmedStatus ? t('yourOpinionHasTaken') : t('areYouSure')}
          </Text>

          <View>
            {isConfirmedStatus ? (
              <View className="flex-row gap-3">
                <Button
                  className="flex-1"
                  buttonColor="primary"
                  onPress={() =>
                    submitNewStatusConfirmation(
                      confirmationId,
                      confirmationStatus
                    )
                  }
                >
                  {t('buttons:yes')}
                </Button>

                <Button
                  className="flex-1"
                  buttonColor="error"
                  onPress={closeModal}
                >
                  {t('buttons:no')}
                </Button>
              </View>
            ) : (
              <View>
                <Button buttonColor="primary" onPress={closeModal}>
                  {t('buttons:ok')}
                </Button>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const ConfirmationArticle: FC<ConfirmationArticleProps> = ({
  confirmation,
  setConfirmationId,
  setConfirmationStatus,
  setShowConfirmationModal,
}) => {
  const { t } = useTranslation(['guarantee', 'buttons']);
  const {
    id,
    guarantorProfile,
    competa,
    confirmedTime,
    statusCompetaConfirmation,
  } = confirmation;
  const [days] = useCountdownTimer(confirmedTime);

  function submitConfirmationStatus(
    status: typeof CONFIRMED | typeof REJECTED
  ) {
    setConfirmationId(id);
    setConfirmationStatus(status);
    setShowConfirmationModal(true);
  }

  return (
    <View
      key={confirmation.id}
      className="w-full px-3 py-2 gap-3 border-2 border-primary-default rounded-md"
    >
      <View className="items-center gap-3">
        {guarantorProfile.avatarImageData && (
          <Image
            src={`data:image/png;base64,${confirmation.guarantorProfile.avatarImageData}`}
            className="w-[150px] h-[150px] bg-white border-2 border-primary-default rounded-full"
          />
        )}

        <View className="w-full items-center px-3 border-2 border-primary-default rounded-2xl">
          <Text variant="bodyLarge">
            {guarantorProfile.firstName}
            <Text variant="bodyLarge">{` ${guarantorProfile.lastName}`}</Text>
          </Text>
        </View>
      </View>

      <View className="px-3 border-2 border-primary-default rounded-3xl">
        <Text variant="subtitle">{competa.title}</Text>
      </View>

      {statusCompetaConfirmation === NOT_CONFIRMED && (
        <CountdownTimer targetDate={confirmedTime} />
      )}
      {statusCompetaConfirmation === CONFIRMED && <Text>{CONFIRMED}</Text>}
      {statusCompetaConfirmation === REJECTED && <Text>{REJECTED}</Text>}

      <View className="gap-3">
        <Button buttonColor="primary">{t('buttons:details')}</Button>

        {statusCompetaConfirmation === NOT_CONFIRMED && days >= 0 && (
          <View className="flex-row gap-3">
            <Button
              buttonColor="primary"
              onPress={() => submitConfirmationStatus(CONFIRMED)}
              className="flex-1"
            >
              {t('buttons:confirm')}
            </Button>

            <Button
              buttonColor="error"
              onPress={() => submitConfirmationStatus(REJECTED)}
              className="flex-1"
            >
              {t('buttons:reject')}
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

export default RequestsScreen;
