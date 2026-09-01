import { useState, useEffect } from 'react';
import api from '../api/axios';

export default function ClientModal({ client, onClose, onSaved }) {
  const [form, setForm] = useState({ nom: '', prenom: '', telephone: '', email: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (client) {
      setForm({
        nom: client.nom || '',
        prenom: client.prenom || '',
        telephone: client.telephone || '',
        email: client.email || '',
        notes: client.notes || '',
      });
    }
  }, [client]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      if (client) {
        await api.put(`/api/clients/${client.id}`, form);
      } else {
        await api.post('/api/clients', form);
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
          {client ? 'Modifier le client' : 'Nouveau client'}
        </h2>

        <div>
          <input
            name="prenom"
            placeholder="Prénom"
            value={form.prenom}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
          {errors.prenom && <p className="text-red-600 text-xs mt-1">{errors.prenom[0]}</p>}
        </div>

        <div>
          <input
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
          {errors.nom && <p className="text-red-600 text-xs mt-1">{errors.nom[0]}</p>}
        </div>

        <div>
          <input
            name="telephone"
            placeholder="Téléphone"
            value={form.telephone}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
          {errors.telephone && <p className="text-red-600 text-xs mt-1">{errors.telephone[0]}</p>}
        </div>

        <div>
          <input
            name="email"
            placeholder="Email (optionnel)"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email[0]}</p>}
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