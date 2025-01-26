import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ImageBackground,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { isAuthSelector } from '@/redux/auth';
import { useDimensions, useAppSelector } from '@/hooks';
import { Button } from '@/components/ui';
import { Colors } from '@/constants/Colors';

import Ionicons from '@expo/vector-icons/Ionicons';

const heroImage = require('../assets/images/hero-image.jpg');
const competencyImg = require('../assets/images/competency.webp');
const feedbackImg = require('../assets/images/360.webp');
const resumeImg = require('../assets/images/resume.webp');

interface InfoBannerProps {
  text: string;
  className?: string;
}

interface InfoBoxProps {
  image: ImageSourcePropType;
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  containerClassName?: string;
}

const InfoBanner: React.FC<InfoBannerProps> = ({ text, className }) => {
  const { Breakpoints } = useDimensions();

  return (
    <Text
      className={`color-white rounded-lg px-3 py-2 ${Breakpoints.lg ? 'text-3xl' : 'text-2xl'} ${className}`}
    >
      {text}
    </Text>
  );
};

const InfoBox: React.FC<InfoBoxProps> = ({
  image,
  title,
  firstParagraph,
  secondParagraph,
  containerClassName,
}) => {
  const { widthWindow, Breakpoints } = useDimensions();

  return (
    <View
      className={`p-3 rounded-lg gap-2 pb-4 ${Breakpoints.lg ? 'flex-row' : 'flex-col'} ${containerClassName}`}
    >
      <Image
        style={{
          width: Breakpoints.lg ? 350 : widthWindow - 42,
          height: Breakpoints.lg ? 350 : widthWindow - 42,
        }}
        source={image}
        resizeMode="cover"
      />

      <View
        style={{
          width: Breakpoints.lg ? widthWindow - 412 : widthWindow - 52,
        }}
      >
        <Text
          className={`color-white ${Breakpoints.lg ? 'text-4xl' : 'text-3xl'}`}
        >
          {title}
        </Text>

        <View className="flex-row">
          <Ionicons
            className="text-justify py-3 pr-2"
            name="ellipse-sharp"
            size={8}
            color={Colors.white}
          />

          <Text className="text-2xl text-white">{firstParagraph}</Text>
        </View>

        <View className="flex-row">
          <Ionicons
            className="text-justify py-3 pr-2"
            name="ellipse-sharp"
            size={8}
            color={Colors.white}
          />

          <Text className="text-2xl text-white">{secondParagraph}</Text>
        </View>
      </View>
    </View>
  );
};

const App: React.FC = () => {
  const { t } = useTranslation(['home', 'buttons']);
  const { Breakpoints } = useDimensions();
  const isAuth = useAppSelector(isAuthSelector);

  return (
    <SafeAreaView className="flex-1 mt-16">
      <ScrollView>
        <View className="w-full gap-5 mb-4">
          <View className="h-[300px]">
            <ImageBackground
              source={heroImage}
              className="flex-1 justify-center"
              resizeMode="cover"
            >
              <View className="px-3 gap-4">
                <Text className={`${Breakpoints.lg ? 'text-4xl' : 'text-2xl'}`}>
                  {t('welcome')}
                  <Text className="font-bold"> {t('competenceCenter')}</Text>
                </Text>

                <Text
                  className={`${Breakpoints.lg ? 'text-2xl w-[600px]' : 'text-xl text-justify'}`}
                >
                  {t('missionStatement')}
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View className="px-3 gap-3">
            <InfoBanner
              text={t('identifySkillsBanner')}
              className="bg-primary-light  max-w-[500px]"
            />
            <InfoBanner
              text={t('getFeedbackBanner')}
              className="bg-primary-default  max-w-[650px]"
            />
            <InfoBanner
              text={t('produceResumeBanner')}
              className="bg-primary-dark"
            />
          </View>

          <View className="items-center px-3 gap-3">
            <Text className="text-3xl">{t('joinToday')}</Text>

            {!isAuth && (
              <Button
                onPress={() => router.push('/loginScreen')}
                className="w-[250px]"
              >
                {t('continueWithEmail')}
              </Button>
            )}
          </View>

          <View className="px-3 gap-3">
            <InfoBox
              containerClassName="bg-primary-light"
              image={competencyImg}
              title={t('infoBox1Title')}
              firstParagraph={t('infoBox1FirstParagraph')}
              secondParagraph={t('infoBox1SecondParagraph')}
            />

            <InfoBox
              containerClassName="bg-primary-default flex-row-reverse"
              image={feedbackImg}
              title={t('infoBox2Title')}
              firstParagraph={t('infoBox2FirstParagraph')}
              secondParagraph={t('infoBox2SecondParagraph')}
            />

            <InfoBox
              containerClassName="bg-primary-dark"
              image={resumeImg}
              title={t('infoBox3Title')}
              firstParagraph={t('infoBox3FirstParagraph')}
              secondParagraph={t('infoBox3SecondParagraph')}
            />
          </View>
        </View>
      </ScrollView>

      <StatusBar />
    </SafeAreaView>
  );
};

export default App;
