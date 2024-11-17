import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import de_buttons from './locales/de/de_buttons.json';
import de_header from './locales/de/de_header.json';
import de_auth from './locales/de/de_auth.json';
import de_profile from './locales/de/de_profile.json';
import de_guides from './locales/de/de_guides.json';
import de_competence from './locales/de/de_competence.json';
import de_guarantee from './locales/de/de_guarantee.json';
import de_footer from './locales/de/de_footer.json';
import de_shared from './locales/de/de_shared.json';
import de_admin from './locales/de/de_admin.json';
import de_feedback from './locales/de/de_feedback.json';
import de_aboutproject from './locales/de/de_aboutproject.json';
import en_buttons from './locales/en/en_buttons.json';
import en_header from './locales/en/en_header.json';
import en_auth from './locales/en/en_auth.json';
import en_profile from './locales/en/en_profile.json';
import en_guides from './locales/en/en_guides.json';
import en_competence from './locales/en/en_competence.json';
import en_guarantee from './locales/en/en_guarantee.json';
import en_footer from './locales/en/en_footer.json';
import en_shared from './locales/en/en_shared.json';
import en_admin from './locales/en/en_admin.json';
import en_feedback from './locales/en/en_feedback.json';
import en_aboutproject from './locales/en/en_aboutproject.json';
import ru_buttons from './locales/ru/ru_buttons.json';
import ru_header from './locales/ru/ru_header.json';
import ru_auth from './locales/ru/ru_auth.json';
import ru_profile from './locales/ru/ru_profile.json';
import ru_guides from './locales/ru/ru_guides.json';
import ru_competence from './locales/ru/ru_competence.json';
import ru_guarantee from './locales/ru/ru_guarantee.json';
import ru_footer from './locales/ru/ru_footer.json';
import ru_shared from './locales/ru/ru_shared.json';
import ru_admin from './locales/ru/ru_admin.json';
import ru_feedback from './locales/ru/ru_feedback.json';
import ru_aboutproject from './locales/ru/ru_aboutproject.json';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: false,
		fallbackLng: 'en',
		resources: {
			de: {
				buttons: de_buttons,
				header: de_header,
				auth: de_auth,
				profile: de_profile,
				guides: de_guides,
				competence: de_competence,
				guarantee: de_guarantee,
				footer: de_footer,
				shared: de_shared,
				admin: de_admin,
				feedback: de_feedback,
				aboutProject: de_aboutproject,
			},
			en: {
				buttons: en_buttons,
				header: en_header,
				auth: en_auth,
				profile: en_profile,
				guides: en_guides,
				competence: en_competence,
				guarantee: en_guarantee,
				footer: en_footer,
				shared: en_shared,
				admin: en_admin,
				feedback: en_feedback,
				aboutProject: en_aboutproject,
			},
			ru: {
				buttons: ru_buttons,
				header: ru_header,
				auth: ru_auth,
				profile: ru_profile,
				guides: ru_guides,
				competence: ru_competence,
				guarantee: ru_guarantee,
				footer: ru_footer,
				shared: ru_shared,
				admin: ru_admin,
				feedback: ru_feedback,
				aboutProject: ru_aboutproject,
			},
		},
	});

export default i18n;
