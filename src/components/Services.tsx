import {
  Syringe,
  Stethoscope,
  HeartPulse,
  Zap,
  UserCheck,
  Activity,
} from 'lucide-react';
import { SERVICES } from '../constants/services';
import { trackConversion } from '../lib/analytics';

const ICON_MAP: Record<string, React.ElementType> = {
  Syringe,
  Stethoscope,
  HeartPulse,
  Zap,
  UserCheck,
  Activity,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold text-sm tracking-wider uppercase">
            Nos Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Tout ce qu'un infirmier hospitalier fait — chez vous
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Notre infirmier intervient avec le matériel stérile, suivant les mêmes protocoles d'asepsie qu'à l'hôpital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.title}
                className="group relative bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-100 group-hover:bg-brand-500 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+212663219441"
            onClick={() => trackConversion('call')}
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-500/30 text-lg"
          >
            Disponible maintenant — Appeler le 06 63 21 94 41
          </a>
        </div>
      </div>
    </section>
  );
}
