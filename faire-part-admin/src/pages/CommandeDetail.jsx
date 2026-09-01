import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const MOYENS = [
  { value: 'especes', label: 'Espèces' },
  { value: 'wave', label: 'Wave' },
  { value: 'orange_money', label: 'Orange Money' },
  { value: 'virement', label: 'Virement' },
  { value: 'autre', label: 'Autre' },
];

export default function CommandeDetail() {
  const { id } = useParams();
  
  const navigate = useNavigate();
  const [creatingInvitation, setCreatingInvitation] = useState(false);
  const [invitationForm, setInvitationForm] = useState({ noms_maries: '', date_mariage: '', template: 'default' });

  async function handleCreateInvitation(e) {
   e.preventDefault();
   const res = await api.post(`/api/commandes/${id}/invitation`, invitationForm);
   navigate(`/invitations/${res.data.data.id}`);
  }

  const [commande, setCommande] = useState(null);
  const [form, setForm] = useState({
    montant: '', moyen_paiement: 'especes',
    date_paiement: new Date().toISOString().slice(0, 10),
    reference: '', note: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function loadCommande() {
    api.get(`/api/commandes/${id}`).then((res) => setCommande(res.data.data));
  }

  useEffect(loadCommande, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      await api.post(`/api/commandes/${id}/paiements`, form);
      setForm({ ...form, montant: '', reference: '', note: '' });
      loadCommande();
    } catch (err) {
      if (err.response?.status === 422) setErrors(err.response.data.errors);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeletePaiement(paiementId) {
    if (!confirm('Supprimer ce paiement ?')) return;
    await api.delete(`/api/commandes/${id}/paiements/${paiementId}`);
    loadCommande();
  }

  if (!commande) return <p>Chargement...</p>;

  const totalPaye = commande.paiements?.reduce((sum, p) => sum + Number(p.montant), 0) || 0;
  const solde = Number(commande.prix) - totalPaye;

  return (
    <div>
      <Link to="/commandes" className="text-stone-500 hover:underline text-sm">← Retour aux commandes</Link>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl font-semibold text-stone-800">{commande.client.nom_complet}</h1>
        <p className="text-stone-500">
          Prix total : {Number(commande.prix).toLocaleString('fr-FR')} FCFA — Statut : {commande.statut}
        </p>
      </div>
      {/* ------------------------------------------------ */}
      
      <div className="bg-white rounded-lg shadow-sm border border-stone-100 p-6 mb-6">
        {commande.a_une_invitation ? (
            <Link to={`/invitations/${commande.invitation?.id}`} className="text-stone-800 font-medium hover:underline">
                → Voir l'invitation
            </Link>
            ) : (
            <div>
                <h2 className="font-semibold text-stone-800 mb-3">Créer l'invitation</h2>
                {!creatingInvitation ? (
                <button onClick={() => setCreatingInvitation(true)} className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700">
                    + Créer l'invitation
                </button>
                ) : (
                <form onSubmit={handleCreateInvitation} className="space-y-3 max-w-sm">
                    <input
                        placeholder="Noms des mariés (ex: Yacine et Ahmed)"
                        value={invitationForm.noms_maries}
                        onChange={(e) => setInvitationForm({ ...invitationForm, noms_maries: e.target.value })}
                        className="w-full border border-stone-300 rounded px-3 py-2"
                        required
                        />
                    <input
                        type="date"
                        value={invitationForm.date_mariage}
                        onChange={(e) => setInvitationForm({ ...invitationForm, date_mariage: e.target.value })}
                        className="w-full border border-stone-300 rounded px-3 py-2"
                        required
                    />
                    <button type="submit" className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700">
                        Créer
                    </button>
                </form>
                )}
            </div>
            )}
        </div>

{/* --------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Colonne gauche : historique des paiements */}
        <div className="bg-white rounded-lg shadow-sm border border-stone-100 p-6">
          <h2 className="font-semibold text-stone-800 mb-4">Paiements enregistrés</h2>

          <div className="mb-4 p-3 bg-stone-50 rounded flex justify-between text-sm">
            <span>Total payé : <strong>{totalPaye.toLocaleString('fr-FR')} FCFA</strong></span>
            <span className={solde > 0 ? 'text-red-600' : 'text-green-600'}>
              Solde : <strong>{solde.toLocaleString('fr-FR')} FCFA</strong>
            </span>
          </div>

          <ul className="space-y-2">
            {commande.paiements?.map((p) => (
              <li key={p.id} className="flex justify-between items-center border-b border-stone-100 pb-2 text-sm">
                <div>
                  <p>{Number(p.montant).toLocaleString('fr-FR')} FCFA — {p.moyen_paiement}</p>
                  <p className="text-stone-400 text-xs">{p.date_paiement} {p.reference && `· Réf: ${p.reference}`}</p>
                </div>
                <button onClick={() => handleDeletePaiement(p.id)} className="text-red-500 hover:underline text-xs">
                  Supprimer
                </button>
              </li>
            ))}
            {(!commande.paiements || commande.paiements.length === 0) && (
              <p className="text-stone-400 text-sm">Aucun paiement enregistré pour l'instant.</p>
            )}
          </ul>
        </div>

        {/* Colonne droite : formulaire nouveau paiement */}
        <div className="bg-white rounded-lg shadow-sm border border-stone-100 p-6">
          <h2 className="font-semibold text-stone-800 mb-4">Enregistrer un paiement</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                name="montant" type="number" placeholder="Montant (FCFA)"
                value={form.montant} onChange={handleChange}
                className="w-full border border-stone-300 rounded px-3 py-2"
              />
              {errors.montant && <p className="text-red-600 text-xs mt-1">{errors.montant[0]}</p>}
            </div>

            <select
              name="moyen_paiement" value={form.moyen_paiement} onChange={handleChange}
              className="w-full border border-stone-300 rounded px-3 py-2"
            >
              {MOYENS.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>

            <input
              name="date_paiement" type="date"
              value={form.date_paiement} onChange={handleChange}
              className="w-full border border-stone-300 rounded px-3 py-2"
            />

            <input
              name="reference" placeholder="Référence (optionnel)"
              value={form.reference} onChange={handleChange}
              className="w-full border border-stone-300 rounded px-3 py-2"
            />

            <textarea
              name="note" placeholder="Note (optionnel)"
              value={form.note} onChange={handleChange}
              className="w-full border border-stone-300 rounded px-3 py-2" rows={2}
            />

            <button
              type="submit" disabled={loading}
              className="w-full bg-stone-800 text-white rounded py-2 hover:bg-stone-700 disabled:opacity-50"
            >
              {loading ? 'Enregistrement...' : 'Ajouter le paiement'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}