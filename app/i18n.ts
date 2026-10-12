import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EnLanguage from '../lang/EnLanguage.json';
import FrLanguage from '../lang/FrLanguage.json';


const resources = {
  en: { translation: EnLanguage },
  fr: { translation: FrLanguage },
};

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    initImmediate: false,
    interpolation: { escapeValue: false },
  });
}

export default i18n;
