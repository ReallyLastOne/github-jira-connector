import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import en from './locales/en/translations.json';
import pl from './locales/pl/translations.json';
import {invoke} from "@forge/bridge";

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            pl: {
                translation: pl,
            }
        },
        fallbackLng: 'en', debug: true, react: {
            useSuspense: false
        }, interpolation: {
            escapeValue: false,
        }
    });
const lang = await invoke("getUserLanguage");
i18n.changeLanguage(lang);

export default i18n;