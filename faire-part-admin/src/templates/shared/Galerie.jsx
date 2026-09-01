import { useState } from 'react';

export default function Galerie({ photos }) {
  const [photoActive, setPhotoActive] = useState(null);

  if (!photos || photos.length === 0) return null;

  return (
    <section className="max-w-2xl mx-auto py-16 px-6">
      <p className="text-center uppercase text-xs tracking-widest text-amber-600 mb-8">Galerie</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.url}
            alt=""
            loading="lazy"
            onClick={() => setPhotoActive(photo)}
            className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition"
          />
        ))}
      </div>

      {photoActive && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setPhotoActive(null)}
        >
          <img src={photoActive.url} alt="" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </section>
  );
}