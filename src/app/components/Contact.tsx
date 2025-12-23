import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../utils/translations';
import { useApp } from '../utils/AppContext';

export function Contact() {
  const { t } = useTranslation();
  const { settings } = useApp();

  return (
    <section id="contact" className="py-16 md:py-24 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Phone className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">{t.callUs}</h3>
            <a
              href={`tel:${settings.contactPhone1.replace(/\s/g, '')}`}
              className="text-2xl text-emerald-600 hover:text-emerald-700 transition-colors block mb-2"
            >
              {settings.contactPhone1}
            </a>
            {settings.contactPhone2 && (
              <a
                href={`tel:${settings.contactPhone2.replace(/\s/g, '')}`}
                className="text-xl text-emerald-600 hover:text-emerald-700 transition-colors block"
              >
                {settings.contactPhone2}
              </a>
            )}
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Mail className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">{t.emailUs}</h3>
            <a
              href={`mailto:${settings.contactEmail}`}
              className="text-emerald-600 hover:text-emerald-700 transition-colors break-words"
            >
              {settings.contactEmail}
            </a>
          </div>

          {/* Address */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <MapPin className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">{t.visitUs}</h3>
            <p className="text-gray-600 whitespace-pre-line">
              {settings.contactAddress}
            </p>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl shadow-lg px-8 py-6">
            <Phone className="h-6 w-6 text-emerald-600" />
            <div className="text-center sm:text-left">
              <p className="text-gray-600 mb-1">{t.helplineText}</p>
              <a
                href={`tel:${settings.contactPhone1.replace(/\s/g, '')}`}
                className="text-2xl md:text-3xl text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {settings.contactPhone1}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}