import { Clock, Shield, FileText, HeartHandshake, CheckCircle } from 'lucide-react';
import { trackConversion } from '../lib/analytics';

const GUARANTEES = [
  {
    icon: Clock,
    title: 'Sous 1 heure, même la nuit',
    description: 'Sous 1 heure dans la plupart des quartiers, week-ends et jours fériés compris. Disponible 24h/24 sans exception.',
  },
  {
    icon: Shield,
    title: 'Matériel médical stérile',
    description: 'Équipement à usage unique renouvelé à chaque soin. Protocoles hospitaliers respectés.',
  },
  {
    icon: FileText,
    title: 'Rapport transmis au médecin',
    description: 'Compte-rendu détaillé envoyé à votre médecin traitant après chaque intervention.',
  },
  {
    icon: HeartHandshake,
    title: 'Suivi personnalisé',
    description: 'Pas de protocole standard appliqué mécaniquement. Mohamed lit votre dossier, connaît votre traitement, s\'adapte à ce qu\'il trouve chez vous.',
  },
  {
    icon: CheckCircle,
    title: 'Confirmation sous 30 min',
    description: 'Notre équipe confirme chaque demande en moins de 30 minutes.',
  },
];

export default function Guarantees() {
  return (
    <section id="engagements" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-600 font-semibold text-sm tracking-wider uppercase">
            Nos engagements
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Pourquoi 518 patients lui ont mis 5 étoiles
          </h2>
          <p className="text-gray-500 text-lg">
            SOS Healthcare Services n'est pas le seul service infirmier à Casablanca. C'est celui sur qui vous pouvez compter à 3h du matin.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {GUARANTEES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-colors">
                <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
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
