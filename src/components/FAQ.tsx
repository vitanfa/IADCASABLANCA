import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Comment réserver un infirmier à domicile à Casablanca ?',
    answer:
      'Appelez ou écrivez sur WhatsApp au 06 63 21 94 41. Notre infirmier répond en direct et confirme sous 30 minutes. Pas besoin d\'ordonnance pour réserver, juste une description rapide du soin.',
  },
  {
    question: 'SOS Healthcare Services se substitue-t-il aux services d\'urgence médicale ?',
    answer:
      'Non. Pour une urgence vitale (douleur thoracique, perte de conscience, hémorragie, AVC, difficulté à respirer), appelez le 15 (SAMU) ou le 150 (Protection Civile). Notre infirmier intervient pour les soins urgents non vitaux : pansement post-traumatique, changement de sonde, perfusion sur prescription.',
  },
  {
    question: 'Tous les soins nécessitent-ils une ordonnance médicale ?',
    answer:
      'Pas forcément. Les injections, perfusions, prélèvements et pansements complexes nécessitent une ordonnance, conformément à la loi 43-13. La garde malade, l\'accompagnement et les soins de confort, non. En cas de doute, appelez-nous au 06 63 21 94 41 : réponse en 2 minutes.',
  },
  {
    question: 'Quels soins infirmiers sont possibles à domicile ?',
    answer:
      'Injections IM, IV ou sous-cutanées, perfusions, prises de sang, pansements simples ou complexes, ablation de fils, suivi post-opératoire, contrôle des constantes (tension, glycémie, température). Notre équipe intervient aussi bien chez les enfants que chez les personnes âgées.',
  },
  {
    question: 'Combien coûte un infirmier à domicile à Casablanca ?',
    answer:
      'Le tarif dépend du type d\'acte, de l\'horaire et de la durée. Tout est annoncé avant l\'intervention — aucune surprise. Les actes courants sont facturés à l\'acte. Des forfaits existent pour les suivis réguliers (post-op, diabète, HTA). Toutes les mutuelles sont acceptées sur ordonnance — notre infirmier fournit la feuille de soins (CNSS, CNOPS, CFE). Pour un devis : 06 63 21 94 41.',
  },
  {
    question: 'L\'infirmier à domicile se déplace-t-il la nuit et les jours fériés ?',
    answer:
      'Oui, 24h/24 et 7j/7, week-ends et jours fériés compris. Notre infirmier a travaillé en services d\'urgence hospitaliers : les nuits font partie du métier. La plupart des quartiers de Casablanca sont couverts en moins de 30 minutes. Appelez le 06 63 21 94 41.',
  },
  {
    question: 'Quelles sont les zones couvertes pour les soins infirmiers à domicile ?',
    answer:
      'Tout Casablanca : Maarif, Ain Diab, Racine, Oasis, Anfa, Bourgogne, Gauthier, CIL, Sidi Maârouf, Hay Hassani, Hay Laymoune, Oulfa, Sidi Bernoussi, Ain Sebaâ, Ghandi, centre-ville. Et aussi Dar Bouazza, Bouskoura et Mohammedia. Pour les zones éloignées, appelez pour confirmer.',
  },
  {
    question: 'Que dois-je préparer avant la visite de l\'infirmier ?',
    answer:
      'Notre infirmier apporte tout le matériel médical. De votre côté : l\'ordonnance si le soin a été prescrit, une pièce d\'identité et un espace dégagé. Les médicaments prescrits doivent être récupérés en pharmacie avant la visite. Pour un suivi post-op, prévoyez le compte-rendu chirurgical.',
  },
  {
    question: 'Un médecin traitant est-il informé des soins à domicile ?',
    answer:
      'Oui. Après chaque intervention, notre infirmier rédige un compte-rendu et l\'envoie à votre médecin traitant par email, WhatsApp ou en main propre. Il inclut l\'acte réalisé, les constantes et les recommandations de suivi.',
  },
  {
    question: 'Le matériel médical est-il fourni par l\'infirmier ?',
    answer:
      'Oui. Seringues à usage unique, compresses, pansements, antiseptiques, gants, tensiomètre, thermomètre, glucomètre, matériel de perfusion. Tout est renouvelé à chaque soin. Seuls les médicaments prescrits sont à récupérer en pharmacie.',
  },
  {
    question: 'Je suis MRE, mon proche est seul à Casablanca. Comment ça marche ?',
    answer:
      'SOS Healthcare a l\'habitude de ces situations. Vous appelez de Paris, Bruxelles ou Madrid, décrivez la situation, notre équipe intervient et envoie le compte-rendu sur WhatsApp avec photo et constantes. Vous restez impliqué à distance comme si vous étiez là. Plusieurs familles MRE font confiance à SOS Healthcare depuis des années pour leurs proches âgés à Casablanca.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-600 font-semibold text-sm tracking-wider uppercase">
            Questions fréquentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Vos questions — réponses directes
          </h2>
          <p className="text-gray-500 text-lg">
            Les réponses aux questions les plus courantes sur les soins
            infirmiers à domicile à Casablanca et dans les zones environnantes.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.question}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
