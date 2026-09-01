import { useEffect, useState } from 'react';

function calculerRestant(dateMariage) {
  const diff = new Date(dateMariage) - new Date();
  if (diff <= 0) return { jours: 0, heures: 0, minutes: 0, secondes: 0 };

  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ dateMariage }) {
  const [restant, setRestant] = useState(() => calculerRestant(dateMariage));

  useEffect(() => {
    const interval = setInterval(() => setRestant(calculerRestant(dateMariage)), 1000);
    return () => clearInterval(interval);
  }, [dateMariage]);

  const unites = [
    { label: 'Jours', value: restant.jours },
    { label: 'Heures', value: restant.heures },
    { label: 'Minutes', value: restant.minutes },
    { label: 'Secondes', value: restant.secondes },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {unites.map((u) => (
        <div key={u.label} className="text-center">
          <div className="text-3xl font-serif text-amber-700">{u.value}</div>
          <div className="text-xs uppercase tracking-wide text-stone-500">{u.label}</div>
        </div>
      ))}
    </div>
  );
}