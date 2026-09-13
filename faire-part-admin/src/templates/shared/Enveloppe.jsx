import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LecteurMusique from './LecteurMusique';

/* =========================================================
   PALETTE — NUIT ROMANTIQUE
========================================================= */

const COLORS = {
  night: '#080B20',
  nightSoft: '#11152F',
  plum: '#422A4D',
  rose: '#C58FA5',
  roseLight: '#E4B9C7',
  champagne: '#DCC79A',
  champagneLight: '#F1E5C5',
  ivory: '#FBF7F1',
};

/* =========================================================
   INITIALES
   "Awa et Talla" → "A & T"
========================================================= */

function getInitiales(nomsMaries) {
  if (!nomsMaries) return '♥';

  const parties = nomsMaries
    .trim()
    .split(/\s+(?:et|&)\s+/i)
    .filter(Boolean);

  if (parties.length >= 2) {
    return `${parties[0].charAt(0).toUpperCase()} & ${parties[1]
      .charAt(0)
      .toUpperCase()}`;
  }

  const mots = nomsMaries
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (mots.length >= 2) {
    return `${mots[0].charAt(0).toUpperCase()} & ${mots[1]
      .charAt(0)
      .toUpperCase()}`;
  }

  return mots[0]?.charAt(0).toUpperCase() || '♥';
}

/* =========================================================
   ÉTOILE
========================================================= */

function Etoile({
  left,
  top,
  size = 3,
  delay = 0,
  duration = 3,
}) {
  return (
    <motion.span
      className="absolute pointer-events-none"
      style={{
        left,
        top,
        width: size,
        height: size,
        background: COLORS.champagneLight,
        borderRadius: '50%',
        boxShadow: `0 0 ${size * 4}px ${COLORS.champagne}`,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 0.9, 0.25, 0.9, 0],
        scale: [0.5, 1, 0.7, 1.15, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* =========================================================
   PETITE ÉTOILE À 4 BRANCHES
========================================================= */

function Sparkle({
  left,
  top,
  delay = 0,
  scale = 1,
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left,
        top,
        width: 18 * scale,
        height: 18 * scale,
      }}
      initial={{
        opacity: 0,
        rotate: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 1, 0.35, 1, 0],
        rotate: [0, 45, 90, 135, 180],
        scale: [0.4, 1, 0.7, 1.1, 0.4],
      }}
      transition={{
        duration: 3.5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
        style={{
          width: 2 * scale,
          height: 18 * scale,
          background: `linear-gradient(
            to bottom,
            transparent,
            ${COLORS.champagneLight},
            transparent
          )`,
        }}
      />

      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 18 * scale,
          height: 2 * scale,
          background: `linear-gradient(
            to right,
            transparent,
            ${COLORS.champagneLight},
            transparent
          )`,
        }}
      />
    </motion.div>
  );
}

/* =========================================================
   PETAL
========================================================= */

function Petale({
  left,
  top,
  delay = 0,
  duration = 7,
  size = 7,
}) {
  return (
    <motion.span
      className="absolute pointer-events-none rounded-full"
      style={{
        left,
        top,
        width: size,
        height: size * 1.7,
        background: `linear-gradient(
          145deg,
          ${COLORS.roseLight},
          ${COLORS.rose}
        )`,
        opacity: 0.35,
        borderRadius: '80% 20% 80% 20%',
      }}
      initial={{
        opacity: 0,
        y: 20,
        rotate: 0,
      }}
      animate={{
        opacity: [0, 0.5, 0],
        y: [-5, -90, -160],
        x: [0, 15, -5],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* =========================================================
   ORNEMENT BOTANIQUE FIN
========================================================= */

function Ornament({ flip = false }) {
  return (
    <svg
      viewBox="0 0 180 150"
      className={`
        absolute
        w-[130px]
        sm:w-[180px]
        pointer-events-none
        ${flip ? 'scale-x-[-1]' : ''}
      `}
      fill="none"
    >
      <path
        d="M8 142 C35 112, 51 80, 84 51 C111 27, 139 14, 171 8"
        stroke={COLORS.champagne}
        strokeWidth="1"
        opacity=".55"
      />

      <path
        d="M44 104 C35 91, 27 85, 17 81"
        stroke={COLORS.champagne}
        strokeWidth=".8"
        opacity=".45"
      />

      <path
        d="M67 70 C66 55, 60 45, 51 37"
        stroke={COLORS.champagne}
        strokeWidth=".8"
        opacity=".45"
      />

      <path
        d="M102 38 C100 27, 104 18, 112 12"
        stroke={COLORS.champagne}
        strokeWidth=".8"
        opacity=".45"
      />

      <ellipse
        cx="20"
        cy="80"
        rx="8"
        ry="3.5"
        transform="rotate(30 20 80)"
        fill={COLORS.rose}
        opacity=".6"
      />

      <ellipse
        cx="52"
        cy="38"
        rx="8"
        ry="3.5"
        transform="rotate(45 52 38)"
        fill={COLORS.rose}
        opacity=".6"
      />

      <ellipse
        cx="112"
        cy="12"
        rx="8"
        ry="3.5"
        transform="rotate(-20 112 12)"
        fill={COLORS.rose}
        opacity=".6"
      />

      <circle
        cx="20"
        cy="80"
        r="3"
        fill={COLORS.champagneLight}
      />

      <circle
        cx="52"
        cy="38"
        r="3"
        fill={COLORS.roseLight}
      />

      <circle
        cx="112"
        cy="12"
        r="3"
        fill={COLORS.champagneLight}
      />
    </svg>
  );
}

/* =========================================================
   MÉDAILLON CENTRAL
========================================================= */

function Medaillon({ initiales, ouverte }) {
  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        z-[40]
        -translate-x-1/2
        -translate-y-1/2
      "
      animate={{
        scale: ouverte ? 0.5 : 1,
        opacity: ouverte ? 0 : 1,
      }}
      transition={{
        duration: 0.7,
        delay: ouverte ? 0 : 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Halo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          inset-[-24px]
          rounded-full
          blur-xl
          bg-[#DCC79A]/20
        "
      />

      {/* Anneau extérieur */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="
          relative
          flex
          h-[105px]
          w-[105px]
          items-center
          justify-center
          rounded-full
          border
          border-[#DCC79A]/60
        "
      >
        {/* petits points de l'anneau */}
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#F1E5C5]" />
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#F1E5C5]" />
        <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#F1E5C5]" />
        <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#F1E5C5]" />
      </motion.div>

      {/* Médaillon intérieur */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-[78px]
          w-[78px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[#DCC79A]/80
          bg-[#11152F]
          shadow-[0_10px_35px_rgba(0,0,0,.45)]
        "
      >
        <div
          className="
            absolute
            inset-[6px]
            rounded-full
            border
            border-[#C58FA5]/35
          "
        />

        <div className="relative text-center">
          <div
            className="
              font-serif
              text-[21px]
              tracking-[0.08em]
              text-[#F1E5C5]
            "
          >
            {initiales}
          </div>

          <div
            className="
              mt-1
              text-[6px]
              uppercase
              tracking-[0.32em]
              text-[#C58FA5]
            "
          >
            pour toujours
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ENVELOPPE ÉCLIPSE D'AMOUR
========================================================= */

export default function Enveloppe({
  nomsMaries,
  musiqueUrl,
  onOuvrir,
  children,
}) {
  const [ouverte, setOuverte] = useState(false);
  const [animationTerminee, setAnimationTerminee] = useState(false);

  const initiales = getInitiales(nomsMaries);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClick = () => {
    if (ouverte) return;

    setOuverte(true);

    if (onOuvrir) {
      setTimeout(() => {
        onOuvrir();
      }, 700);
    }

    setTimeout(() => {
      setAnimationTerminee(true);
    }, 2350);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
      "
      style={{
        background: `
          radial-gradient(
            circle at 50% 42%,
            #242650 0%,
            #11152F 38%,
            #080B20 75%,
            #050714 100%
          )
        `,
      }}
    >
      {/* =====================================================
          VOILE LUMINEUX
      ====================================================== */}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: `
            radial-gradient(
              circle at 50% 45%,
              rgba(197,143,165,.13),
              transparent 34%
            ),
            radial-gradient(
              circle at 50% 20%,
              rgba(220,199,154,.08),
              transparent 30%
            )
          `,
        }}
      />

      {/* =====================================================
          LUNE
      ====================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-[7%]
          h-[180px]
          w-[180px]
          -translate-x-1/2
          rounded-full
          pointer-events-none
        "
        animate={{
          opacity: [0.12, 0.2, 0.12],
          scale: [0.98, 1.04, 0.98],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: `
            radial-gradient(
              circle at 38% 35%,
              #F1E5C5 0%,
              #DCC79A 35%,
              rgba(220,199,154,.08) 68%,
              transparent 70%
            )
          `,
          filter: 'blur(.2px)',
        }}
      />

      {/* =====================================================
          ÉTOILES
      ====================================================== */}

      <Etoile left="8%" top="17%" size={3} delay={0} />
      <Etoile left="17%" top="29%" size={2} delay={1.1} />
      <Etoile left="25%" top="13%" size={2} delay={2} />
      <Etoile left="74%" top="17%" size={3} delay={1.5} />
      <Etoile left="84%" top="28%" size={2} delay={0.5} />
      <Etoile left="92%" top="14%" size={2} delay={2.5} />
      <Etoile left="11%" top="68%" size={2} delay={1.7} />
      <Etoile left="88%" top="66%" size={3} delay={0.9} />

      <Sparkle left="14%" top="22%" delay={0} scale={0.7} />
      <Sparkle left="82%" top="20%" delay={1.4} scale={0.8} />
      <Sparkle left="9%" top="76%" delay={2.1} scale={0.55} />
      <Sparkle left="89%" top="73%" delay={0.8} scale={0.65} />

      {/* =====================================================
          PÉTALES
      ====================================================== */}

      <Petale left="18%" top="70%" delay={0} />
      <Petale left="28%" top="78%" delay={1.8} size={5} />
      <Petale left="72%" top="74%" delay={0.8} size={6} />
      <Petale left="84%" top="68%" delay={2.5} size={5} />

      {/* =====================================================
          ORNEMENTS
      ====================================================== */}

      <div className="absolute left-[-10px] top-[3%] opacity-70">
        <Ornament />
      </div>

      <div className="absolute right-[-10px] top-[3%] opacity-70">
        <Ornament flip />
      </div>

      <div className="absolute bottom-[-15px] left-[-10px] rotate-[-8deg] opacity-40">
        <Ornament flip />
      </div>

      <div className="absolute bottom-[-15px] right-[-10px] rotate-[8deg] opacity-40">
        <Ornament />
      </div>

      {/* =====================================================
          CONTENU CENTRAL
      ====================================================== */}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-5">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-[390px]"
        >
          {/* =================================================
              OMBRE AU SOL
          ================================================= */}

          <motion.div
            className="
              absolute
              left-1/2
              top-[94%]
              h-14
              w-[82%]
              -translate-x-1/2
              rounded-full
              bg-black/60
              blur-2xl
            "
            animate={{
              scaleX: ouverte ? 0.5 : 1,
              opacity: ouverte ? 0.15 : 0.55,
            }}
            transition={{
              duration: 1.2,
            }}
          />

          {/* =================================================
              STRUCTURE
          ================================================= */}

          <div
            className="relative"
            style={{
              perspective: '1800px',
            }}
          >
            {/* =================================================
                CARTE INTÉRIEURE
            ================================================= */}

            <motion.div
              className="
                absolute
                left-[8%]
                top-[5%]
                z-[1]
                w-[84%]
                overflow-hidden
              "
              initial={{
                y: 0,
                opacity: 0,
              }}
              animate={{
                y: ouverte ? '-68%' : 0,
                opacity: ouverte ? 1 : 0,
              }}
              transition={{
                duration: 1.45,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                height: '92%',
                borderRadius: '3px',
                background: `
                  linear-gradient(
                    145deg,
                    #FBF7F1 0%,
                    #F1E5C5 100%
                  )
                `,
                boxShadow: `
                  0 25px 55px rgba(0,0,0,.45),
                  inset 0 0 0 1px rgba(220,199,154,.7)
                `,
              }}
            >
              {/* cadre */}
              <div
                className="
                  absolute
                  inset-3
                  border
                  border-[#DCC79A]/60
                "
              />

              <div
                className="
                  absolute
                  inset-5
                  border
                  border-[#C58FA5]/20
                "
              />

              <div className="relative flex h-full flex-col items-center justify-center px-7 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: ouverte ? 1 : 0,
                    y: ouverte ? 0 : 10,
                  }}
                  transition={{
                    delay: 1.3,
                    duration: 0.7,
                  }}
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.42em]
                    text-[#8D7144]
                  "
                >
                  Une histoire
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: ouverte ? 1 : 0,
                  }}
                  transition={{
                    delay: 1.45,
                    duration: 0.8,
                  }}
                  className="
                    mt-3
                    font-serif
                    text-[25px]
                    italic
                    text-[#422A4D]
                  "
                >
                  commence ici
                </motion.div>

                <div
                  className="
                    my-4
                    h-px
                    w-20
                    bg-gradient-to-r
                    from-transparent
                    via-[#DCC79A]
                    to-transparent
                  "
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: ouverte ? 1 : 0,
                  }}
                  transition={{
                    delay: 1.6,
                    duration: 0.8,
                  }}
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#8A6E72]
                  "
                >
                  Vous êtes chaleureusement invités
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: ouverte ? 1 : 0,
                    scale: ouverte ? 1 : 0.8,
                  }}
                  transition={{
                    delay: 1.75,
                    duration: 0.7,
                  }}
                  className="
                    mt-6
                    text-[#C58FA5]
                  "
                >
                  ♡
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                CORPS DE L'ÉCRIN
            ================================================= */}

            <motion.div
              className="
                relative
                z-[3]
                overflow-hidden
              "
              animate={{
                scale: ouverte ? 0.95 : 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.8,
              }}
              style={{
                height: '265px',
                borderRadius: '8px',
                background: `
                  linear-gradient(
                    145deg,
                    #171B3B 0%,
                    #11152F 48%,
                    #0A0D25 100%
                  )
                `,
                border: `1px solid ${COLORS.champagne}66`,
                boxShadow: `
                  0 35px 80px rgba(0,0,0,.58),
                  inset 0 0 0 1px rgba(255,255,255,.025)
                `,
              }}
            >
              {/* =================================================
                  TEXTURE
              ================================================= */}

              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `
                    radial-gradient(
                      rgba(241,229,197,.7) .45px,
                      transparent .45px
                    )
                  `,
                  backgroundSize: '9px 9px',
                }}
              />

              {/* halo central */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-48
                  w-48
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#422A4D]/25
                  blur-3xl
                "
              />

              {/* lignes décoratives */}
              <div
                className="
                  absolute
                  left-5
                  right-5
                  top-5
                  bottom-5
                  rounded-[5px]
                  border
                  border-[#DCC79A]/10
                "
              />

              <div
                className="
                  absolute
                  left-7
                  right-7
                  top-7
                  bottom-7
                  rounded-[4px]
                  border
                  border-[#C58FA5]/10
                "
              />

              {/* =================================================
                  RABAT EN PÉTALE
              ================================================= */}

              <motion.div
                className="
                  absolute
                  left-0
                  top-0
                  z-[8]
                  h-[64%]
                  w-full
                "
                animate={{
                  rotateX: ouverte ? -175 : 0,
                  y: ouverte ? '-5%' : '0%',
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: '50% 0%',
                  transformStyle: 'preserve-3d',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background: `
                    linear-gradient(
                      145deg,
                      #1E2348 0%,
                      #171B3B 48%,
                      #0C1028 100%
                    )
                  `,
                  borderBottom: `1px solid ${COLORS.champagne}55`,
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* ligne champagne */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    borderTop: `1px solid ${COLORS.champagne}35`,
                  }}
                />

                {/* constellation */}
                <Etoile left="18%" top="20%" size={2} delay={0} />
                <Etoile left="29%" top="35%" size={2} delay={1} />
                <Etoile left="70%" top="25%" size={2} delay={0.5} />
                <Etoile left="81%" top="36%" size={2} delay={1.8} />

                <Sparkle
                  left="25%"
                  top="25%"
                  delay={1}
                  scale={0.5}
                />

                <Sparkle
                  left="72%"
                  top="29%"
                  delay={2}
                  scale={0.45}
                />
              </motion.div>

              {/* =================================================
                  PANNEAU GAUCHE
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-[5]
                  h-[74%]
                  w-[53%]
                "
                style={{
                  clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
                  background: `
                    linear-gradient(
                      145deg,
                      #151936,
                      #0A0D23
                    )
                  `,
                  borderRight: `1px solid ${COLORS.champagne}25`,
                }}
              />

              {/* =================================================
                  PANNEAU DROIT
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  z-[5]
                  h-[74%]
                  w-[53%]
                "
                style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                  background: `
                    linear-gradient(
                      225deg,
                      #1B1F42,
                      #090C21
                    )
                  `,
                  borderLeft: `1px solid ${COLORS.champagne}25`,
                }}
              />

              {/* =================================================
                  PANNEAU BAS
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-[6]
                  h-[62%]
                  w-full
                "
                style={{
                  clipPath: 'polygon(0 100%, 50% 16%, 100% 100%)',
                  background: `
                    linear-gradient(
                      180deg,
                      #151936,
                      #080B20
                    )
                  `,
                }}
              />

              {/* =================================================
                  MÉDAILLON
              ================================================= */}

              <Medaillon
                initiales={initiales}
                ouverte={ouverte}
              />

              {/* =================================================
                  PETITES BRANCHES
              ================================================= */}

              <div className="absolute bottom-[-4px] left-[3px] z-[10] opacity-70">
                <Ornament />
              </div>

              <div className="absolute bottom-[-4px] right-[3px] z-[10] opacity-70">
                <Ornament flip />
              </div>

              {/* =================================================
                  TEXTE
              ================================================= */}

              <motion.div
                className="
                  absolute
                  bottom-[17px]
                  left-0
                  z-[20]
                  w-full
                  text-center
                "
                animate={{
                  opacity: ouverte ? 0 : 1,
                  y: ouverte ? 10 : 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <p
                  className="
                    font-serif
                    text-[18px]
                    italic
                    text-[#F1E5C5]
                  "
                >
                  Une histoire à découvrir
                </p>

                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="h-px w-8 bg-[#DCC79A]/40" />

                  <span
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.35em]
                      text-[#C58FA5]
                    "
                  >
                    touchez le sceau
                  </span>

                  <span className="h-px w-8 bg-[#DCC79A]/40" />
                </div>
              </motion.div>
            </motion.div>

            {/* =================================================
                BOUTON INVISIBLE
            ================================================= */}

            {!ouverte && (
              <button
                type="button"
                aria-label="Ouvrir l'invitation"
                onClick={handleClick}
                className="
                  absolute
                  inset-0
                  z-[50]
                  cursor-pointer
                "
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          FLASH CINÉMATIQUE
      ====================================================== */}

      <AnimatePresence>
        {ouverte && (
          <motion.div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[200]
              bg-[#F1E5C5]
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.28, 0],
            }}
            transition={{
              duration: 1.3,
              delay: 0.8,
              times: [0, 0.22, 1],
            }}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          TEXTE APRÈS OUVERTURE
      ====================================================== */}

      <AnimatePresence>
        {animationTerminee && (
          <motion.div
            className="
              absolute
              bottom-7
              left-1/2
              z-[100]
              -translate-x-1/2
              text-center
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <div
              className="
                rounded-full
                border
                border-[#DCC79A]/25
                bg-[#080B20]/30
                px-5
                py-2
                backdrop-blur-md
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.38em]
                  text-[#F1E5C5]
                "
              >
                Bienvenue dans notre histoire
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MUSIQUE
      ====================================================== */}

      <LecteurMusique
        url={musiqueUrl}
        demarrer={ouverte}
      />

      {/* =====================================================
          CONTENU DE L'INVITATION
      ====================================================== */}

      <AnimatePresence>
        {animationTerminee && (
          <motion.div
            className="
              absolute
              inset-0
              z-[300]
              overflow-y-auto
            "
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}