import { motion } from 'framer-motion';

/* =========================================================
   PETITES ÉTOILES
========================================================= */

const stars = [
  { left: '8%', top: '18%', delay: 0 },
  { left: '18%', top: '72%', delay: 1.2 },
  { left: '30%', top: '12%', delay: 2 },
  { left: '72%', top: '18%', delay: 0.7 },
  { left: '86%', top: '65%', delay: 1.8 },
  { left: '94%', top: '30%', delay: 2.5 },
];

function Stars() {
  return (
    <>
      {stars.map((star, index) => (
        <motion.span
          key={index}
          className="absolute text-[10px] text-[#DCC79A]/70 pointer-events-none"
          style={{
            left: star.left,
            top: star.top,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 3 + index * 0.4,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ✦
        </motion.span>
      ))}
    </>
  );
}

/* =========================================================
   GOOGLE MAP
========================================================= */

export default function GoogleMap({ adresse }) {
  if (!adresse) return null;

  const query = encodeURIComponent(adresse);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section className="relative overflow-hidden bg-[#080B20] py-16 md:py-20 px-5">

      {/* =====================================================
          AMBIANCE DE FOND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Halo rose */}
        <motion.div
          className="absolute -top-24 left-[10%] w-72 h-72 rounded-full bg-[#C58FA5]/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Halo champagne */}
        <motion.div
          className="absolute top-1/2 right-[-100px] w-80 h-80 rounded-full bg-[#DCC79A]/10 blur-[110px]"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Halo central */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#422A4D]/20 blur-[100px]" />

        <Stars />

        {/* Lignes décoratives */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DCC79A]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C58FA5]/20 to-transparent" />
      </div>

      {/* =====================================================
          CONTENU
      ===================================================== */}

      <div className="relative max-w-4xl mx-auto">

        {/* ===================================================
            EN-TÊTE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-9"
        >

          {/* Ornement */}
          <div className="flex items-center justify-center gap-4 mb-5">

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-gradient-to-r from-transparent to-[#DCC79A]/70"
            />

            <motion.span
              animate={{
                rotate: [0, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: {
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="text-[#DCC79A] text-sm"
            >
              ✦
            </motion.span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-gradient-to-l from-transparent to-[#DCC79A]/70"
            />

          </div>

          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.38em] text-[#DCC79A]">
            Le lieu de notre bonheur
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-[#FBF7F1]">
            Retrouvez-nous
          </h2>

          <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed text-[#D8D3DD]/70 italic">
            Un endroit choisi pour partager avec vous
            <br className="hidden md:block" />
            l'un des plus beaux moments de notre vie.
          </p>

        </motion.div>

        {/* ===================================================
            CARTE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >

          {/* Halo autour de la carte */}
          <motion.div
            className="absolute -inset-4 rounded-[2rem] bg-[#C58FA5]/10 blur-2xl"
            animate={{
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* =================================================
              CADRE CHAMPAGNE
          ================================================= */}

          <div className="relative rounded-[1.8rem] p-[1px] bg-gradient-to-br from-[#DCC79A]/80 via-[#C58FA5]/40 to-[#DCC79A]/20 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

            <div className="relative rounded-[1.75rem] overflow-hidden bg-[#11152F]">

              {/* =================================================
                  BADGE FLOTTANT
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                className="absolute z-20 top-4 left-1/2 -translate-x-1/2"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#080B20]/85 backdrop-blur-md border border-[#DCC79A]/30 shadow-lg">

                  <motion.span
                    animate={{
                      scale: [1, 1.25, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-[#DCC79A] text-xs"
                  >
                    ✦
                  </motion.span>

                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#FBF7F1]/90 whitespace-nowrap">
                    Notre rendez-vous
                  </span>

                </div>
              </motion.div>

              {/* =================================================
                  CARTE GOOGLE
              ================================================= */}

              <div className="relative h-[280px] md:h-[370px] overflow-hidden">

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

                {/* Bordure intérieure */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20" />

                {/* Dégradé très léger */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#080B20]/20 via-transparent to-transparent" />

              </div>

              {/* =================================================
                  INFOS SOUS LA CARTE
              ================================================= */}

              <div className="relative px-5 py-5 md:py-6 bg-gradient-to-r from-[#11152F] via-[#181B3A] to-[#11152F]">

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">

                  {/* Icône */}
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-[#DCC79A]/30 bg-[#DCC79A]/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-5 h-5 text-[#DCC79A]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
                      />

                      <circle
                        cx="12"
                        cy="9"
                        r="2.3"
                      />
                    </svg>
                  </motion.div>

                  {/* Adresse */}
                  <div className="text-center md:text-left min-w-0">

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#DCC79A]">
                      Réception
                    </p>

                    <p className="mt-1 text-sm text-[#FBF7F1]/80 max-w-[280px] md:max-w-[450px] truncate">
                      {adresse}
                    </p>

                  </div>

                  {/* Petit indicateur */}
                  <motion.span
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#C58FA5]"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              ORNEMENTS FLOTTANTS
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-3 right-5 md:right-10 text-[#DCC79A]/60 text-lg pointer-events-none"
          >
            ✦
          </motion.div>

          <motion.div
            animate={{
              y: [0, 7, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-3 left-6 md:left-12 text-[#C58FA5]/70 text-sm pointer-events-none"
          >
            ✦
          </motion.div>

        </motion.div>

        {/* ===================================================
            SIGNATURE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="flex items-center justify-center gap-3 mt-8"
        >

          <span className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#DCC79A]/50" />

          <motion.span
            animate={{
              scale: [1, 1.18, 1],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-[#C58FA5] text-base"
          >
            ♡
          </motion.span>

          <span className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#DCC79A]/50" />

        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.9,
          }}
          className="mt-3 text-center text-[9px] uppercase tracking-[0.28em] text-[#FBF7F1]/35"
        >
          Nous avons hâte de vous retrouver
        </motion.p>

      </div>
    </section>
  );
}