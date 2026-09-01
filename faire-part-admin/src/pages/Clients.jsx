import { useEffect, useState } from 'react';
import api from '../api/axios';
import ClientModal from '../components/ClientModal';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);

  function loadClients() {
    api.get('/api/clients', { params: { search } }).then((res) => setClients(res.data.data));
  }

  useEffect(() => {
    const timeout = setTimeout(loadClients, 300);
    return () => clearTimeout(timeout);
  }, [search]);

  function openCreate() {
    setEditingClient(null);
    setModalOpen(true);
  }

  function openEdit(client) {
    setEditingClient(client);
    setModalOpen(true);
  }

  function handleSaved() {
    setModalOpen(false);
    loadClients();
  }

  async function handleDelete(client) {
    if (!confirm(`Supprimer ${client.prenom} ${client.nom} ?`)) return;
    await api.delete(`/api/clients/${client.id}`);
    loadClients();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-stone-800">Clients</h1>
        <button onClick={openCreate} className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700">
          + Nouveau client
        </button>
      </div>

      <input
        placeholder="Rechercher un client..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm border border-stone-300 rounded px-3 py-2 mb-4"
      />

      <div className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50 text-stone-500 text-sm">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Téléphone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Commandes</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-t border-stone-100">
                <td className="px-4 py-3">{client.prenom} {client.nom}</td>
                <td className="px-4 py-3">{client.telephone}</td>
                <td className="px-4 py-3">{client.email || '—'}</td>
                <td className="px-4 py-3">{client.nombre_commandes}</td>
                <td className="px-4 py-3 text-right space-x-3">
                  <button onClick={() => openEdit(client)} className="text-stone-600 hover:underline">
                    Modifier
                  </button>
                  <button onClick={() => handleDelete(client)} className="text-red-600 hover:underline">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-stone-400">
                  Aucun client trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <ClientModal
          client={editingClient}
          onClose={() => setModalOpen(false)}
          onSaved={handleSaved}
        />
      )}
    </div>
  );
}