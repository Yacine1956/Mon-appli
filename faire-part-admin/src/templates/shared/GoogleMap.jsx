export default function GoogleMap({ adresse }) {
  if (!adresse) return null;

  const query = encodeURIComponent(adresse);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section className="max-w-2xl mx-auto py-16 px-6">
      <p className="text-center uppercase text-xs tracking-widest text-amber-600 mb-8">Localisation</p>
      <div className="rounded-lg overflow-hidden border border-amber-200 shadow-sm">
        <iframe
          src={src}
          width="100%"
          height="320"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation de la réception"
        />
      </div>
      <p className="text-center text-stone-500 text-sm mt-3">{adresse}</p>
    </section>
  );
}