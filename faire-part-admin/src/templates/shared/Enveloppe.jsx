import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LecteurMusique from './LecteurMusique';

/* =========================================================
   INITIALLES DES MARIÉS
   "Awa et Talla" → "A & T"
========================================================= */

function getInitiales(nomsMaries) {
  if (!nomsMaries) return '';

  const mots = nomsMaries
    .trim()
    .split(/\s+(?:et|&)\s+/i)
    .filter(Boolean);

  if (mots.length >= 2) {
    const premier = mots[0].trim().charAt(0).toUpperCase();
    const second = mots[1].trim().charAt(0).toUpperCase();

    return `${premier} & ${second}`;
  }

  const lettres = nomsMaries
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((mot) => mot.charAt(0).toUpperCase());

  return lettres.slice(0, 2).join(' & ');
}

/* =========================================================
   FLEUR DÉCORATIVE
========================================================= */

function Fleur({ className = '', taille = 'text-5xl', rotation = 0 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.65, 1, 0.65],
        scale: [0.96, 1.04, 0.96],
        rotate: [rotation - 2, rotation + 2, rotation - 2],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className={`relative ${taille}`}>
        <span className="absolute inset-0 text-[#D7A5AD]">✿</span>
        <span className="relative text-[#EBC6CC]">✿</span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PETITE BRANCHE FLORALE
========================================================= */

function BrancheFlorale({ className = '', miroir = false }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div
        className={`relative w-36 h-36 ${
          miroir ? '-scale-x-100' : ''
        }`}
      >
        {/* Tige */}
        <div
          className="
            absolute
            left-[48%]
            top-[18%]
            w-[2px]
            h-[90px]
            bg-[#9EAD88]/70
            rotate-[38deg]
            origin-top
          "
        />

        {/* Feuilles */}
        <span className="absolute top-10 left-12 text-[#A9B695] text-xl rotate-[-35deg]">
          ❧
        </span>

        <span className="absolute top-16 left-20 text-[#A9B695] text-lg rotate-[35deg]">
          ❧
        </span>

        <span className="absolute top-24 left-8 text-[#A9B695] text-sm rotate-[-20deg]">
          ❧
        </span>

        {/* Fleurs */}
        <span className="absolute top-1 left-4 text-[#E7B8C0] text-4xl">
          ✿
        </span>

        <span className="absolute top-9 left-20 text-[#D79BA7] text-3xl">
          ✿
        </span>

        <span className="absolute top-20 left-2 text-[#F0CDD2] text-2xl">
          ✿
        </span>

        {/* Petits boutons floraux */}
        <span className="absolute top-4 left-24 text-[#D6B477] text-xs">
          ✦
        </span>

        <span className="absolute top-28 left-20 text-[#D6B477] text-xs">
          ✦
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   COMPOSANT PRINCIPAL
========================================================= */

export default function Enveloppe({
  nomsMaries,
  musiqueUrl,
  onOuvrir,
  children,
}) {
  const [ouverte, setOuverte] = useState(false);
  const [animationTerminee, setAnimationTerminee] = useState(false);

  useEffect(() => {
    if (!ouverte) return;

    const timer = setTimeout(() => {
      setAnimationTerminee(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, [ouverte]);

  function handleClick() {
    if (ouverte) return;

    setOuverte(true);
    onOuvrir?.();
  }

  const initiales = getInitiales(nomsMaries);

  return (
    <>
      {/* =====================================================
          MUSIQUE
      ===================================================== */}

      <LecteurMusique
        url={musiqueUrl}
        demarrer={ouverte}
      />

      <AnimatePresence mode="wait">
        {!animationTerminee && (
          <motion.div
            className="
              fixed inset-0
              z-[9999]
              flex items-center justify-center
              overflow-hidden
              bg-[#F8EDEF]
              px-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              transition: {
                duration: 0.9,
                ease: 'easeInOut',
              },
            }}
          >
            {/* =================================================
                FOND ROMANTIQUE
            ================================================= */}

            <div
              className="
                absolute inset-0
                bg-[radial-gradient(
                  ellipse_at_center,
                  #fffdfb_0%,
                  #f9e9ed_48%,
                  #efd4dc_100%
                )]
              "
            />

            {/* Lumière centrale */}

            <motion.div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[520px]
                h-[520px]
                rounded-full
                bg-[#fffaff]/80
                blur-[100px]
              "
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Halos roses */}

            <motion.div
              className="
                absolute
                -left-40
                bottom-[-120px]
                w-[450px]
                h-[450px]
                rounded-full
                bg-[#D99DAF]/20
                blur-[100px]
              "
              animate={{
                x: [0, 25, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className="
                absolute
                -right-40
                top-[-120px]
                w-[450px]
                h-[450px]
                rounded-full
                bg-[#D9B878]/15
                blur-[100px]
              "
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* =================================================
                FLEURS DANS LES COINS
            ================================================= */}

            <BrancheFlorale
              className="top-0 left-0 -translate-x-5 -translate-y-3"
            />

            <BrancheFlorale
              className="top-0 right-0 translate-x-5 -translate-y-3"
              miroir
            />

            <BrancheFlorale
              className="bottom-0 left-0 -translate-x-5 translate-y-5"
              miroir
            />

            <BrancheFlorale
              className="bottom-0 right-0 translate-x-5 translate-y-5"
            />

            {/* Fleurs supplémentaires */}

            <Fleur
              className="top-[17%] left-[13%]"
              taille="text-3xl"
              rotation={-20}
            />

            <Fleur
              className="top-[25%] right-[13%]"
              taille="text-2xl"
              rotation={20}
            />

            <Fleur
              className="bottom-[23%] left-[12%]"
              taille="text-2xl"
              rotation={15}
            />

            <Fleur
              className="bottom-[19%] right-[12%]"
              taille="text-3xl"
              rotation={-15}
            />

            {/* =================================================
                PARTICULES DORÉES
            ================================================= */}

            {[
              { top: '15%', left: '28%' },
              { top: '20%', right: '28%' },
              { top: '45%', left: '8%' },
              { top: '51%', right: '8%' },
              { bottom: '18%', left: '30%' },
              { bottom: '15%', right: '30%' },
            ].map((item, index) => (
              <motion.span
                key={index}
                className="
                  absolute
                  text-[#C8A15D]
                  text-xs
                  pointer-events-none
                "
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                }}
                animate={{
                  opacity: [0.2, 0.9, 0.2],
                  scale: [0.7, 1.3, 0.7],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + index * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.4,
                }}
              >
                ✦
              </motion.span>
            ))}

            {/* =================================================
                CONTENU CENTRAL
            ================================================= */}

            <div
              className="
                relative
                z-20
                flex
                flex-col
                items-center
                justify-center
                w-full
                max-w-[620px]
              "
            >
              {/* Texte supérieur */}

              <motion.div
                className="text-center mb-8 sm:mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.9,
                }}
              >
                <p
                  className="
                    uppercase
                    tracking-[0.4em]
                    text-[9px]
                    sm:text-[10px]
                    text-[#A66D7B]
                  "
                >
                  Une histoire d'amour
                </p>

                <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="w-10 sm:w-14 h-px bg-[#C6A06A]/60" />

                  <span className="text-[#C6A06A] text-xs">
                    ❦
                  </span>

                  <div className="w-10 sm:w-14 h-px bg-[#C6A06A]/60" />
                </div>
              </motion.div>

              {/* =================================================
                  ENVELOPPE FLORALE
              ================================================= */}

              <motion.div
                className="
                  relative
                  w-[min(91vw,560px)]
                  aspect-[1.5/1]
                  [perspective:1600px]
                "
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.88,
                }}
                animate={{
                  opacity: 1,
                  y: [0, -5, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: {
                    duration: 0.9,
                  },
                  scale: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                {/* Ombre */}

                <motion.div
                  className="
                    absolute
                    left-[8%]
                    right-[8%]
                    bottom-[-28px]
                    h-[32px]
                    rounded-full
                    bg-[#8D5967]/20
                    blur-[18px]
                  "
                  animate={{
                    scaleX: [1, 0.93, 1],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Corps de l'enveloppe */}

                <div
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[8px]
                    border
                    border-[#D1B17B]/80
                    bg-gradient-to-br
                    from-[#FFFDFC]
                    via-[#F9EDEF]
                    to-[#EBCFD7]
                    shadow-[0_25px_60px_rgba(133,78,96,0.2)]
                  "
                >
                  {/* Texture douce */}

                  <div
                    className="
                      absolute inset-0
                      bg-[radial-gradient(
                        circle_at_25%_20%,
                        rgba(255,255,255,0.95),
                        transparent 35%
                      )]
                    "
                  />

                  {/* Motifs floraux sur l'enveloppe */}

                  <div className="absolute top-0 left-0 text-[#DCAAB6]/60 text-7xl -translate-x-5 -translate-y-5">
                    ❀
                  </div>

                  <div className="absolute top-0 right-0 text-[#DCAAB6]/60 text-7xl translate-x-5 -translate-y-5">
                    ❀
                  </div>

                  <div className="absolute bottom-0 left-0 text-[#DCAAB6]/50 text-6xl -translate-x-4 translate-y-4">
                    ❀
                  </div>

                  <div className="absolute bottom-0 right-0 text-[#DCAAB6]/50 text-6xl translate-x-4 translate-y-4">
                    ❀
                  </div>

                  {/* Poche inférieure */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-[62%]
                      bg-gradient-to-b
                      from-[#F8E8EC]
                      via-[#F2DCE3]
                      to-[#E8C6D1]
                      [clip-path:polygon(0_0,50%_54%,100%_0,100%_100%,0_100%)]
                    "
                  />

                  {/* Bordure florale centrale */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-[50%]
                      h-px
                      bg-[#C9A66F]/40
                    "
                  />

                  {/* Petits ornements */}

                  <span className="absolute left-[8%] top-[43%] text-[#C8A15D]/50 text-sm">
                    ✦
                  </span>

                  <span className="absolute right-[8%] top-[43%] text-[#C8A15D]/50 text-sm">
                    ✦
                  </span>
                </div>

                {/* =================================================
                    CARTE INTÉRIEURE
                ================================================= */}

                <motion.div
                  className="
                    absolute
                    z-[4]
                    left-1/2
                    bottom-[8%]
                    -translate-x-1/2
                    w-[60%]
                    h-[75%]
                    bg-[#FFFDFC]
                    border
                    border-[#D5B77F]/70
                    shadow-[0_15px_35px_rgba(91,57,69,0.16)]
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                  "
                  initial={{ y: 0 }}
                  animate={{
                    y: ouverte ? -190 : 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Cadre intérieur */}

                  <div
                    className="
                      absolute
                      inset-[8px]
                      border
                      border-[#D3B47B]/50
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-[13px]
                      border
                      border-[#D3B47B]/20
                    "
                  />

                  {/* Petit motif floral */}

                  <span className="absolute top-3 left-4 text-[#D9AAB5]/60 text-xl">
                    ❀
                  </span>

                  <span className="absolute bottom-3 right-4 text-[#D9AAB5]/60 text-xl">
                    ❀
                  </span>

                  <div className="relative z-10 text-center px-4">
                    <p
                      className="
                        uppercase
                        tracking-[0.35em]
                        text-[7px]
                        text-[#A77B85]
                      "
                    >
                      Invitation
                    </p>

                    <div
                      className="
                        font-serif
                        text-2xl
                        sm:text-3xl
                        italic
                        text-[#704653]
                        mt-3
                      "
                    >
                      {initiales}
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-3">
                      <span className="w-5 h-px bg-[#C6A06A]" />

                      <span className="text-[#C6A06A] text-[10px]">
                        ❦
                      </span>

                      <span className="w-5 h-px bg-[#C6A06A]" />
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    RUBAN VERTICAL ROSE
                ================================================= */}

                <motion.div
                  className="
                    absolute
                    z-[7]
                    top-0
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    w-[42px]
                    pointer-events-none
                    overflow-hidden
                  "
                  animate={{
                    opacity: ouverte ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.7,
                  }}
                >
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-r
                      from-[#C98E9D]
                      via-[#F1D0D8]
                      to-[#C98E9D]
                    "
                  />

                  <div className="absolute left-0 top-0 bottom-0 w-px bg-[#A96F7D]/40" />

                  <div className="absolute right-0 top-0 bottom-0 w-px bg-[#A96F7D]/40" />
                </motion.div>

                {/* =================================================
                    RABAT SUPÉRIEUR FLORAL
                ================================================= */}

                <motion.div
                  className="
                    absolute
                    z-[8]
                    top-0
                    left-0
                    right-0
                    h-[76%]
                    origin-top
                    [clip-path:polygon(0_0,100%_0,50%_76%)]
                    bg-gradient-to-b
                    from-[#FFFDFC]
                    via-[#F9E9EE]
                    to-[#EBCED8]
                    border-t
                    border-[#D1B17B]
                    [backface-visibility:hidden]
                  "
                  animate={{
                    rotateX: ouverte ? -175 : 0,
                  }}
                  transition={{
                    duration: 1.15,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Décoration florale du rabat */}

                  <div className="absolute top-[10%] left-[8%] text-[#D8A5B1]/50 text-3xl">
                    ❀
                  </div>

                  <div className="absolute top-[10%] right-[8%] text-[#D8A5B1]/50 text-3xl">
                    ❀
                  </div>

                  {/* Ligne décorative */}

                  <div
                    className="
                      absolute
                      inset-[9px]
                      [clip-path:polygon(0_0,100%_0,50%_76%)]
                      border
                      border-[#CBA86E]/30
                    "
                  />
                </motion.div>

                {/* =================================================
                    SCEAU FLORAL CENTRAL
                ================================================= */}

                <motion.button
                  type="button"
                  onClick={handleClick}
                  aria-label="Ouvrir l'invitation"
                  className="
                    absolute
                    z-[20]
                    left-1/2
                    top-[51%]
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[116px]
                    h-[116px]
                    sm:w-[128px]
                    sm:h-[128px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    outline-none
                    bg-gradient-to-br
                    from-[#E9BFC8]
                    via-[#C98C9D]
                    to-[#A96578]
                    shadow-[0_18px_38px_rgba(123,62,82,0.3)]
                  "
                  animate={
                    ouverte
                      ? {
                          scale: 1.18,
                          y: -5,
                          opacity: 0,
                        }
                      : {
                          y: [0, -4, 0],
                          scale: [1, 1.025, 1],
                        }
                  }
                  whileHover={
                    !ouverte
                      ? {
                          scale: 1.08,
                          rotate: 2,
                        }
                      : undefined
                  }
                  whileTap={
                    !ouverte
                      ? {
                          scale: 0.92,
                        }
                      : undefined
                  }
                  transition={
                    ouverte
                      ? {
                          duration: 0.7,
                          ease: 'easeOut',
                        }
                      : {
                          y: {
                            duration: 3.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                          scale: {
                            duration: 3.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }
                  }
                >
                  {/* Bordures dorées */}

                  <div
                    className="
                      absolute
                      inset-[5px]
                      rounded-full
                      border
                      border-[#F5DDA4]/90
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-[11px]
                      rounded-full
                      border
                      border-[#F5DDA4]/50
                    "
                  />

                  {/* Fleur centrale */}

                  <span className="absolute top-[14px] text-[#F9DFE4] text-xl">
                    ✿
                  </span>

                  <span className="absolute bottom-[13px] text-[#F9DFE4] text-xl">
                    ✿
                  </span>

                  {/* Initiales */}

                  <span
                    className="
                      relative
                      z-10
                      font-serif
                      text-[28px]
                      sm:text-[32px]
                      tracking-wide
                      text-[#FFF0D1]
                      drop-shadow-[0_2px_3px_rgba(90,45,60,0.35)]
                    "
                  >
                    {initiales}
                  </span>
                </motion.button>

                {/* =================================================
                    INDICATION D'OUVERTURE
                ================================================= */}

                <motion.div
                  className="
                    absolute
                    z-[30]
                    left-1/2
                    bottom-[-72px]
                    -translate-x-1/2
                    flex
                    flex-col
                    items-center
                    text-center
                    whitespace-nowrap
                  "
                  animate={{
                    opacity: ouverte ? 0 : 1,
                    y: ouverte ? 10 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <p
                    className="
                      font-serif
                      italic
                      text-[19px]
                      sm:text-[21px]
                      text-[#754957]
                    "
                  >
                    Ouvrez votre invitation
                  </p>

                  <p
                    className="
                      mt-1.5
                      uppercase
                      tracking-[0.28em]
                      text-[7px]
                      sm:text-[8px]
                      text-[#A77B85]
                    "
                  >
                    Touchez le sceau floral
                  </p>
                </motion.div>
              </motion.div>

              {/* =================================================
                  SIGNATURE
              ================================================= */}

              <motion.div
                className="mt-24 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.2,
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 sm:w-12 h-px bg-[#C6A06A]/60" />

                  <span className="text-[#C6A06A] text-xs">
                    ❦
                  </span>

                  <div className="w-8 sm:w-12 h-px bg-[#C6A06A]/60" />
                </div>

                <p
                  className="
                    mt-3
                    uppercase
                    tracking-[0.28em]
                    text-[7px]
                    text-[#A77B85]
                  "
                >
                  Avec toute notre affection
                </p>
              </motion.div>
            </div>

            {/* =================================================
                FLASH D'OUVERTURE
            ================================================= */}

            <AnimatePresence>
              {ouverte && (
                <motion.div
                  className="
                    fixed
                    inset-0
                    z-[9998]
                    pointer-events-none
                    bg-[#FFF9FC]
                  "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{
                    duration: 1.2,
                    times: [0, 0.3, 1],
                    ease: 'easeOut',
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          INVITATION PRINCIPALE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.025,
          y: 10,
        }}
        animate={{
          opacity: animationTerminee ? 1 : 0,
          scale: animationTerminee ? 1 : 1.025,
          y: animationTerminee ? 0 : 10,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}