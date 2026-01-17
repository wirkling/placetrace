import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);

    // Update URL to reflect language
    const currentPath = location.pathname;
    const isOnEnglishPath = currentPath.startsWith('/en');

    if (lang === 'en' && !isOnEnglishPath) {
      // Switch to English: add /en prefix
      const newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
      navigate(newPath);
    } else if (lang === 'de' && isOnEnglishPath) {
      // Switch to German: remove /en prefix
      const newPath = currentPath === '/en' ? '/' : currentPath.replace('/en', '');
      navigate(newPath || '/');
    }
  };

  const isGerman = i18n.language === 'de';

  return (
    <div className="flex items-center bg-primary-foreground/10 rounded-full p-0.5">
      <button
        onClick={() => changeLanguage('de')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
          isGerman
            ? 'bg-coral text-white'
            : 'text-primary-foreground/60 hover:text-primary-foreground'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
          !isGerman
            ? 'bg-coral text-white'
            : 'text-primary-foreground/60 hover:text-primary-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
