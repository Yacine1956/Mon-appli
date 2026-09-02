
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PartageBoutons({ url, texte }) {
  const [copie, setCopie] = useState(false);

  const message = encodeURIComponent(`${texte} ${url}`);
  const urlEncodee = encodeURIComponent(url);

  const liens = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${message}`,
      couleur: 'from-[#25D366] to-[#128C7E]',
      shadow: 'shadow-green-200',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.847 1.213 3.045.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M20.52 3.449C18.24 1.17 15.218 0 12.01 0 5.387 0 .01 5.377.01 12c0 2.117.553 4.184 1.604 6.004L.011 24l6.14-1.581A11.94 11.94 0 0 0 12.01 24h.005c6.622 0 11.999-5.377 11.999-12 0-3.208-1.18-6.23-3.494-8.551zM12.015 21.89a9.89 9.89 0 0 1-5.042-1.378l-.361-.214-3.644.938.973-3.554-.235-.365A9.877 9.877 0 0 1 2.11 12c0-5.45 4.436-9.89 9.89-9.89 2.64 0 5.121 1.03 6.986 2.896A9.825 9.825 0 0 1 21.89 12c0 5.454-4.436 9.89-9.875 9.89z" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${urlEncodee}`,
      couleur: 'from-[#1877F2] to-[#4267B2]',
      shadow: 'shadow-blue-200',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.007 10.125 11.93v-8.432H7.078v-3.498h3.047V9.406c0-3.017 1.792-4.685 4.533-4.685 1.312 0 2.686.235 2.686.235v2.977h-1.514c-1.491 0-1.956.93-1.956 1.886v2.254h3.328l-.532 3.498h-2.796v8.432C19.612 23.08 24 18.092 24 12.073z" />
        </svg>
      ),
    },
    {
      label: 'Telegram',
      href: `https://t.me/share/url?url=${urlEncodee}&text=${encodeURIComponent(texte)}`,
      couleur: 'from-[#2AABEE] to-[#229ED9]',
      shadow: 'shadow-sky-200',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M21.9 3.2 2.9 10.5c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 1.9 5.8c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.2-.5-1.7-1.6-1.3zm-2.5 3.6-7.8 7.2-.3 3.1-1.4-4.3 8.7-5.5c.4-.2.8-.4.8-.5z" />
        </svg>
      ),
    },
  ];

  function copierLien() {
    navigator.clipboard.writeText(url);
    setCopie(true);

    setTimeout(() => {
      setCopie(false);
    }, 2000);
  }

  return (
    <section className="relative py-14 px-6 overflow-hidden">

      {/* =====================================================
          DÉCORATIONS
      ====================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-72
          h-72
          rounded-full
          bg-amber-100/30
          blur-3xl
          pointer-events-none
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =====================================================
          CONTENU
      ====================================================== */}

      <div className="relative max-w-2xl mx-auto text-center">

        {/* Petit décor */}
        <motion.div
          className="flex justify-center items-center gap-4 mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="w-12 h-px bg-amber-300"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          <motion.span
            className="text-amber-500 text-lg"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            ✦
          </motion.span>

          <motion.span
            className="w-12 h-px bg-amber-300"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        {/* Titre */}
        <motion.p
          className="
            uppercase
            tracking-[0.4em]
            text-[10px]
            text-amber-600
            mb-3
          "
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Faites passer l'amour
        </motion.p>

        <motion.h3
          className="
            font-serif
            text-3xl
            md:text-4xl
            text-gray-800
            mb-4
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Partagez notre bonheur
        </motion.h3>

        <motion.p
          className="
            text-sm
            text-gray-500
            italic
            max-w-md
            mx-auto
            leading-6
            mb-10
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Invitez vos proches à découvrir notre histoire
          et à célébrer avec nous ce moment précieux.
        </motion.p>


        {/* =====================================================
            BOUTONS
        ====================================================== */}

        <div className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-4
        ">

          {liens.map((l, index) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                text-white
                text-sm
                font-medium
                overflow-hidden
                shadow-lg
              "
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + index * 0.12,
                duration: 0.6,
                type: 'spring',
                stiffness: 120,
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.94,
              }}
            >

              {/* Gradient */}
              <span
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-r
                  ${l.couleur}
                `}
              />

              {/* Reflet animé */}
              <motion.span
                className="
                  absolute
                  inset-y-0
                  -left-10
                  w-8
                  bg-white/30
                  skew-x-[-20deg]
                "
                animate={{
                  left: ['-20%', '130%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut',
                }}
              />

              {/* Contenu */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="
                  w-8
                  h-8
                  rounded-full
                  bg-white/20
                  flex
                  items-center
                  justify-center
                  backdrop-blur-sm
                ">
                  {l.icon}
                </span>

                <span>{l.label}</span>
              </span>

            </motion.a>
          ))}


          {/* =================================================
              COPIER
          ================================================== */}

          <motion.button
            type="button"
            onClick={copierLien}
            className="
              group
              relative
              flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              bg-white
              border
              border-gray-200
              text-gray-700
              text-sm
              shadow-sm
              overflow-hidden
            "
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.75,
              duration: 0.6,
              type: 'spring',
              stiffness: 120,
            }}
            whileHover={{
              y: -5,
              scale: 1.05,
              boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
            }}
            whileTap={{
              scale: 0.94,
            }}
          >

            <AnimatePresence mode="wait">

              {copie ? (
                <motion.span
                  key="copie"
                  className="
                    flex
                    items-center
                    gap-3
                    text-green-600
                  "
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                >
                  <span className="
                    w-8
                    h-8
                    rounded-full
                    bg-green-50
                    flex
                    items-center
                    justify-center
                  ">
                    ✓
                  </span>

                  <span>Copié !</span>
                </motion.span>

              ) : (

                <motion.span
                  key="copier"
                  className="
                    flex
                    items-center
                    gap-3
                  "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >

                  <span className="
                    w-8
                    h-8
                    rounded-full
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    group-hover:bg-amber-50
                    transition-colors
                  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="
                        w-4
                        h-4
                        group-hover:text-amber-600
                        transition-colors
                      "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 7.5V6A2.25 2.25 0 0 1 10.5 3.75h7.5A2.25 2.25 0 0 1 20.25 6v7.5a2.25 2.25 0 0 1-2.25 2.25h-1.5m-8.25-8.25h7.5A2.25 2.25 0 0 1 18 9.75v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 6 17.25v-7.5A2.25 2.25 0 0 1 8.25 7.5Z"
                      />
                    </svg>
                  </span>

                  <span>Copier le lien</span>

                </motion.span>
              )}

            </AnimatePresence>

          </motion.button>

        </div>


        {/* =====================================================
            BAS DE SECTION
        ====================================================== */}

        <motion.div
          className="
            flex
            items-center
            justify-center
            gap-3
            mt-10
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >

          <span className="w-10 h-px bg-gray-200" />

          <motion.span
            className="text-amber-400 text-xs"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            ♥
          </motion.span>

          <span className="w-10 h-px bg-gray-200" />

        </motion.div>

      </div>
    </section>
  );
}

