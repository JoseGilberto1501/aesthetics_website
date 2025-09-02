import React, { useState } from 'react';
import styles from '../styles/components/LanguageSelector.module.css';

interface LanguageSelectorProps {
  
}

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'es' ? 'en' : 'es');
    // Aquí va lógica para cambiar el idioma de toda la aplicación
  };

  return (
    <div className={styles.languageSelector}>
      <button 
        onClick={toggleLanguage}
        className={styles.languageBtn}
        aria-label="Cambiar idioma"
      >
        {currentLanguage === 'es' ? 'ES' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageSelector;