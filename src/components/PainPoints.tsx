const PAIN_POINTS = [
  {
    icon: '🏥',
    title: 'Sortie d\'hôpital — vous êtes seul à gérer',
    description:
      'Le médecin a prescrit des injections quotidiennes pendant 10 jours. Le pansement doit être refait tous les 3 jours. Personne ne vous a expliqué qui appeler.',
  },
  {
    icon: '🌙',
    title: 'Une urgence à 3h du matin — où sont les services ?',
    description:
      'Une perfusion à finir, un pansement qui saigne, une chute. SOS Médecin ne fait pas les soins infirmiers. Et tous les cabinets sont fermés.',
  },
  {
    icon: '👴',
    title: 'Un proche fragile — vous courez partout',
    description:
      'Votre parent diabétique a besoin d\'injections quotidiennes. Vous travaillez. Le déplacer en cabinet 2 fois par jour est devenu impossible.',
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vous êtes ici parce que…
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Parce qu'à 2h du matin, les cabinets ne répondent pas.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {PAIN_POINTS.map((pain) => (
            <div
              key={pain.title}
              className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm"
            >
              <div className="text-3xl mb-4">{pain.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {pain.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg">
            5 000+ patients pris en charge à Casablanca.{' '}
            <strong className="text-gray-900">518</strong>{' '}
            ont laissé un avis Google — ils sont tous à 5 étoiles.{' '}
            <a
              href="#comment-ca-marche"
              className="text-brand-600 font-semibold hover:underline"
            >
              Voici comment ça se passe.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
