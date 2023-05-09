import React from 'react';
import i18n from '../../localization';

interface ILangChangeProps {}
const LangChanger = (props: ILangChangeProps) => {
  const [currentLang, setCurrentLang] = React.useState<string>('en');

  const langs: string[] = ['en', 'nl', 'fr', 'de'];

  const changeLanguage = React.useCallback(
    (lng: string) => () => {
      setCurrentLang(lng);
      i18n.changeLanguage(lng);
    },
    [setCurrentLang]
  );

  return (
    <div className='nbb-lang-changer'>
      {langs.map((lang) => (
        <span
          className={currentLang === lang ? 'selected' : ''}
          onClick={changeLanguage(lang)}
        >
          {lang}
        </span>
      ))}
    </div>
  );
};

export default LangChanger;
