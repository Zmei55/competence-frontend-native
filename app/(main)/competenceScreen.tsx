import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  ViewProps,
  FlatList,
} from 'react-native';
import { Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { openURL } from 'expo-linking';
import dayjs from 'dayjs';

import { useGetCompetenceByIdQuery } from '@/redux/competence/competencesApi';
import { currentUserIdSelector } from '@/redux/auth';
import {
  professionListSelector,
  driverLicenceSelector,
  industryListSelector,
  jobTitleListSelector,
  languageSelector,
  languageLevelSelector,
  skillLevelSelector,
  educationTypeSelector,
} from '@/redux/administration';
import { useAppSelector } from '@/hooks';
import { Button, Spinner, Text, Modal } from '@/components/ui';
import { customErrorHandler, findListItemById, monthDiff } from '@/helpers';
import {
  useTranslationCompetenceType,
  useSaveCompetenceInStorage,
  useDeleteCompetenceById,
  useDocumentDeleteById,
} from '@/hooks/competence';
import { useGetAllConfirmationRegisteredByCompetaId } from '@/hooks/guarantee';
import { TCompetenceType } from '@/types/competence';
import {
  EDUCATION,
  JOB,
  SOFTSKILL,
  HARDSKILL_CUSTOM,
  HARDSKILL_LANGUAGE,
  HARDSKILL_DRIVERLICENCE,
} from '@/constants/Constants';

import Ionicons from '@expo/vector-icons/Ionicons';

import { competenceEducation as competence } from '@/constants/data/competence';
import { imageData } from '@/constants/data/competenceImage';
import { confirmationRegisteredList } from '@/constants/data/confirmationList';
import { Colors } from '@/constants/Colors';

interface InfoBoxProps extends ViewProps {
  competenceType: TCompetenceType;
}

interface DeleteCompetenceModalProps {
  showDeletingModal: boolean;
  documentId: number | null;
  setShowDeletingModal: Dispatch<SetStateAction<boolean>>;
  setDocumentId: Dispatch<SetStateAction<number | null>>;
  // refetchCompetence: () => void;
}

const CompetenceScreen: FC = () => {
  const { competenceId } = useLocalSearchParams<{ competenceId: string }>();
  // const {
  //   data: competence,
  //   // isLoading: isCompetenceLoading,
  //   refetch: refetchCompetenceQuery,
  //   error: competenceByIdError,
  // } = useGetCompetenceByIdQuery(competenceId, { skip: !competenceId });
  const {
    // ?handleGetAllConfirmationRegisteredByCompetaId,
    // ?confirmationRegisteredList,
    isGetConfirmationRegisteredLoading,
  } = useGetAllConfirmationRegisteredByCompetaId();
  const { handleSaveCompetenceInStorage } = useSaveCompetenceInStorage();
  const isCompetenceLoading = false; // ?удалить
  const { t } = useTranslation(['competence', 'buttons']);
  const { translationCompetenceType } = useTranslationCompetenceType();
  const currentUser = useAppSelector(currentUserIdSelector);
  const educationTypeList = useAppSelector(educationTypeSelector);
  const professionList = useAppSelector(professionListSelector);
  const skillLevelList = useAppSelector(skillLevelSelector);
  const industryList = useAppSelector(industryListSelector);
  const jobTitleList = useAppSelector(jobTitleListSelector);
  const languageList = useAppSelector(languageSelector);
  const languageLevelList = useAppSelector(languageLevelSelector);
  const driverLicenceList = useAppSelector(driverLicenceSelector);
  const [showDeletingModal, setShowDeletingModal] = useState<boolean>(false);
  const [documentId, setDocumentId] = useState<number | null>(null);

  // ?useEffect(() => {
  //   if (competenceId)
  //     handleGetAllConfirmationRegisteredByCompetaId(+competenceId);
  // }, [competenceId, handleGetAllConfirmationRegisteredByCompetaId]);

  return (
    <SafeAreaView className="flex-1 mt-[64px]">
      <ScrollView>
        {/* {isCompetenceLoading && (
          <View className="h-[300px] justify-center">
            <Spinner size="large" color="primary" />
          </View>
        )} */}

        {/* {competenceByIdError && (
          <Text color="error">{customErrorHandler(competenceByIdError)}</Text>
        )} */}

        {competence && !isCompetenceLoading && (
          <View className="px-3 py-3 gap-4">
            <Surface elevation={3} className="px-3 py-5 gap-3 items-center">
              <Image
                src={`data:image/png;base64,${imageData}`}
                className="w-[250px] h-[250px] bg-white border-2 border-primary-default rounded-md"
              />
              <Text>{competence.title}</Text>
              <Text>
                {t('trustIndex')}: {competence.trustIndex}
              </Text>
              <Text>{competence.description}</Text>

              <InfoBox competenceType={competence.competaType}>
                <Text>{t('competenceType.competenceType')}:</Text>
                <Text>{translationCompetenceType(competence.competaType)}</Text>
              </InfoBox>

              {competence.educationSkill && (
                <>
                  {competence.educationSkill.name && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('education.educationalInstitution')}:</Text>
                      <Text>{competence.educationSkill.name}</Text>
                    </InfoBox>
                  )}
                  {competence.educationSkill.educationTypeId &&
                    educationTypeList && (
                      <InfoBox competenceType={competence.competaType}>
                        <Text>{t('education.typeEducation')}:</Text>
                        <Text>
                          {
                            findListItemById(
                              educationTypeList,
                              competence.educationSkill.educationTypeId
                            )?.description
                          }
                        </Text>
                      </InfoBox>
                    )}
                  {competence.educationSkill.professionId && professionList && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('education.profession')}:</Text>
                      <Text>
                        {
                          findListItemById(
                            professionList,
                            competence.educationSkill.professionId
                          )?.name
                        }
                      </Text>
                    </InfoBox>
                  )}
                  {competence.educationSkill.resultUrl && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('jobSkill.resultUrl')}:</Text>
                      <TouchableOpacity
                        onPress={() => openURL('www.google.de')}
                      >
                        <Text style={{ color: '#2563eb' }}>
                          {competence.educationSkill.resultUrl}
                        </Text>
                      </TouchableOpacity>
                    </InfoBox>
                  )}
                </>
              )}

              {competence.jobSkill && (
                <>
                  {competence.jobSkill.skillLevelId && skillLevelList && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('jobSkill.skillLevel')}:</Text>
                      <Text>
                        {
                          findListItemById(
                            skillLevelList,
                            competence.jobSkill.skillLevelId
                          )?.description
                        }
                      </Text>
                    </InfoBox>
                  )}

                  {competence.jobSkill.industryId && industryList && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('jobSkill.industry')}:</Text>
                      <Text>
                        {
                          findListItemById(
                            industryList,
                            competence.jobSkill.industryId
                          )?.name
                        }
                      </Text>
                    </InfoBox>
                  )}

                  {competence.jobSkill.companyName && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('jobSkill.company')}:</Text>
                      <Text>{competence.jobSkill.companyName}</Text>
                    </InfoBox>
                  )}

                  {competence.jobSkill.jobTitleId && jobTitleList && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('jobSkill.position')}:</Text>
                      <Text>
                        {
                          findListItemById(
                            jobTitleList,
                            competence.jobSkill.jobTitleId
                          )?.name
                        }
                      </Text>
                    </InfoBox>
                  )}

                  {competence.jobSkill.resultUrl && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('jobSkill.resultUrl')}:</Text>
                      <TouchableOpacity
                        onPress={() =>
                          openURL(`${competence.jobSkill?.resultUrl}`)
                        }
                      >
                        <Text style={{ color: '#2563eb' }}>
                          {competence.jobSkill.resultUrl}
                        </Text>
                      </TouchableOpacity>
                    </InfoBox>
                  )}

                  {competence.jobSkill.jobStartDate &&
                    competence.jobSkill.jobEndDate &&
                    !competence.jobSkill.currentJob && (
                      <InfoBox competenceType={competence.competaType}>
                        <Text>{t('jobSkill.experience')}:</Text>
                        <Text>
                          {monthDiff(
                            competence.jobSkill.jobStartDate,
                            competence.jobSkill.jobEndDate
                          )}
                        </Text>
                      </InfoBox>
                    )}

                  {competence.jobSkill.jobStartDate &&
                    competence.jobSkill.currentJob &&
                    !competence.jobSkill.jobEndDate && (
                      <InfoBox competenceType={competence.competaType}>
                        <Text>{t('jobSkill.experience')}:</Text>
                        <Text>
                          {monthDiff(competence.jobSkill.jobStartDate, dayjs())}
                        </Text>
                      </InfoBox>
                    )}

                  {competence.jobSkill.achievements && (
                    <InfoBox competenceType={competence.competaType}>
                      <Text>{t('jobSkill.achievements')}:</Text>
                      <Text>{competence.jobSkill.achievements}</Text>
                    </InfoBox>
                  )}
                </>
              )}

              {competence.hardSkill && (
                <>
                  {competence.hardSkill.hardSkillCustom && (
                    <>
                      {competence.hardSkill.hardSkillCustom.industryId &&
                        industryList && (
                          <InfoBox competenceType={competence.competaType}>
                            <Text>{t('jobSkill.industry')}:</Text>
                            <Text>
                              {
                                findListItemById(
                                  industryList,
                                  competence.hardSkill.hardSkillCustom
                                    .industryId
                                )?.name
                              }
                            </Text>
                          </InfoBox>
                        )}

                      {competence.hardSkill.hardSkillCustom.skillLevelId &&
                        skillLevelList && (
                          <InfoBox competenceType={competence.competaType}>
                            <Text>{t('softSkill.skillLevel')}:</Text>
                            <Text>
                              {
                                findListItemById(
                                  skillLevelList,
                                  competence.hardSkill.hardSkillCustom
                                    .skillLevelId
                                )?.description
                              }
                            </Text>
                          </InfoBox>
                        )}

                      {competence.hardSkill.hardSkillCustom.resultUrl && (
                        <InfoBox competenceType={competence.competaType}>
                          <Text>{t('jobSkill.resultUrl')}:</Text>
                          <Text>
                            <a
                              href={
                                competence.hardSkill.hardSkillCustom.resultUrl
                              }
                            >
                              {competence.hardSkill.hardSkillCustom.resultUrl}
                            </a>
                          </Text>
                        </InfoBox>
                      )}
                    </>
                  )}

                  {competence.hardSkill.hardSkillLanguage && (
                    <>
                      {competence.hardSkill.hardSkillLanguage.languageId &&
                        languageList && (
                          <InfoBox competenceType={competence.competaType}>
                            <Text>{t('hardSkill.language')}:</Text>
                            <Text>
                              {
                                findListItemById(
                                  languageList,
                                  competence.hardSkill.hardSkillLanguage
                                    .languageId
                                )?.description
                              }
                            </Text>
                          </InfoBox>
                        )}

                      {competence.hardSkill.hardSkillLanguage.languageLevelId &&
                        languageLevelList && (
                          <InfoBox competenceType={competence.competaType}>
                            <Text>{t('hardSkill.languageLevel')}:</Text>
                            <Text>
                              {
                                findListItemById(
                                  languageLevelList,
                                  competence.hardSkill.hardSkillLanguage
                                    .languageLevelId
                                )?.description
                              }
                            </Text>
                          </InfoBox>
                        )}
                    </>
                  )}

                  {competence.hardSkill.hardSkillDriverLicence &&
                    driverLicenceList && (
                      <>
                        {competence.hardSkill.hardSkillDriverLicence
                          .driverLicenceId && (
                          <InfoBox competenceType={competence.competaType}>
                            <Text>{t('hardSkill.driverLicence')}:</Text>
                            <Text>
                              {
                                findListItemById(
                                  driverLicenceList,
                                  competence.hardSkill.hardSkillDriverLicence
                                    .driverLicenceId
                                )?.description
                              }
                            </Text>
                          </InfoBox>
                        )}

                        {competence.hardSkill.hardSkillDriverLicence
                          .skillLevelId &&
                          skillLevelList && (
                            <InfoBox competenceType={competence.competaType}>
                              <Text>{t('softSkill.skillLevel')}:</Text>
                              <Text>
                                {
                                  findListItemById(
                                    skillLevelList,
                                    competence.hardSkill.hardSkillDriverLicence
                                      .skillLevelId
                                  )?.description
                                }
                              </Text>
                            </InfoBox>
                          )}
                      </>
                    )}
                </>
              )}
            </Surface>

            <View className="gap-3">
              <Button onPress={() => handleSaveCompetenceInStorage(competence)}>
                {t('buttons:findGuarantor')}
              </Button>

              <Button onPress={() => handleSaveCompetenceInStorage(competence)}>
                {t('buttons:feedback360')}
              </Button>

              <Button onPress={() => handleSaveCompetenceInStorage(competence)}>
                {t('buttons:edit')}
              </Button>

              <Button
                buttonColor="error"
                onPress={() => setShowDeletingModal(true)}
              >
                {t('buttons:delete')}
              </Button>
            </View>

            {competence.confirmed && (
              <View className="items-center gap-2">
                <Text variant="subtitle">{t('guarantorsList')}</Text>

                {isGetConfirmationRegisteredLoading && <Spinner size={50} />}

                {confirmationRegisteredList &&
                  !isGetConfirmationRegisteredLoading && (
                    <FlatList
                      data={confirmationRegisteredList}
                      horizontal
                      renderItem={({ item }) => (
                        <View key={item.id} className="items-center">
                          <Image
                            src={`data:image/png;base64,${imageData}`}
                            // ?src={`data:image/png;base64,${item.guarantorProfile.avatarImageData}`}
                            className="w-[150px] h-[150px] bg-white border-2 border-primary-default rounded-full"
                          />
                          <Text>{item.guarantorProfile.firstName}</Text>
                          <Text>{item.guarantorProfile.lastName}</Text>
                        </View>
                      )}
                      ItemSeparatorComponent={() => (
                        <View className="w-3 h-full" />
                      )}
                    />
                  )}
              </View>
            )}

            {competence.documentInfoList &&
              competence.documentInfoList.length > 0 && (
                <View className="items-center gap-3">
                  <Text variant="subtitle">{t('documents.documents')}</Text>

                  <Button className="w-full">{t('buttons:update')}</Button>

                  {competence.documentInfoList.map(document => (
                    <View
                      key={document.id}
                      className="w-full border-b border-gray-light first:border-b-0"
                    >
                      <Image
                        src={`data:image/png;base64,${imageData}`}
                        // ?src={`data:image/png;base64,${item.guarantorProfile.avatarImageData}`}
                        className="w-[100px] h-[100px] bg-white border-2 border-primary-default"
                      />
                      <Text>{document.originalName}</Text>
                      <Text>{document.description}</Text>

                      <View className="flex-row justify-evenly">
                        <Button>
                          <Ionicons
                            name="cloud-download-outline"
                            size={24}
                            color={Colors.white}
                          />
                        </Button>
                        <Button>
                          <Ionicons
                            name="search-outline"
                            size={24}
                            color={Colors.white}
                          />
                        </Button>
                        <Button
                          buttonColor="error"
                          onPress={() => {
                            setShowDeletingModal(true);
                            setDocumentId(document.id);
                          }}
                        >
                          <Ionicons
                            name="trash-bin-outline"
                            size={24}
                            color={Colors.white}
                          />
                        </Button>
                      </View>
                    </View>
                  ))}
                </View>
              )}

            {competence.reviews > 0 && (
              <View>
                <Text>{t('reviews')}</Text>
                <View className="gap-3">
                  <Text>{competence.avgMark?.toFixed(1)}</Text>
                </View>
              </View>
            )}
          </View>
        )}
      </ScrollView>

      <DeleteCompetenceModal
        showDeletingModal={showDeletingModal}
        setShowDeletingModal={setShowDeletingModal}
        documentId={documentId}
        setDocumentId={setDocumentId}
        // refetchCompetence={refetchCompetenceQuery}
      />
    </SafeAreaView>
  );
};

const InfoBox: FC<InfoBoxProps> = ({ competenceType, children, ...rest }) => {
  return (
    <View
      className={`
        w-full px-3 py-1 border-2 rounded-md
        ${competenceType === EDUCATION ? 'border-competenceType-education' : undefined}
        ${competenceType === JOB ? 'border-competenceType-job' : undefined}
        ${competenceType === SOFTSKILL ? 'border-competenceType-softSkill' : undefined}
        ${competenceType === HARDSKILL_CUSTOM || competenceType === HARDSKILL_LANGUAGE || competenceType === HARDSKILL_DRIVERLICENCE ? 'border-competenceType-hardSkill' : undefined}
    `}
      {...rest}
    >
      {children}
    </View>
  );
};

const DeleteCompetenceModal: FC<DeleteCompetenceModalProps> = ({
  showDeletingModal = false,
  documentId,
  setShowDeletingModal,
  setDocumentId,
  // refetchCompetence,
}) => {
  const { t } = useTranslation(['competence', 'buttons']);
  const { deleteCompetence, isDeleteCompetenceLoading } =
    useDeleteCompetenceById();
  const { handleDeleteDocument, isDeleteDocumentLoading } =
    useDocumentDeleteById();

  function closeModal() {
    setDocumentId(null);
    setShowDeletingModal(false);
  }

  function submitDeleting(
    competenceId: number | null,
    documentId: number | null
  ) {
    if (competenceId && !documentId) deleteCompetence(competenceId);
    if (competenceId && documentId) {
      handleDeleteDocument(documentId);
      // refetchCompetence();
    }
    closeModal();
  }

  return (
    <Modal
      visible={showDeletingModal}
      onDismiss={closeModal}
      onBackdropPress={closeModal}
      animationType="fade"
    >
      <View className="w-[330px] justify-center items-center gap-4 px-3 py-3">
        <Text className="text-center">{t('deleteConfirmation')}</Text>

        <View className="w-full flex-row gap-3">
          <Button
            buttonColor="warning"
            isLoading={isDeleteCompetenceLoading || isDeleteDocumentLoading}
            className="flex-1"
            onPress={() => submitDeleting(competence.id, documentId)}
          >
            {isDeleteCompetenceLoading || isDeleteDocumentLoading ? (
              <Spinner size="small" />
            ) : (
              t('buttons:yes')
            )}
          </Button>

          <Button buttonColor="error" onPress={closeModal} className="flex-1">
            {t('buttons:cancel')}
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default CompetenceScreen;
