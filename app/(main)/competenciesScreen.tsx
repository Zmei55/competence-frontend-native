import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { currentUserIdSelector } from '@/redux/auth';
import {
  professionListSelector,
  driverLicenceSelector,
  industryListSelector,
  jobTitleListSelector,
  languageSelector,
  languageLevelSelector,
  skillLevelSelector,
} from '@/redux/administration';
import { useAppSelector } from '@/hooks';
import {
  useGetAllCompetasByUserId,
  useTranslationCompetenceType,
} from '@/hooks/competence';
import { Button, Spinner, Text } from '@/components/ui';
import {
  EDUCATION,
  JOB,
  SOFTSKILL,
  HARDSKILL,
  HARDSKILL_CUSTOM,
  HARDSKILL_LANGUAGE,
  HARDSKILL_DRIVERLICENCE,
} from '@/constants/Constants';
import { Colors } from '@/constants/Colors';
import {
  findListItemById,
  firstLatterToUpperCase,
  showMonthYear,
} from '@/helpers';
import { TCompetenceForList } from '@/types/competence';

import Ionicons from '@expo/vector-icons/Ionicons';

import { competenceList } from '@/constants/data/competenceList';

interface CompetenceArticleProps {
  competence: TCompetenceForList;
}

const CompetenciesScreen: React.FC = () => {
  const currentUserId = useAppSelector(currentUserIdSelector);
  const {
    // competenceList,
    handleGetAllCompetas,
    isCompetencesLoading,
  } = useGetAllCompetasByUserId();
  const { t } = useTranslation(['competence', 'buttons']);

  useEffect(() => {
    if (currentUserId) handleGetAllCompetas(currentUserId);
  }, [currentUserId, handleGetAllCompetas]);

  return (
    <SafeAreaView className="flex-1 mt-[64px]">
      <ScrollView>
        <View className="px-3 py-3 gap-3">
          <View className="gap-3">
            <Button>{t('buttons:addCompetence')}</Button>
            <Button>{t('buttons:showUserCompetencies')}</Button>
          </View>

          {isCompetencesLoading && (
            <View className="h-[300px] justify-center">
              <Spinner size="large" color="primary" />
            </View>
          )}

          {competenceList && !isCompetencesLoading && (
            <View className="gap-3">
              {competenceList.map(competence => (
                <CompetenceArticle
                  key={competence.id}
                  competence={competence}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CompetenceArticle: FC<CompetenceArticleProps> = ({ competence }) => {
  const { t } = useTranslation(['competence', 'buttons']);
  const industryList = useAppSelector(industryListSelector);
  const professionList = useAppSelector(professionListSelector);
  const skillLevelList = useAppSelector(skillLevelSelector);
  const jobTitleList = useAppSelector(jobTitleListSelector);
  const languageList = useAppSelector(languageSelector);
  const languageLevelList = useAppSelector(languageLevelSelector);
  const driverLicenceList = useAppSelector(driverLicenceSelector);
  const { translationCompetenceType } = useTranslationCompetenceType();

  const {
    competaType,
    confirmed,
    trustIndex,
    title,
    competenceDate,
    jobSkill,
    hardSkill,
    educationSkill,
  } = competence;

  return (
    <TouchableOpacity
      onPress={() => console.log('click id: ', competence.id)}
      className={`
        px-4 py-3 rounded-2xl shadow-slate-950 shadow-lg
        ${competaType === EDUCATION ? 'bg-competenceType-education' : undefined}
        ${competaType === JOB ? 'bg-competenceType-job' : undefined}
        ${competaType === SOFTSKILL ? 'bg-competenceType-softSkill' : undefined}
        ${competaType === HARDSKILL_CUSTOM || competaType === HARDSKILL_LANGUAGE || competaType === HARDSKILL_DRIVERLICENCE ? 'bg-competenceType-hardSkill' : undefined}
        `} // градиент добавить
      activeOpacity={0.7}
    >
      <View className="min-h-40 gap-3">
        <View className="flex-row justify-between flex-wrap">
          <View className="flex-row gap-3">
            <Text color="white">
              {competaType.slice(0, 10) === HARDSKILL
                ? translationCompetenceType(competaType.slice(0, 10))
                : translationCompetenceType(competaType)}
            </Text>

            {confirmed && (
              <Ionicons
                name="checkmark-sharp"
                size={24}
                color={Colors.primary.default}
              />
            )}
          </View>

          <Text color="white">{`${t('trustIndex')}: ${trustIndex}`}</Text>
        </View>

        <View className="px-3 items-center bg-white rounded-3xl">
          <Text
            variant="subtitle"
            style={[
              competaType === EDUCATION && {
                color: Colors.competenceType.education,
              },
              competaType === JOB && {
                color: Colors.competenceType.job,
              },
              competaType === SOFTSKILL && {
                color: Colors.competenceType.softSkill,
              },
              (competaType === HARDSKILL_CUSTOM ||
                competaType === HARDSKILL_LANGUAGE ||
                competaType === HARDSKILL_DRIVERLICENCE) && {
                color: Colors.competenceType.hardSkill,
              },
            ]}
          >
            {title}
          </Text>
        </View>

        <View>
          {hardSkill && (
            <>
              <Text color="white">
                {translationCompetenceType(competaType)}
              </Text>

              {hardSkill.hardSkillCustom && (
                <>
                  {hardSkill.hardSkillCustom.industryId && industryList && (
                    <Text color="white">
                      {
                        findListItemById(
                          industryList,
                          hardSkill.hardSkillCustom.industryId
                        )?.name
                      }
                    </Text>
                  )}
                  {hardSkill.hardSkillCustom.skillLevelId && skillLevelList && (
                    <Text color="white">
                      {
                        findListItemById(
                          skillLevelList,
                          hardSkill.hardSkillCustom.skillLevelId
                        )?.description
                      }
                    </Text>
                  )}
                </>
              )}

              {hardSkill.hardSkillLanguage && (
                <>
                  {hardSkill.hardSkillLanguage.languageId && languageList && (
                    <Text color="white">
                      {
                        findListItemById(
                          languageList,
                          hardSkill.hardSkillLanguage.languageId
                        )?.description
                      }
                    </Text>
                  )}
                  {hardSkill.hardSkillLanguage.languageLevelId &&
                    languageLevelList && (
                      <Text color="white">
                        {
                          findListItemById(
                            languageLevelList,
                            hardSkill.hardSkillLanguage.languageLevelId
                          )?.description
                        }
                      </Text>
                    )}
                </>
              )}

              {hardSkill.hardSkillDriverLicence && (
                <>
                  {hardSkill.hardSkillDriverLicence.driverLicenceId &&
                    driverLicenceList && (
                      <View className="flex-row gap-1">
                        <Text color="white">Kl:</Text>
                        <Text color="white">
                          {
                            findListItemById(
                              driverLicenceList,
                              hardSkill.hardSkillDriverLicence.driverLicenceId
                            )?.description
                          }
                        </Text>
                      </View>
                    )}
                </>
              )}
            </>
          )}

          {educationSkill && (
            <>
              {educationSkill.professionId && professionList && (
                <Text color="white">
                  {firstLatterToUpperCase(
                    findListItemById(
                      professionList,
                      educationSkill.professionId
                    )?.name
                  )}
                </Text>
              )}
            </>
          )}

          {jobSkill && (
            <>
              {jobSkill.industryId && industryList && (
                <Text color="white">
                  {findListItemById(industryList, jobSkill.industryId)?.name}
                </Text>
              )}
              {jobSkill.companyName && (
                <Text color="white">{jobSkill.companyName}</Text>
              )}
              {jobSkill.jobTitleId && jobTitleList && (
                <Text color="white">
                  {firstLatterToUpperCase(
                    findListItemById(jobTitleList, jobSkill.jobTitleId)?.name
                  )}
                </Text>
              )}
            </>
          )}
        </View>
      </View>

      <View className="items-end">
        {competenceDate && (
          <Text color="white">{showMonthYear(competenceDate)}</Text>
        )}

        {jobSkill && jobSkill.jobEndDate && !competenceDate && (
          <Text color="white">{showMonthYear(jobSkill.jobEndDate)}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CompetenciesScreen;
