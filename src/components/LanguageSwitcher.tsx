import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 font-medium px-2"
    >
      {i18n.language === 'de' ? 'EN' : 'DE'}
    </Button>
  );
};

export default LanguageSwitcher;
