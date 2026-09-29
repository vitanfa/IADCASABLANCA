import { Shield, Sparkles, Clock, Award } from 'lucide-react';
import { trackConversion } from '../lib/analytics';

const BADGES = [
  { icon: Shield, label: 'Urgentiste' },
  { icon: Clock, label: "Sous 1h d'intervention" },
  { icon: Sparkles, label: 'Matériel stérile' },
  { icon: Award, label: '10 ans d\'expérience' },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/webp"
            srcSet="/hero-sm.webp 900w, /hero-lg.webp 1920w"
            sizes="100vw"
          />
          <source
            type="image/jpeg"
            srcSet="/hero-sm.jpg 900w, /hero-lg.jpg 1920w"
            sizes="100vw"
          />
          <img
            src="/hero-lg.jpg"
            alt="Infirmier à domicile à Casablanca - Mohamed, infirmier urgentiste 24h/24"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 bg-brand-500/20 backdrop-blur-sm border border-brand-400/30 text-brand-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
            Disponible maintenant — réponse immédiate
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            L'infirmier à domicile{' '}
            <span className="text-brand-300">le mieux noté</span>{' '}de Casablanca
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5" role="img" aria-label="Note 5 étoiles sur 5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} aria-hidden="true" className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-gray-300 text-sm">&middot; 518 avis Google vérifiés</span>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
            Notre infirmier urgentiste, avec plus de <strong className="text-white">10 ans</strong> d'expérience, intervient à domicile partout à Casablanca — <strong className="text-white">24h/24</strong>, y compris nuits et weekends. Injections, perfusions, pansements, soins post-opératoires.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-12">
            {/* CTA primaire — urgent */}
            <a
              href="tel:+212663219441"
              onClick={() => trackConversion('call')}
              className="inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-500/30"
            >
              <span className="text-lg sm:text-xl">Appeler maintenant</span>
              <span className="text-sm sm:text-xl font-semibold opacity-90">06 63 21 94 41</span>
            </a>
            {/* CTA secondaire — WhatsApp pré-rempli */}
            <a
              href="https://wa.me/212663219441?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20infirmier%20%C3%A0%20domicile%20%C3%A0%20Casablanca."
              onClick={() => trackConversion('whatsapp')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-white font-semibold px-6 py-4 rounded-xl border border-green-500/40 transition-all text-base"
            >
              <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            {/* CTA tertiaire — preuve sociale pour les sceptiques */}
            <a
              href="https://maps.app.goo.gl/vhMPF5eoP8WZnxcYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-4 rounded-xl border border-white/20 transition-all text-sm sm:bg-transparent sm:border-0 sm:px-4 sm:underline sm:underline-offset-4 sm:text-white/80 sm:hover:text-white"
            >
              Voir les 518 avis ↗
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-4 h-4 text-brand-300" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
