import { useTranslation } from '../utils/translations';
import { useApp } from '../utils/AppContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();
  const { settings } = useApp();

  const openBookingModal = () => {
    const event = new CustomEvent('openBookingModal', {
      detail: {
        type: 'sightseeing',
        persons: 1,
        title: 'General Inquiry'
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1700356596371-2887aa2ea726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2RhdmFyaSUyMHJpdmVyJTIwSW5kaWF8ZW58MXx8fHwxNzY2NDA5OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              {t.heroSubtitle}
            </p>
            <button
              onClick={openBookingModal}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              {t.bookNow}
            </button>
          </div>

          {/* Right Side - Contact Details */}
          <div className="space-y-4">
            <div className="bg-white/95 backdrop-blur rounded-xl shadow-xl p-6">
              <h3 className="text-xl text-gray-900 mb-4">{t.contactTitle}</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t.callUs}</p>
                    <a
                      href={`tel:${settings.contactPhone1.replace(/\s/g, '')}`}
                      className="text-emerald-600 hover:text-emerald-700 transition-colors block"
                    >
                      {settings.contactPhone1}
                    </a>
                    <a
                      href={`tel:${settings.contactPhone2.replace(/\s/g, '')}`}
                      className="text-emerald-600 hover:text-emerald-700 transition-colors block text-sm"
                    >
                      {settings.contactPhone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t.emailUs}</p>
                    <a
                      href={`mailto:${settings.contactEmail}`}
                      className="text-emerald-600 hover:text-emerald-700 transition-colors break-words"
                    >
                      {settings.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t.visitUs}</p>
                    <p className="text-gray-700 text-sm">
                      {settings.contactAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}