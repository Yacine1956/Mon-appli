import { useState } from 'react';

export default function PartageBoutons({ url, texte }) {
  const [copie, setCopie] = useState(false);

  const message = encodeURIComponent(`${texte} ${url}`);
  const urlEncodee = encodeURIComponent(url);

  const liens = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${message}`, couleur: 'bg-green-600 hover:bg-green-700' },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${urlEncodee}`, couleur: 'bg-blue-600 hover:bg-blue-700' },
    { label: 'Telegram', href: `https://t.me/share/url?url=${urlEncodee}&text=${encodeURIComponent(texte)}`, couleur: 'bg-sky-500 hover:bg-sky-600' },
  ];

  function copierLien() {
    navigator.clipboard.writeText(url);
    setCopie(true);
    setTimeout(() => setCopie(false), 2000);
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {liens.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 text-white text-sm rounded-full ${l.couleur} transition`}
        >
          {l.label}
        </a>
      ))}
      <button
        onClick={copierLien}
        className="px-4 py-2 bg-stone-700 hover:bg-stone-800 text-white text-sm rounded-full transition"
      >
        {copie ? '✓ Copié !' : 'Copier le lien'}
      </button>
    </div>
  );
}