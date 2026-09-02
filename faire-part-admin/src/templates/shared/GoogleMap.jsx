
import { motion } from 'framer-motion';

export default function GoogleMap({ adresse }) {
  if (!adresse) return null;

  const query = encodeURIComponent(adresse);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section className="relative max-w-4xl mx-auto px-5 py-14 overflow-hidden">

      {/* Halo décoratif en arrière-plan */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-amber-200/20 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Petit élément décoratif */}
      <motion.div
        className="absolute top-8 left-8 text-amber-500/50 text-xl"
        animate={{
          rotate: [0, 15, -15, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ✦
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 text-amber-500/50 text-xl"
        animate={{
          rotate: [0, -15, 15, 0],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ✦
      </motion.div>

      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-transparent to-amber-400"
          />

          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="text-amber-500 text-sm"
          >
            ✦
          </motion.span>

          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px bg-gradient-to-l from-transparent to-amber-400"
          />
        </div>

        <p className="text-[11px] uppercase tracking-[0.35em] text-amber-700 font-medium">
          Le lieu de notre bonheur
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-serif text-stone-800">
          Retrouvez-nous
        </h2>

        <p className="mt-2 text-sm text-stone-500 italic">
          Nous avons hâte de vous retrouver pour célébrer ce jour avec vous
        </p>
      </motion.div>

      {/* Carte */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -5,
        }}
        className="relative"
      >

        {/* Halo autour de la carte */}
        <div className="absolute -inset-3 rounded-[2rem] bg-amber-200/20 blur-xl" />

        {/* Cadre extérieur */}
        <div className="relative rounded-[1.7rem] bg-gradient-to-br from-amber-300/70 via-white to-amber-200/50 p-[1px] shadow-[0_25px_70px_rgba(120,90,40,0.18)]">

          <div className="relative overflow-hidden rounded-[1.65rem] bg-white p-2">

            {/* Carte Google Maps */}
            <div className="relative h-[320px] md:h-[390px] overflow-hidden rounded-[1.35rem]">

              <iframe
                src={src}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: 'block',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de la réception"
                className="w-full h-full"
              />

              {/* Légère couche esthétique */}
              <div className="absolute inset-0 pointer-events-none rounded-[1.35rem] ring-1 ring-inset ring-white/40" />

            </div>

            {/* Barre inférieure élégante */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-3 px-4 py-4"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
                  />
                  <circle cx="12" cy="9" r="2.3" />
                </svg>
              </span>

              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-amber-600">
                  Réception
                </p>

                <p className="text-xs text-stone-500 mt-0.5 max-w-[250px] truncate">
                  {adresse}
                </p>
              </div>

              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-1.5 h-1.5 rounded-full bg-amber-500"
              />
            </motion.div>

          </div>
        </div>

        {/* Décoration flottante */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-4 right-8 md:right-12 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-amber-100"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">
            📍 Notre rendez-vous
          </span>
        </motion.div>

      </motion.div>

      {/* Signature décorative */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex justify-center items-center gap-3 mt-7"
      >
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-300" />

        <motion.span
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-amber-500 text-sm"
        >
          ♡
        </motion.span>

        <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-300" />
      </motion.div>

    </section>
  );
}

