import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
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

interface InfoBoxProps {
  style: StyleProp<ViewStyle>;
  image: ImageSourcePropType;
  title: string;
  firstParagraph: string;
  secondParagraph: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  style,
  image,
  title,
  firstParagraph,
  secondParagraph,
}) => {
  const { widthWindow } = useDimensions();

  return (
    <Stack
      direction={widthWindow > 700 ? 'row' : 'column'}
      style={style}
      spacing={2}
    >
      <Image
        source={image}
        resizeMode="cover"
        style={{
          width: widthWindow > 700 ? 400 : widthWindow - Theme.spacing(4) * 2,
          height: widthWindow > 700 ? 400 : widthWindow - Theme.spacing(4) * 2,
        }}
      />

      <Stack>
        <Text variant="subtitle" color="white">
          {title}
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
            {firstParagraph}
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
            {secondParagraph}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const HomePageScreen: React.FC<HomePageScreenProps> = () => {
  const { t } = useTranslation(['aboutProject', 'buttons']);

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

          <InfoBox
            style={[styles.infoBox, styles.infoBoxOne]}
            image={competencyImg}
            title={t('aboutProject:infoBox1Title')}
            firstParagraph={t('aboutProject:infoBox1FirstParagraph')}
            secondParagraph={t('aboutProject:infoBox1SecondParagraph')}
          />

          <InfoBox
            style={[styles.infoBox, styles.infoBoxTwo]}
            image={feedbackImg}
            title={t('aboutProject:infoBox2Title')}
            firstParagraph={t('aboutProject:infoBox2FirstParagraph')}
            secondParagraph={t('aboutProject:infoBox2SecondParagraph')}
          />

          <InfoBox
            style={[styles.infoBox, styles.infoBoxThree]}
            image={resumeImg}
            title={t('aboutProject:infoBox3Title')}
            firstParagraph={t('aboutProject:infoBox3FirstParagraph')}
            secondParagraph={t('aboutProject:infoBox3SecondParagraph')}
          />
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
