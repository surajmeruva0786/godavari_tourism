import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SightseeingPackages } from './components/SightseeingPackages';
import { AccommodationPackages } from './components/AccommodationPackages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { BookingModal } from './components/BookingModal';
import { LanguageContext, translations, type Language } from './utils/translations';
import { AppProvider, useApp } from './utils/AppContext';

function AppContent() {
  const [language, setLanguage] = useState<Language>('english');
  const { isAdmin } = useApp();

  if (isAdmin) {
    return (
      <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
        <AdminDashboard />
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <SightseeingPackages />
        <AccommodationPackages />
        <Contact />
        <Footer />
        <BookingModal />
      </div>
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