import { useState } from 'react';
import { Menu, X, Globe, Shield } from 'lucide-react';
import { useTranslation, type Language } from '../utils/translations';
import { useApp } from '../utils/AppContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const { isAdmin } = useApp();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const languageLabels = {
    english: 'English',
    telugu: 'తెలుగు',
    hindi: 'हिन्दी'
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <span className="text-emerald-600">Godavari Tourism</span>
              {/* Secret admin button - double click to access */}
              {!isAdmin && (
                <button
                  onDoubleClick={() => setShowAdminLogin(true)}
                  className="opacity-0 hover:opacity-30 transition-opacity"
                  title="Double-click for admin access"
                >
                  <Shield className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {t.home}
              </button>
              <button
                onClick={() => scrollToSection('sightseeing')}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {t.sightseeing}
              </button>
              <button
                onClick={() => scrollToSection('accommodation')}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {t.accommodation}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {t.contact}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-gray-700 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{languageLabels[language]}</span>
                </button>
                {languageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 rounded-lg bg-white shadow-lg border border-gray-200">
                    <button
                      onClick={() => handleLanguageChange('english')}
                      className="w-full px-4 py-2 text-left hover:bg-emerald-50 transition-colors"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange('telugu')}
                      className="w-full px-4 py-2 text-left hover:bg-emerald-50 transition-colors"
                    >
                      తెలుగు
                    </button>
                    <button
                      onClick={() => handleLanguageChange('hindi')}
                      className="w-full px-4 py-2 text-left hover:bg-emerald-50 transition-colors"
                    >
                      हिन्दी
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Mobile Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center gap-1 rounded-lg border border-gray-300 px-2 py-1.5 text-gray-700"
                >
                  <Globe className="h-4 w-4" />
                </button>
                {languageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-28 rounded-lg bg-white shadow-lg border border-gray-200">
                    <button
                      onClick={() => handleLanguageChange('english')}
                      className="w-full px-3 py-2 text-left hover:bg-emerald-50 transition-colors text-sm"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange('telugu')}
                      className="w-full px-3 py-2 text-left hover:bg-emerald-50 transition-colors text-sm"
                    >
                      తెలుగు
                    </button>
                    <button
                      onClick={() => handleLanguageChange('hindi')}
                      className="w-full px-3 py-2 text-left hover:bg-emerald-50 transition-colors text-sm"
                    >
                      हिन्दी
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-200 py-4 md:hidden">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {t.home}
                </button>
                <button
                  onClick={() => scrollToSection('sightseeing')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {t.sightseeing}
                </button>
                <button
                  onClick={() => scrollToSection('accommodation')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {t.accommodation}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {t.contact}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLoginModal onClose={() => setShowAdminLogin(false)} />
      )}
    </>
  );
}

function AdminLoginModal({ onClose }: { onClose: () => void }) {
  const { login } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(username, password);
    if (!success) {
      setError('Invalid username or password');
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl text-gray-900">Admin Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}