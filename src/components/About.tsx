import { ExternalLink } from 'lucide-react';
import { trackConversion } from '../lib/analytics';

const ZONES = [
  'Maarif', 'Ain Diab', 'Racine', 'Oasis', 'Anfa', 'Bourgogne',
  'Gauthier', 'CIL', 'Sidi Maârouf', 'Hay Hassani', 'Hay Laymoune',
  'Oulfa', 'Sidi Bernoussi', 'Ain Sebaâ', 'Ghandi', 'Centre-ville',
  'Dar Bouazza', 'Bouskoura', 'Mohammedia',
];

const SPECIALISATIONS = [
  'Soins post-opératoires (chirurgie générale, orthopédie, gynéco)',
  'Pathologies chroniques (diabète, HTA, insuffisance rénale, chimio ambulatoire)',
  'Soins palliatifs en lien avec le médecin traitant',
  'Expertise en accès veineux complexes : pose de cathéters et perfusions sur veines difficiles',
];

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/vhMPF5eoP8WZnxcYA';

export default function About() {
  return (
    <section id="apropos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Colonne gauche — photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/simo-illustration.svg"
                alt="Mohamed, infirmier urgentiste à domicile à Casablanca — 10 ans d'expérience, 518 avis Google 5/5"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-brand-100 text-sm font-medium">
                Ans d'expérience
              </div>
            </div>
          </div>

          {/* Colonne droite — contenu */}
          <div>
            <span className="text-brand-600 font-semibold text-sm tracking-wider uppercase">
              À propos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              SOS Healthcare Services
            </h2>

            {/* Bloc 1 — accroche */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              SOS Healthcare Services, un service d'infirmiers urgentistes à domicile à Casablanca depuis 10 ans.
            </p>

            {/* Bloc 2 — zones comme pills */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Il se déplace partout à Casablanca
              </h3>
              <div className="flex flex-wrap gap-2">
                {ZONES.map((zone) => (
                  <span
                    key={zone}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            {/* Bloc 3 — spécialisations */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Spécialisé dans
              </h3>
              <ul className="space-y-2">
                {SPECIALISATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-brand-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloc 4 — CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-brand-300 text-brand-600 hover:bg-brand-50 font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                Voir les 518 avis Google
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+212663219441"
                onClick={() => trackConversion('call')}
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                Appeler — 06 63 21 94 41
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
