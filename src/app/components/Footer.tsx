import { useTranslation } from '../utils/translations';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">{t.footerText}</p>
        </div>
      </div>
    </footer>
  );
}
