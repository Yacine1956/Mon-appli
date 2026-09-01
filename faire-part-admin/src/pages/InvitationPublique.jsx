import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import templateRegistry from '../templates/templateRegistry';
import Enveloppe from '../templates/shared/Enveloppe';

export default function InvitationPublique() {
  const { slug } = useParams();
  const [invitation, setInvitation] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/public/invitations/${slug}`)
      .then((res) => setInvitation(res.data.data))
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-stone-500">Invitation introuvable.</p>
      </div>
    );
  }

  if (!invitation) return null;

  const TemplateComponent = templateRegistry[invitation.template] || templateRegistry.royal_gold;

  return (
    <Enveloppe nomsMaries={invitation.noms_maries} musiqueUrl={invitation.musique_url}>
      <TemplateComponent invitation={invitation} />
    </Enveloppe>
  );
}