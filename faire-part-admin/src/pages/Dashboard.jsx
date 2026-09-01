import { useEffect, useState } from 'react';
import api from '../api/axios';
import StatCard from '../components/StatCard';

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get('/api/dashboard').then((res) => setStats(res.data));
  }, []);

  if (!stats) return <p>Chargement...</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-stone-800 mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard label="Clients" value={stats.clients_total} />
        <StatCard label="Commandes" value={stats.commandes_total} />
        <StatCard label="Commandes en attente" value={stats.commandes_en_attente} />
        <StatCard label="Invitations publiées" value={stats.invitations_publiees} />
        <StatCard label="Revenus (FCFA)" value={Number(stats.revenus_total).toLocaleString('fr-FR')} />
        <StatCard label="RSVP reçus" value={stats.rsvps_total} />
      </div>
    </div>
  );
}