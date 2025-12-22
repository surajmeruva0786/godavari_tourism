import { Clock, CheckCircle2, Users, Bed } from 'lucide-react';
import { useTranslation } from '../utils/translations';
import { useApp } from '../utils/AppContext';

export function AccommodationPackages() {
  const { t, language } = useTranslation();
  const { packages } = useApp();

  const accommodationPackages = packages.filter(pkg => pkg.type === 'accommodation');

  const handleBookNow = (pkg: any) => {
    const event = new CustomEvent('openBookingModal', {
      detail: {
        type: 'accommodation',
        persons: pkg.persons,
        title: pkg.title[language]
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <section id="accommodation" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            {t.accommodationTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.accommodationSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodationPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${pkg.image}')` }} />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Bed className="h-5 w-5" />
                    <span>{pkg.persons} {pkg.persons === 1 ? t.person : t.persons}</span>
                  </div>
                  <span className="text-2xl text-emerald-600">{pkg.price}</span>
                </div>

                <h3 className="text-xl text-gray-900 mb-2">
                  {pkg.title[language]}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {pkg.description[language]}
                </p>

                <div className="flex items-center gap-2 text-gray-700 mb-4">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span>{t.duration}: {pkg.duration[language]}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-4">
                  <p className="text-sm text-gray-700 mb-3">{t.inclusions}:</p>
                  <ul className="space-y-2">
                    {pkg.inclusions[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleBookNow(pkg)}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  {t.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}