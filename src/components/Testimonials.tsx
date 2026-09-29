import { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants/services';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/vhMPF5eoP8WZnxcYA';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Show 3 cards at a time on desktop, 1 on mobile
  const getVisible = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % total);
    }
    return indices;
  };

  return (
    <section id="temoignages" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Google Rating Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 bg-brand-50 border border-brand-100 rounded-2xl px-8 py-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-brand-700 leading-none">5.0</div>
            <div className="flex justify-center gap-0.5 mt-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl font-bold text-gray-900">518 avis Google</div>
            <div className="text-gray-500 mt-1">Note parfaite — vérifiée et publique</div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm mt-3 hover:underline"
            >
              Voir tous les avis Google
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="sr-only">(ouvre dans un nouvel onglet)</span>
            </a>
          </div>
          <div className="hidden sm:block w-px h-16 bg-brand-200" />
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900 mb-1">514 × ⭐⭐⭐⭐⭐ · 3 × ⭐⭐⭐⭐ · 1 × ⭐</div>
            <div className="text-brand-700 font-bold text-lg">99,2%</div>
            <div className="text-gray-500 text-sm">Note maximale</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-brand-200" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">24h/24</div>
            <div className="text-gray-500 text-sm mt-1">Disponible 7j/7</div>
          </div>
        </div>

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-600 font-semibold text-sm tracking-wider uppercase">
            Témoignages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Ils ont vécu cette situation. Voici leur histoire.
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative" role="region" aria-label="Témoignages patients">
          {/* Desktop : 3 cards */}
          <div aria-live="polite" aria-atomic="true" className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {getVisible().map((idx) => (
              <TestimonialCard key={idx} testimonial={TESTIMONIALS[idx]} />
            ))}
          </div>

          {/* Mobile : 1 card */}
          <div aria-live="polite" aria-atomic="true" className="md:hidden">
            <TestimonialCard testimonial={TESTIMONIALS[current]} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-400 hover:text-brand-600 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="p-2 flex items-center justify-center"
                  aria-label={`Avis ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                >
                  <span className={`block rounded-full transition-all ${
                    i === current ? 'bg-brand-500 w-6 h-2' : 'bg-gray-300 w-2 h-2'
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-400 hover:text-brand-600 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Link to all reviews */}
          <div className="text-center mt-8">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:underline"
            >
              Voir les 518 avis Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[number] }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 relative flex flex-col">
      {/* Google icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5" role="img" aria-label={`Note : ${testimonial.rating} étoiles sur 5`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          ))}
        </div>
        <svg className="w-5 h-5" viewBox="0 0 24 24" aria-label="Google">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>

      <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-6">
        "{testimonial.text}"
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center">
            <span className="text-brand-700 font-semibold text-sm">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
            <div className="text-gray-400 text-xs">{testimonial.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
