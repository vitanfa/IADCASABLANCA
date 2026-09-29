import { trackConversion } from '../lib/analytics';

const STEPS = [
  {
    number: '1',
    title: 'Appelez ou WhatsApp',
    description:
      'Vous décrivez le soin en 2 minutes. Notre équipe confirme si elle peut intervenir et donne le tarif.',
  },
  {
    number: '2',
    title: 'Notre infirmier se déplace',
    description:
      'Notre infirmier arrive sous 1h. Matériel stérile à usage unique.',
  },
  {
    number: '3',
    title: 'Le soin est fait, le médecin informé',
    description:
      'Acte réalisé selon protocoles hospitaliers. Compte-rendu envoyé à votre médecin traitant.',
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold text-sm tracking-wider uppercase">
            Comment ça marche
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            3 étapes. Pas de dossier compliqué.
          </h2>
          <p className="text-gray-500 text-lg">
            Répond en 30 minutes par téléphone ou WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 lg:gap-16 max-w-4xl mx-auto">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center text-2xl font-bold mb-5 shadow-lg shadow-brand-500/30">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+212663219441"
            onClick={() => trackConversion('call')}
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-500/30 text-lg"
          >
            Appeler maintenant — 06 63 21 94 41
          </a>
        </div>

      </div>
    </section>
  );
}
