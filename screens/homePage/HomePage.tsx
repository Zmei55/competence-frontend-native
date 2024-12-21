import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

import { Colors, Theme } from 'shared/theme';
import { Text, Stack } from 'shared/ui';
import { useDimensions } from 'shared/hooks';

import CircleIcon from 'shared/icons/Circle';

const heroImage = require('../../shared/images/hero-image.jpg');
const competencyImg = require('../../shared/images/competency.webp');
const feedbackImg = require('../../shared/images/360.webp');
const resumeImg = require('../../shared/images/resume.webp');

interface HomePageScreenProps {}

export const HomePageScreen: React.FC<HomePageScreenProps> = () => {
  const { t } = useTranslation(['aboutProject', 'buttons']);
  const { widthWindow } = useDimensions();

  return (
    <ScrollView>
      <Stack spacing={5}>
        <View
          style={{
            ...styles.heroContainer,
          }}
        >
          <ImageBackground
            source={heroImage}
            resizeMode="cover"
            style={styles.image}
          >
            <Stack spacing={3} style={styles.heroTextContainer}>
              <Text>
                {t('aboutProject:welcome')}

                <Text bold> {t('aboutProject:competenceCenter')}</Text>
              </Text>

              <Text>{t('aboutProject:missionStatement')}</Text>
            </Stack>
          </ImageBackground>
        </View>

        <Stack spacing={3} style={styles.container}>
          <View style={[styles.infoBanner, styles.infoBannerOne]}>
            <Text color="white">{t('aboutProject:identifySkillsBanner')}</Text>
          </View>

          <View style={[styles.infoBanner, styles.infoBannerTwo]}>
            <Text color="white">{t('aboutProject:getFeedbackBanner')}</Text>
          </View>

          <View style={[styles.infoBanner, styles.infoBannerThree]}>
            <Text color="white">{t('aboutProject:produceResumeBanner')}</Text>
          </View>

          <Stack
            direction={widthWindow > 700 ? 'row' : 'column'}
            style={[styles.infoBox, styles.infoBoxOne]}
            spacing={2}
          >
            <Image
              source={competencyImg}
              resizeMode="cover"
              style={{
                width:
                  widthWindow > 700 ? 400 : widthWindow - Theme.spacing(4) * 2,
                height:
                  widthWindow > 700 ? 400 : widthWindow - Theme.spacing(4) * 2,
              }}
            />

            <Stack>
              <Text variant="subtitle" color="white">
                {t('aboutProject:infoBox1Title')}
              </Text>

              <Stack direction="row">
                <View style={styles.iconBox}>
                  <CircleIcon fill={Colors.white} />
                </View>

                <Text
                  color="white"
                  style={{
                    textAlign: 'justify',
                    width: widthWindow - Theme.spacing(4) * 2 - 30,
                  }}
                >
                  {t('aboutProject:infoBox1FirstParagraph')}
                </Text>
              </Stack>

              <Stack direction="row">
                <View style={styles.iconBox}>
                  <CircleIcon fill={Colors.white} />
                </View>

                <Text
                  color="white"
                  style={{
                    textAlign: 'justify',
                    width: widthWindow - Theme.spacing(4) * 2 - 30,
                  }}
                >
                  {t('aboutProject:infoBox1SecondParagraph')}
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            direction={widthWindow > 700 ? 'row' : 'column'}
            style={[styles.infoBox, styles.infoBoxTwo]}
            spacing={2}
          >
            <Image
              source={feedbackImg}
              resizeMode="cover"
              style={{
                width:
                  widthWindow > 700 ? 400 : widthWindow - Theme.spacing(4) * 2,
                height:
                  widthWindow > 700 ? 400 : widthWindow - Theme.spacing(4) * 2,
              }}
            />

            <Stack>
              <Text variant="subtitle" color="white">
                {t('aboutProject:infoBox2Title')}
              </Text>

              <Stack direction="row">
                <View style={styles.iconBox}>
                  <CircleIcon fill={Colors.white} />
                </View>

                <Text
                  color="white"
                  style={{
                    textAlign: 'justify',
                    width: widthWindow - Theme.spacing(4) * 2 - 30,
                  }}
                >
                  {t('aboutProject:infoBox2FirstParagraph')}
                </Text>
              </Stack>

              <Stack direction="row">
                <View style={styles.iconBox}>
                  <CircleIcon fill={Colors.white} />
                </View>

                <Text
                  color="white"
                  style={{
                    textAlign: 'justify',
                    width: widthWindow - Theme.spacing(4) * 2 - 30,
                  }}
                >
                  {t('aboutProject:infoBox2SecondParagraph')}
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            direction={widthWindow > 700 ? 'row' : 'column'}
            style={[styles.infoBox, styles.infoBoxThree]}
            spacing={2}
          >
            <Image
              source={resumeImg}
              resizeMode="cover"
              style={{
                width:
                  widthWindow > 700 ? 400 : widthWindow - Theme.spacing(4) * 2,
                height:
                  widthWindow > 700 ? 400 : widthWindow - Theme.spacing(4) * 2,
              }}
            />

            <Stack>
              <Text variant="subtitle" color="white">
                {t('aboutProject:infoBox3Title')}
              </Text>

              <Stack direction="row">
                <View style={styles.iconBox}>
                  <CircleIcon fill={Colors.white} />
                </View>

                <Text
                  color="white"
                  style={{
                    textAlign: 'justify',
                    width: widthWindow - Theme.spacing(4) * 2 - 30,
                  }}
                >
                  {t('aboutProject:infoBox3FirstParagraph')}
                </Text>
              </Stack>

              <Stack direction="row">
                <View style={styles.iconBox}>
                  <CircleIcon fill={Colors.white} />
                </View>

                <Text
                  color="white"
                  style={{
                    textAlign: 'justify',
                    width: widthWindow - Theme.spacing(4) * 2 - 30,
                  }}
                >
                  {t('aboutProject:infoBox3SecondParagraph')}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: 300,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  heroTextContainer: {
    paddingHorizontal: Theme.spacing(3),
  },
  container: {
    paddingHorizontal: Theme.spacing(1),
    paddingBottom: Theme.spacing(6),
  },
  infoBanner: {
    borderRadius: 15,
    paddingVertical: Theme.spacing(2),
    paddingHorizontal: Theme.spacing(3),
  },
  infoBannerOne: {
    maxWidth: 500,
    backgroundColor: Colors.primaryLight,
  },
  infoBannerTwo: {
    maxWidth: 650,
    backgroundColor: Colors.primary,
  },
  infoBannerThree: {
    backgroundColor: Colors.primaryDark,
  },
  infoBox: {
    borderRadius: 10,
    padding: Theme.spacing(3),
  },
  infoBoxOne: {
    backgroundColor: Colors.primaryLight,
  },
  infoBoxTwo: {
    backgroundColor: Colors.primary,
  },
  infoBoxThree: {
    backgroundColor: Colors.primaryDark,
  },
  iconBox: {
    width: 30,
    height: 30,
  },
});
