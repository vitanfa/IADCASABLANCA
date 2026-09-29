import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { trackConversion } from '../lib/analytics';

export default function AppointmentForm() {
  return (
    <section
      id="rendez-vous"
      className="py-20 lg:py-28 bg-brand-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <span className="text-brand-300 font-semibold text-sm tracking-wider uppercase">
          Contact & Rendez-vous
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
          SOS Healthcare Services se déplace chez vous — réponse sous 30 min
        </h2>
        <p className="text-brand-200 text-lg leading-relaxed mb-10">
          Appelez ou écrivez sur WhatsApp — notre équipe vous répond directement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:+212663219441"
            onClick={() => trackConversion('call')}
            className="flex items-center justify-center gap-3 bg-white text-brand-900 font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:bg-brand-50 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            06 63 21 94 41
          </a>
          <a
            href="https://wa.me/212663219441?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20infirmier%20%C3%A0%20domicile%20%C3%A0%20Casablanca."
            onClick={() => trackConversion('whatsapp')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-green-500/30 transition-all hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="w-4 h-4 text-brand-300" />
            </div>
            <div>
              <div className="text-brand-400 text-xs font-medium uppercase tracking-wide mb-0.5">Email</div>
              <a href="mailto:infirmieracasablanca@gmail.com" className="text-white text-sm hover:text-brand-300 transition-colors break-all">
                infirmieracasablanca@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-brand-300" />
            </div>
            <div>
              <div className="text-brand-400 text-xs font-medium uppercase tracking-wide mb-0.5">Zone</div>
              <div className="text-white text-sm">Casablanca et environs</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-brand-300" />
            </div>
            <div>
              <div className="text-brand-400 text-xs font-medium uppercase tracking-wide mb-0.5">Disponibilité</div>
              <div className="text-white text-sm">24h/24 — 7j/7</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone className="w-4 h-4 text-brand-300" />
            </div>
            <div>
              <div className="text-brand-400 text-xs font-medium uppercase tracking-wide mb-0.5">Réponse</div>
              <div className="text-white text-sm">Sous 30 minutes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
