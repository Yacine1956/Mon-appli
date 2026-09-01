import { useRef, useEffect } from 'react';

export default function LecteurMusique({ url, demarrer }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (demarrer && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Le navigateur peut bloquer l'autoplay même après interaction dans de rares cas — on ignore silencieusement.
      });
    }
  }, [demarrer]);

  if (!url) return null;

  return <audio ref={audioRef} src={url} loop className="hidden" />;
}