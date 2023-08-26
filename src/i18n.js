import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: require('./locales/en/translation.json')
            },
            fr: {
                translation: require('./locales/fr/translation.json')
            },
            uk: {
                translation: require('./locales/uk/translation.json')
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
