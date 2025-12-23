import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageContext, translations, type Language } from './utils/translations';
import { AppProvider } from './utils/AppContext';
import { AppRouter } from './Router';

function AppContent() {
  const [language, setLanguage] = useState<Language>('english');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}