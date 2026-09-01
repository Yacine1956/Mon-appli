import { useState, useEffect } from 'react';
import api from '../api/axios';

const STATUTS = [
  { value: 'en_attente', label: 'En attente' },
  { value: 'en_preparation', label: 'En préparation' },
  { value: 'en_revision', label: 'En révision' },
  { value: 'en_attente_paiement', label: 'En attente de paiement' },
  { value: 'payee', label: 'Payée' },
  { value: 'livree', label: 'Livrée' },
  { value: 'terminee', label: 'Terminée' },
  { value: 'annulee', label: 'Annulée' },
];

export default function CommandeModal({ commande, onClose, onSaved }) {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({ client_id: '', prix: '', statut: 'en_attente', notes: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get('/api/clients', { params: { per_page: 100 } }).then((res) => setClients(res.data.data));
  }, []);

  useEffect(() => {
    if (commande) {
      setForm({
        client_id: commande.client.id,
        prix: commande.prix,
        statut: commande.statut,
        notes: commande.notes || '',
      });
    }
  }, [commande]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      if (commande) {
        await api.put(`/api/commandes/${commande.id}`, form);
      } else {
        await api.post('/api/commandes', form);
      }
      onSaved();
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
        <h2 className="text-lg font-semibold text-stone-800">
          {commande ? 'Modifier la commande' : 'Nouvelle commande'}
        </h2>

        <div>
          <select
            name="client_id"
            value={form.client_id}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          >
            <option value="">-- Choisir un client --</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>{c.prenom} {c.nom}</option>
            ))}
          </select>
          {errors.client_id && <p className="text-red-600 text-xs mt-1">{errors.client_id[0]}</p>}
        </div>

        <div>
          <input
            name="prix"
            type="number"
            placeholder="Prix (FCFA)"
            value={form.prix}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
          {errors.prix && <p className="text-red-600 text-xs mt-1">{errors.prix[0]}</p>}
        </div>

        <div>
          <select
            name="statut"
            value={form.statut}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          >
            {STATUTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <textarea
          name="notes"
          placeholder="Notes (optionnel)"
          value={form.notes}
          onChange={handleChange}
          className="w-full border border-stone-300 rounded px-3 py-2"
          rows={3}
        />

        <div className="flex justify-end gap-2 pt-2">
          <button type="button" onClick={onClose} className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded">
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700 disabled:opacity-50"
          >
            {loading ? 'Enregistrement...' : 'Enregistrer'}
          </button>
        </div>
      </form>
    </div>
  );
}