import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
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
