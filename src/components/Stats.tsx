const STATS = [
  { value: '5 000+', label: 'Patients soignés' },
  { value: '5.0 ★', label: '518 avis Google' },
  { value: '24h/24', label: 'Disponibilité' },
  { value: '30 min', label: 'Temps de réponse' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-brand-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-brand-100 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
