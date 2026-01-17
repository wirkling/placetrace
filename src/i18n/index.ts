import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de.json';
import en from './en.json';

// Detect language from URL path first, then localStorage, default to German
const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'de';

  const path = window.location.pathname;
  if (path.startsWith('/en')) return 'en';

  return localStorage.getItem('language') || 'de';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
