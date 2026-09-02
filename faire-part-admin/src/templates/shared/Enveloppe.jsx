import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LecteurMusique from './LecteurMusique';

/* =========================================================
   INITIALLES
   "Awa et Samba" → "A & S"
========================================================= */

function getInitiales(nomsMaries) {
  if (!nomsMaries) return '';

  // Accepte : "Awa et Talla", "Awa & Talla", "Awa et Talla Sarr"
  const mots = nomsMaries
    .trim()
    .split(/\s+(?:et|&)\s+/i)
    .filter(Boolean);

  if (mots.length >= 2) {
    const premier = mots[0].trim().charAt(0).toUpperCase();
    const second = mots[1].trim().charAt(0).toUpperCase();

    return `${premier} & ${second}`;
  }

  // Si aucun séparateur n'est trouvé
  const lettres = nomsMaries
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((mot) => mot.charAt(0).toUpperCase());

  return lettres.slice(0, 2).join(' & ');
}


export default function Enveloppe({
  nomsMaries,
  musiqueUrl,
  onOuvrir,
  children,
}) {
  const [ouverte, setOuverte] = useState(false);
  const [animationTerminee, setAnimationTerminee] = useState(false);

  /* =========================================================
     FIN DE L'ANIMATION
  ========================================================= */
  useEffect(() => {
    if (!ouverte) return;

    const timer = setTimeout(() => {
      setAnimationTerminee(true);
    }, 1900);

    return () => clearTimeout(timer);
  }, [ouverte]);

  /* =========================================================
     OUVERTURE
  ========================================================= */
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
              bg-[#E9D8C8]
              px-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              transition: {
                duration: 0.8,
                ease: 'easeInOut',
              },
            }}
          >
            {/* =================================================
                FOND LUXUEUX
            ================================================= */}

            <div
              className="
                absolute inset-0
                bg-[radial-gradient(
                  ellipse_at_center,
                  #fffdf9_0%,
                  #f7ece1_42%,
                  #e2cbbb_100%
                )]
              "
            />

            {/* Lumière centrale animée */}
            <motion.div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[500px]
                h-[500px]
                rounded-full
                bg-[#fffaf2]/70
                blur-[100px]
              "
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Halo bordeaux */}
            <motion.div
              className="
                absolute
                -left-32
                bottom-[-100px]
                w-[420px]
                h-[420px]
                rounded-full
                bg-[#7C3E4D]/10
                blur-[100px]
              "
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Halo doré */}
            <motion.div
              className="
                absolute
                -right-32
                top-[-100px]
                w-[420px]
                h-[420px]
                rounded-full
                bg-[#B99155]/12
                blur-[100px]
              "
              animate={{
                x: [0, -20, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* =================================================
                ORNEMENTS AUX COINS
            ================================================= */}

            <motion.div
              className="
                absolute
                top-6
                left-6
                sm:top-10
                sm:left-10
                text-[#A77B49]/55
                text-3xl
                sm:text-4xl
              "
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              ❦
            </motion.div>

            <motion.div
              className="
                absolute
                top-6
                right-6
                sm:top-10
                sm:right-10
                text-[#A77B49]/55
                text-3xl
                sm:text-4xl
                -scale-x-100
              "
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              ❦
            </motion.div>

            <motion.div
              className="
                absolute
                bottom-6
                left-6
                sm:bottom-10
                sm:left-10
                text-[#A77B49]/55
                text-3xl
                sm:text-4xl
                scale-y-[-1]
              "
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              ❦
            </motion.div>

            <motion.div
              className="
                absolute
                bottom-6
                right-6
                sm:bottom-10
                sm:right-10
                text-[#A77B49]/55
                text-3xl
                sm:text-4xl
                -scale-x-100
                scale-y-[-1]
              "
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              ❦
            </motion.div>

            {/* =================================================
                PARTICULES
            ================================================= */}

            {[
              {
                top: '18%',
                left: '17%',
                size: 'text-xs',
              },
              {
                top: '25%',
                right: '16%',
                size: 'text-[9px]',
              },
              {
                top: '44%',
                left: '8%',
                size: 'text-[8px]',
              },
              {
                bottom: '23%',
                left: '15%',
                size: 'text-[10px]',
              },
              {
                bottom: '18%',
                right: '17%',
                size: 'text-xs',
              },
              {
                top: '52%',
                right: '8%',
                size: 'text-[7px]',
              },
              {
                top: '12%',
                right: '35%',
                size: 'text-[7px]',
              },
              {
                bottom: '13%',
                left: '37%',
                size: 'text-[7px]',
              },
            ].map((item, index) => (
              <motion.span
                key={index}
                className={`
                  absolute
                  ${item.size}
                  text-[#B58A50]
                `}
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                }}
                animate={{
                  opacity: [0.15, 0.85, 0.15],
                  scale: [0.7, 1.25, 0.7],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.8 + index * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.35,
                }}
              >
                ✦
              </motion.span>
            ))}

            {/* =================================================
                ZONE CENTRALE
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
              {/* =================================================
                  TEXTE SUPÉRIEUR
              ================================================= */}

              <motion.div
                className="
                  text-center
                  mb-7
                  sm:mb-9
                "
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                }}
              >
                <p
                  className="
                    uppercase
                    tracking-[0.42em]
                    text-[8px]
                    sm:text-[9px]
                    text-[#8D555C]
                  "
                >
                  Le bonheur se partage
                </p>

                <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="w-10 sm:w-14 h-px bg-[#B88A50]/60" />

                  <span className="text-[#B88A50] text-xs">
                    ◆
                  </span>

                  <div className="w-10 sm:w-14 h-px bg-[#B88A50]/60" />
                </div>
              </motion.div>

              {/* =================================================
                  ENVELOPPE
              ================================================= */}

              <motion.div
                className="
                  relative
                  w-[min(92vw,570px)]
                  aspect-[1.58/1]
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
                    duration: 0.8,
                  },
                  scale: {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                {/* =================================================
                    OMBRE
                ================================================= */}

                <motion.div
                  className="
                    absolute
                    left-[8%]
                    right-[8%]
                    bottom-[-30px]
                    h-[35px]
                    rounded-full
                    bg-[#583B32]/20
                    blur-[18px]
                  "
                  animate={{
                    scaleX: [1, 0.94, 1],
                    opacity: [0.5, 0.35, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* =================================================
                    CORPS DE L'ENVELOPPE
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[4px]
                    border
                    border-[#B98A50]
                    bg-gradient-to-br
                    from-[#FFFDF9]
                    via-[#F8EEE3]
                    to-[#E3CBB7]
                    shadow-[inset_0_0_35px_rgba(125,90,62,0.08)]
                  "
                >
                  {/* Texture */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(
                        circle_at_25%_20%,
                        rgba(255,255,255,0.95),
                        transparent 30%
                      )]
                    "
                  />

                  {/* Ligne gauche */}
                  <div
                    className="
                      absolute
                      left-[-15%]
                      bottom-[-50%]
                      w-[85%]
                      h-[120%]
                      rotate-[31deg]
                      bg-[#F1E2D4]
                      border-t
                      border-[#C39D69]/25
                    "
                  />

                  {/* Ligne droite */}
                  <div
                    className="
                      absolute
                      right-[-15%]
                      bottom-[-50%]
                      w-[85%]
                      h-[120%]
                      -rotate-[31deg]
                      bg-[#F0DFD0]
                      border-t
                      border-[#C39D69]/25
                    "
                  />

                  {/* Poche basse */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-[55%]
                      bg-gradient-to-b
                      from-[#F7EADF]
                      via-[#EEDBCA]
                      to-[#DFC4AD]
                      [clip-path:polygon(0_0,50%_55%,100%_0,100%_100%,0_100%)]
                    "
                  />

                  {/* Ligne de la poche */}
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-[54%]
                      h-px
                      bg-[#B78C56]/25
                    "
                  />
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
                    w-[59%]
                    h-[74%]
                    bg-[#FFFDF9]
                    border
                    border-[#C5A06A]/60
                    shadow-[0_15px_35px_rgba(72,47,36,0.18)]
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                  "
                  initial={{
                    y: 0,
                  }}
                  animate={{
                    y: ouverte ? -190 : 0,
                  }}
                  transition={{
                    duration: 1.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Cadre */}
                  <div
                    className="
                      absolute
                      inset-[7px]
                      border
                      border-[#C6A16D]/45
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-[12px]
                      border
                      border-[#C6A16D]/15
                    "
                  />

                  <div className="relative z-10 text-center px-5">
                    <p
                      className="
                        uppercase
                        tracking-[0.38em]
                        text-[7px]
                        text-[#9C7273]
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
                        text-[#583941]
                        mt-3
                      "
                    >
                      {initiales}
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-3">
                      <span className="w-5 h-px bg-[#C19A62]" />
                      <span className="text-[#B6874C] text-[8px]">
                        ❦
                      </span>
                      <span className="w-5 h-px bg-[#C19A62]" />
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    RUBAN
                ================================================= */}

                <motion.div
                  className="
                    absolute
                    z-[7]
                    top-0
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    w-[48px]
                    pointer-events-none
                    overflow-hidden
                  "
                  animate={{
                    opacity: ouverte ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.65,
                  }}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#B28B5F]
                      via-[#F2E2C8]
                      via-50%
                      to-[#B28B5F]
                    "
                  />

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-px
                      bg-[#8F693E]/50
                    "
                  />

                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      bottom-0
                      w-px
                      bg-[#8F693E]/50
                    "
                  />
                </motion.div>

                {/* =================================================
                    RABAT SUPÉRIEUR
                ================================================= */}

                <motion.div
                  className="
                    absolute
                    z-[8]
                    top-0
                    left-0
                    right-0
                    h-[74%]
                    origin-top
                    [clip-path:polygon(0_0,100%_0,50%_76%)]
                    bg-gradient-to-b
                    from-[#FFFDF9]
                    via-[#F7EBE0]
                    to-[#E6CDB7]
                    border-t
                    border-[#B98B53]
                    [backface-visibility:hidden]
                  "
                  animate={{
                    rotateX: ouverte ? -175 : 0,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Cadre du rabat */}
                  <div
                    className="
                      absolute
                      inset-[9px]
                      [clip-path:polygon(0_0,100%_0,50%_76%)]
                      border
                      border-[#C29A63]/30
                    "
                  />

                  {/* Petit motif */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[17%]
                      -translate-x-1/2
                      text-[#B88A50]/35
                      text-sm
                    "
                  >
                    ✦
                  </div>
                </motion.div>

                {/* =================================================
                    SCEAU
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
                    sm:w-[126px]
                    sm:h-[126px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    outline-none
                    bg-gradient-to-br
                    from-[#A85D69]
                    via-[#7C3949]
                    to-[#4B202D]
                    shadow-[0_18px_38px_rgba(65,29,38,0.4)]
                  "
                  animate={
                    ouverte
                      ? {
                          scale: 1.15,
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
                          scale: 0.91,
                        }
                      : undefined
                  }
                  transition={
                    ouverte
                      ? {
                          duration: 0.65,
                          ease: 'easeOut',
                        }
                      : {
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                          scale: {
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }
                  }
                >
                  {/* Cercle doré */}
                  <div
                    className="
                      absolute
                      inset-[5px]
                      rounded-full
                      border
                      border-[#EACB85]/90
                    "
                  />

                  {/* Deuxième cercle */}
                  <div
                    className="
                      absolute
                      inset-[11px]
                      rounded-full
                      border
                      border-[#E7C47D]/40
                    "
                  />

                  {/* Relief */}
                  <div
                    className="
                      absolute
                      inset-[19px]
                      rounded-full
                      border
                      border-[#E7C47D]/20
                    "
                  />

                  {/* Initiales */}
                  <span
                    className="
                      relative
                      z-10
                      font-serif
                      text-[31px]
                      sm:text-[34px]
                      tracking-wide
                      text-[#F4D99A]
                      drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]
                    "
                  >
                    {initiales}
                  </span>

                  {/* Ornement haut */}
                  <span
                    className="
                      absolute
                      top-[22px]
                      text-[#E7C47D]
                      text-[10px]
                    "
                  >
                    ❦
                  </span>

                  {/* Ornement bas */}
                  <span
                    className="
                      absolute
                      bottom-[21px]
                      text-[#E7C47D]
                      text-[10px]
                    "
                  >
                    ❦
                  </span>
                </motion.button>

                {/* =================================================
                    PETIT BADGE OUVERTURE
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
                      text-[#573A40]
                    "
                  >
                    Touchez le sceau
                  </p>

                  <p
                    className="
                      mt-1.5
                      uppercase
                      tracking-[0.3em]
                      text-[7px]
                      sm:text-[8px]
                      text-[#987773]
                    "
                  >
                    pour ouvrir votre invitation
                  </p>
                </motion.div>
              </motion.div>

              {/* =================================================
                  SIGNATURE SOUS L'ENVELOPPE
              ================================================= */}

              <motion.div
                className="
                  mt-24
                  text-center
                "
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.1,
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 sm:w-12 h-px bg-[#C19A63]/60" />

                  <span className="text-[#B6874C] text-xs">
                    ✦
                  </span>

                  <div className="w-8 sm:w-12 h-px bg-[#C19A63]/60" />
                </div>

                <p
                  className="
                    mt-3
                    uppercase
                    tracking-[0.28em]
                    text-[7px]
                    text-[#A48B82]
                  "
                >
                  Avec toute notre affection
                </p>
              </motion.div>
            </div>

            {/* =================================================
                FLASH LORS DE L'OUVERTURE
            ================================================= */}

            <AnimatePresence>
              {ouverte && (
                <motion.div
                  className="
                    fixed
                    inset-0
                    z-[9998]
                    pointer-events-none
                    bg-[#FFF9ED]
                  "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: [0, 0.65, 0],
                  }}
                  transition={{
                    duration: 1.1,
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