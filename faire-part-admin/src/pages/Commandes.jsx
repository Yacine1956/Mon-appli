import { useEffect, useState } from 'react';
import api from '../api/axios';
import CommandeModal from '../components/CommandeModal';
import { Link } from 'react-router-dom';

const STATUT_LABELS = {
  en_attente: 'En attente',
  en_preparation: 'En préparation',
  en_revision: 'En révision',
  en_attente_paiement: 'Attente paiement',
  payee: 'Payée',
  livree: 'Livrée',
  terminee: 'Terminée',
  annulee: 'Annulée',
};

export default function Commandes() {
  const [commandes, setCommandes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCommande, setEditingCommande] = useState(null);

  function loadCommandes() {
    api.get('/api/commandes').then((res) => setCommandes(res.data.data));
  }

  useEffect(loadCommandes, []);

  function openCreate() {
    setEditingCommande(null);
    setModalOpen(true);
  }

  function openEdit(commande) {
    setEditingCommande(commande);
    setModalOpen(true);
  }

  function handleSaved() {
    setModalOpen(false);
    loadCommandes();
  }

  async function handleDelete(commande) {
    if (!confirm(`Supprimer cette commande ?`)) return;
    await api.delete(`/api/commandes/${commande.id}`);
    loadCommandes();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-stone-800">Commandes</h1>
        <button onClick={openCreate} className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700">
          + Nouvelle commande
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50 text-stone-500 text-sm">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Prix</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {commandes.map((commande) => (
              <tr key={commande.id} className="border-t border-stone-100">
                <td className="px-4 py-3">{commande.client.nom_complet}</td>
                <td className="px-4 py-3">{Number(commande.prix).toLocaleString('fr-FR')} FCFA</td>
                <td className="px-4 py-3">
                  <span className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded">
                    {STATUT_LABELS[commande.statut]}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link to={`/commandes/${commande.id}`} className="text-stone-600 hover:underline">
                    Voir
                  </Link>
                  <button onClick={() => handleDelete(commande)} className="text-red-600 hover:underline">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
            {commandes.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-stone-400">
                  Aucune commande trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <CommandeModal
          commande={editingCommande}
          onClose={() => setModalOpen(false)}
          onSaved={handleSaved}
        />
      )}
    </div>
  );
}