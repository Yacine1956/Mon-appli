import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
import QrCode from '../components/QrCode';

export default function InvitationDetail() {
  const { id } = useParams();
  const [invitation, setInvitation] = useState(null);
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadingMusique, setUploadingMusique] = useState(false);

  function load() {
    api.get(`/api/invitations/${id}`).then((res) => {
      setInvitation(res.data.data);
      setForm(res.data.data);
    });
  }

  useEffect(load, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setErrors({});
    try {
        const payload = {
        ...form,
        date_mariage: form.date_mariage?.slice(0, 10),
        heure_ceremonie: form.heure_ceremonie || null,
        heure_reception: form.heure_reception || null,
        lieu_ceremonie: form.lieu_ceremonie || null,
        lieu_reception: form.lieu_reception || null,
        message_bienvenue: form.message_bienvenue || null,
        };
        const res = await api.put(`/api/invitations/${id}`, payload);
        setInvitation(res.data.data);
        setForm(res.data.data);
    } catch (err) {
        if (err.response?.status === 422) setErrors(err.response.data.errors);
        } finally {
            setSaving(false);
        }
    }

  async function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingPhoto(true);
    const formData = new FormData();
    formData.append('photo', file);

    try {
      await api.post(`/api/invitations/${id}/photos`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      load();
    } catch (err) {
      alert('Erreur lors de l\'upload de la photo.');
    } finally {
      setUploadingPhoto(false);
      e.target.value = '';
    }
  }

  async function handlePhotoDelete(photoId) {
    if (!confirm('Supprimer cette photo ?')) return;
    await api.delete(`/api/invitations/${id}/photos/${photoId}`);
    load();
  }


  async function handleMusiqueUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingMusique(true);
    const formData = new FormData();
    formData.append('musique', file);

    try {
      const res = await api.post(`/api/invitations/${id}/musique`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setInvitation(res.data.data);
      setForm(res.data.data);
    } catch (err) {
      alert('Erreur lors de l\'upload de la musique.');
    } finally {
      setUploadingMusique(false);
      e.target.value = '';
    }
  }

  async function handleMusiqueDelete() {
    if (!confirm('Supprimer la musique ?')) return;
    const res = await api.delete(`/api/invitations/${id}/musique`);
    setInvitation(res.data.data);
    setForm(res.data.data);
  }
  
  function copyLink() {
    navigator.clipboard.writeText(invitation.lien_public);
    alert('Lien copié !');
  }

  if (!invitation || !form) return <p>Chargement...</p>;

  return (
    <div>
      <Link to={`/commandes/${invitation.commande_id}`} className="text-stone-500 hover:underline text-sm">
        ← Retour à la commande
      </Link>

      <div className="mt-4 mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold text-stone-800">{invitation.noms_maries}</h1>
          <p className="text-stone-500 text-sm">
            Statut : <span className="font-medium">{invitation.statut}</span> · Modèle : {invitation.template}
          </p>
        </div>
        <div className="flex items-start gap-4">
          <button onClick={copyLink} className="px-4 py-2 bg-stone-100 text-stone-700 rounded hover:bg-stone-200 text-sm">
            📋 Copier le lien
          </button>
        </div>
        <div className="mb-6">
          <QrCode url={invitation.lien_public} />
        </div>
      </div>

      <p className="text-sm text-stone-400 mb-6 break-all">{invitation.lien_public}</p>

      {Object.keys(errors).length > 0 && (
        <div className="max-w-xl bg-red-50 border border-red-200 text-red-700 text-sm rounded p-3 mb-4">
            Une erreur est survenue : vérifie les champs du formulaire.
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white rounded-lg shadow-sm border border-stone-100 p-6 space-y-4 max-w-xl">
        <div>
          <label className="text-sm text-stone-500">Noms des mariés</label>
          <input
            name="noms_maries" value={form.noms_maries} onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
          {errors.noms_maries && <p className="text-red-600 text-xs mt-1">{errors.noms_maries[0]}</p>}
        </div>

        <div>
          <label className="text-sm text-stone-500">Date du mariage</label>
          <input
            name="date_mariage" type="date" value={form.date_mariage?.slice(0, 10)} onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-stone-500">Heure cérémonie</label>
            <input
              name="heure_ceremonie" type="time" value={form.heure_ceremonie || ''} onChange={handleChange}
              className="w-full border border-stone-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm text-stone-500">Heure réception</label>
            <input
              name="heure_reception" type="time" value={form.heure_reception || ''} onChange={handleChange}
              className="w-full border border-stone-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-stone-500">Lieu cérémonie</label>
          <input
            name="lieu_ceremonie" value={form.lieu_ceremonie || ''} onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm text-stone-500">Lieu réception</label>
          <input
            name="lieu_reception" value={form.lieu_reception || ''} onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm text-stone-500">Message de bienvenue</label>
          <textarea
            name="message_bienvenue" value={form.message_bienvenue || ''} onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2" rows={3}
          />
        </div>

        <div>
          <label className="text-sm text-stone-500">Statut de publication</label>
          <select
            name="statut" value={form.statut} onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2"
          >
            <option value="brouillon">Brouillon</option>
            <option value="preparation">En préparation</option>
            <option value="revision">En révision</option>
            <option value="publiee">Publiée</option>
            <option value="suspendue">Suspendue</option>
            <option value="archivee">Archivée</option>
          </select>
        </div>

        <button
          type="submit" disabled={saving}
          className="w-full bg-stone-800 text-white rounded py-2 hover:bg-stone-700 disabled:opacity-50"
        >
          {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
        </button>
      </form>

      <div className="bg-white rounded-lg shadow-sm border border-stone-100 p-6 max-w-xl mt-6">
        <h2 className="font-semibold text-stone-800 mb-4">Galerie photos</h2>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {invitation.photos?.map((photo) => (
            <div key={photo.id} className="relative group">
              <img src={photo.url} alt="" className="w-full h-24 object-cover rounded" />
              <button
                onClick={() => handlePhotoDelete(photo.id)}
                className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <label className="inline-block px-4 py-2 bg-stone-100 text-stone-700 rounded hover:bg-stone-200 cursor-pointer text-sm">
          {uploadingPhoto ? 'Envoi en cours...' : '+ Ajouter une photo'}
          <input type="file" accept="image/*" onChange={handlePhotoUpload} disabled={uploadingPhoto} className="hidden" />
        </label>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-stone-100 p-6 max-w-xl mt-6">
        <h2 className="font-semibold text-stone-800 mb-4">Musique de fond</h2>

        {invitation.musique_url ? (
          <div className="space-y-3">
            <audio controls src={invitation.musique_url} className="w-full" />
            <button onClick={handleMusiqueDelete} className="text-red-600 text-sm hover:underline">
            Supprimer la musique
            </button>
          </div>
        ) : (
        <label className="inline-block px-4 py-2 bg-stone-100 text-stone-700 rounded hover:bg-stone-200 cursor-pointer text-sm">
          {uploadingMusique ? 'Envoi en cours...' : '+ Ajouter une musique (MP3, WAV, OGG)'}
          <input type="file" accept="audio/*" onChange={handleMusiqueUpload} disabled={uploadingMusique} className="hidden" />
        </label>
        )}
        </div>

    </div>
  );
}