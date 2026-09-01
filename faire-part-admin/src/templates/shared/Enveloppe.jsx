import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LecteurMusique from './LecteurMusique';

function getInitiales(nomsMaries) {
  const mots = nomsMaries.split(/\s+et\s+/i);

  if (mots.length < 2) {
    return nomsMaries.slice(0, 2).toUpperCase();
  }

  return mots
    .map((m) => m.trim()[0]?.toUpperCase())
    .join(' & ');
}

export default function Enveloppe({
  nomsMaries,
  musiqueUrl,
  onOuvrir,
  children,
}) {
  const [ouverte, setOuverte] = useState(false);

  function handleClick() {
    setOuverte(true);
    onOuvrir?.();
  }

  return (
    <>
      {/* ================= MUSIQUE ================= */}
      <LecteurMusique
        url={musiqueUrl}
        demarrer={ouverte}
      />

      <AnimatePresence>
        {!ouverte && (
          <motion.div
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              overflow-hidden
              bg-[#F7F0E7]
              px-5
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* ================= DECORATIONS ================= */}

            {/* Halo haut gauche */}
            <div
              className="
                absolute
                -top-32
                -left-32
                w-80
                h-80
                rounded-full
                bg-[#D9A6A6]/20
                blur-3xl
              "
            />

            {/* Halo bas droit */}
            <div
              className="
                absolute
                -bottom-40
                -right-32
                w-96
                h-96
                rounded-full
                bg-[#8C5968]/10
                blur-3xl
              "
            />

            {/* Ornements extérieurs */}
            <div className="absolute top-8 left-8 text-[#B28A61]/60 text-4xl">
              ❦
            </div>

            <div className="absolute top-8 right-8 text-[#B28A61]/60 text-4xl rotate-90">
              ❦
            </div>

            <div className="absolute bottom-8 left-8 text-[#B28A61]/60 text-4xl -rotate-90">
              ❦
            </div>

            <div className="absolute bottom-8 right-8 text-[#B28A61]/60 text-4xl rotate-180">
              ❦
            </div>


            {/* ================= CARTE ================= */}

            <motion.div
              className="
                relative
                w-full
                max-w-md
                bg-[#FFFDF9]
                border
                border-[#C9A66B]/60
                px-8
                py-14
                md:px-14
                md:py-16
                text-center
                shadow-[0_25px_70px_rgba(75,55,45,0.18)]
              "
              initial={{
                scale: 0.92,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >

              {/* ================= DOUBLE CADRE ================= */}

              <div
                className="
                  absolute
                  inset-3
                  border
                  border-[#D8C4A4]/60
                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  inset-5
                  border
                  border-[#D8C4A4]/20
                  pointer-events-none
                "
              />


              {/* ================= COINS ================= */}

              <span className="absolute top-3 left-3 text-[#C5A77D]">
                ✦
              </span>

              <span className="absolute top-3 right-3 text-[#C5A77D]">
                ✦
              </span>

              <span className="absolute bottom-3 left-3 text-[#C5A77D]">
                ✦
              </span>

              <span className="absolute bottom-3 right-3 text-[#C5A77D]">
                ✦
              </span>


              {/* ================= CONTENU ================= */}

              <div className="relative z-10">

                {/* Petit texte */}
                <motion.p
                  className="
                    uppercase
                    tracking-[0.45em]
                    text-[9px]
                    md:text-[10px]
                    text-[#A47778]
                    mb-6
                  "
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Le bonheur se partage
                </motion.p>


                {/* Ornement */}
                <div className="flex items-center justify-center gap-3 mb-6">

                  <div className="w-12 h-px bg-[#C9A66B]" />

                  <span className="text-[#B28A61] text-lg">
                    ❦
                  </span>

                  <div className="w-12 h-px bg-[#C9A66B]" />

                </div>


                {/* Titre */}
                <motion.h1
                  className="
                    font-serif
                    italic
                    text-3xl
                    md:text-4xl
                    text-[#49343D]
                    font-normal
                  "
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Vous êtes invité(e)
                </motion.h1>

                <p
                  className="
                    font-serif
                    italic
                    text-sm
                    text-[#8A797B]
                    mt-3
                  "
                >
                  à partager un moment précieux
                </p>


                {/* ================= SCEAU ================= */}

                <div className="flex justify-center mt-10 mb-9">

                  <motion.button
                    onClick={handleClick}
                    className="
                      relative
                      w-28
                      h-28
                      rounded-full
                      cursor-pointer
                      bg-gradient-to-br
                      from-[#D1A15C]
                      via-[#B77958]
                      to-[#7D4D5B]
                      shadow-[0_15px_35px_rgba(80,55,45,0.28)]
                      flex
                      items-center
                      justify-center
                      outline-none
                    "
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                      boxShadow:
                        '0 20px 45px rgba(80,55,45,0.35)',
                    }}
                    whileTap={{
                      scale: 0.9,
                      rotate: -5,
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >

                    {/* Cercle extérieur */}
                    <div
                      className="
                        absolute
                        inset-1.5
                        rounded-full
                        border
                        border-[#F7E5C5]/70
                      "
                    />

                    {/* Cercle intérieur */}
                    <div
                      className="
                        absolute
                        inset-4
                        rounded-full
                        border
                        border-[#F7E5C5]/30
                      "
                    />

                    {/* Initiales */}
                    <span
                      className="
                        relative
                        z-10
                        font-serif
                        italic
                        text-3xl
                        text-[#FFF8EA]
                      "
                    >
                      {getInitiales(nomsMaries)}
                    </span>

                    {/* Petit ornement */}
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-1/2
                        -translate-x-1/2
                        bg-[#FFFDF9]
                        px-2
                        text-[#B28A61]
                        text-xs
                      "
                    >
                      ❦
                    </span>

                  </motion.button>

                </div>


                {/* ================= INSTRUCTION ================= */}

                <motion.p
                  className="
                    font-serif
                    italic
                    text-base
                    text-[#65575C]
                  "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Touchez le sceau
                </motion.p>

                <p
                  className="
                    uppercase
                    tracking-[0.3em]
                    text-[8px]
                    text-[#A47778]
                    mt-2
                  "
                >
                  pour ouvrir votre invitation
                </p>


                {/* ================= ORNEMENT FINAL ================= */}

                <div className="flex items-center justify-center gap-3 mt-9">

                  <div className="w-8 h-px bg-[#D8C4A4]" />

                  <span className="text-[#C9A66B] text-xs">
                    ✦
                  </span>

                  <div className="w-8 h-px bg-[#D8C4A4]" />

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* ================= INVITATION ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: ouverte ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: ouverte ? 0.3 : 0,
        }}
      >
        {children}
      </motion.div>

    </>
  );
}