import { motion } from 'framer-motion';

import Countdown from '../shared/Countdown';
import Galerie from '../shared/Galerie';
import GoogleMap from '../shared/GoogleMap';
import PartageBoutons from '../shared/PartageBoutons';

/* =========================================================
   PALETTE — NUIT ROMANTIQUE
========================================================= */

const COLORS = {
  night: '#11152F',
  nightDeep: '#080B20',
  nightSoft: '#1C2145',
  plum: '#422A4D',
  rose: '#C58FA5',
  roseLight: '#E4B9C7',
  champagne: '#DCC79A',
  champagneLight: '#F1E5C5',
  ivory: '#FBF7F1',
  cream: '#F3EAE2',
  text: '#3B3040',
  muted: '#786D78',
};

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* =========================================================
   STYLE GLOBAL — ANIMATIONS CSS
========================================================= */

const ambientStyles = `
  @keyframes starTwinkle {
    0%, 100% {
      opacity: .25;
      transform: scale(.7);
    }
    50% {
      opacity: 1;
      transform: scale(1.25);
    }
  }

  @keyframes starFloat {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(10px, -18px, 0);
    }
  }

  @keyframes softGlow {
    0%, 100% {
      opacity: .25;
      transform: scale(1);
    }
    50% {
      opacity: .55;
      transform: scale(1.12);
    }
  }

  @keyframes moonGlow {
    0%, 100% {
      box-shadow:
        0 0 20px rgba(220,199,154,.12),
        0 0 50px rgba(220,199,154,.08);
    }
    50% {
      box-shadow:
        0 0 35px rgba(220,199,154,.28),
        0 0 90px rgba(220,199,154,.14);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(120%);
    }
  }

  @keyframes petalFall {
    0% {
      transform:
        translate3d(0, -12vh, 0)
        rotate(0deg);
      opacity: 0;
    }

    10% {
      opacity: .85;
    }

    50% {
      transform:
        translate3d(35px, 50vh, 0)
        rotate(150deg);
    }

    100% {
      transform:
        translate3d(-25px, 115vh, 0)
        rotate(320deg);
      opacity: 0;
    }
  }

  @keyframes breathe {
    0%, 100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.04);
    }
  }

  @keyframes rotateSlow {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulseRing {
    0% {
      transform: scale(.92);
      opacity: .15;
    }

    50% {
      transform: scale(1.04);
      opacity: .35;
    }

    100% {
      transform: scale(.92);
      opacity: .15;
    }
  }

  @keyframes sway {
    0%, 100% {
      transform: rotate(-4deg);
    }

    50% {
      transform: rotate(5deg);
    }
  }

  @keyframes floatUp {
    0%, 100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-12px);
    }
  }

  @keyframes lineReveal {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }

    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  .romantic-shimmer {
    position: relative;
    overflow: hidden;
  }

  .romantic-shimmer::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 35%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.18),
      transparent
    );
    transform: translateX(-120%);
    animation: shimmer 5s ease-in-out infinite;
    pointer-events: none;
  }
`;

/* =========================================================
   ETOILE
========================================================= */

function Star({
  top,
  left,
  size = 3,
  delay = 0,
  duration = 3,
  opacity = 0.7,
}) {
  return (
    <span
      className="absolute rounded-full"
      style={{
        top,
        left,
        width: size,
        height: size,
        background: COLORS.champagneLight,
        opacity,
        animation: `starTwinkle ${duration}s ease-in-out ${delay}s infinite`,
        boxShadow: `0 0 ${size * 4}px rgba(241,229,197,.65)`,
      }}
    />
  );
}

/* =========================================================
   CIEL ETOILE
========================================================= */

function StarField({ dense = false }) {
  const stars = dense
    ? [
        [7, 8, 2, 0.2],
        [14, 25, 3, 1],
        [9, 45, 2, 1.8],
        [18, 65, 2, 0.5],
        [11, 82, 3, 2],
        [27, 92, 2, 1.2],
        [31, 14, 2, 2.2],
        [35, 37, 3, 0.8],
        [29, 57, 2, 1.5],
        [40, 74, 2, 2.7],
        [43, 6, 3, 1],
        [47, 28, 2, 2],
        [50, 51, 3, 0.4],
        [54, 88, 2, 1.6],
        [60, 18, 2, 2.3],
        [63, 42, 3, 0.6],
        [67, 67, 2, 1.8],
        [72, 94, 3, 0.9],
        [77, 13, 2, 2.4],
        [81, 35, 3, 1.3],
        [84, 59, 2, 0.3],
        [89, 78, 3, 2],
        [93, 24, 2, 1.5],
        [95, 48, 2, 2.6],
        [88, 7, 2, 0.7],
      ]
    : [
        [10, 12, 3, 0.2],
        [18, 30, 2, 1],
        [13, 68, 3, 1.8],
        [25, 86, 2, 0.5],
        [32, 18, 2, 1.2],
        [37, 45, 3, 2],
        [45, 76, 2, 0.7],
        [54, 9, 2, 1.4],
        [62, 33, 3, 0.4],
        [69, 62, 2, 2],
        [76, 88, 3, 1],
        [84, 22, 2, 1.7],
        [91, 53, 2, 2.3],
      ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map(([top, left, size, delay], index) => (
        <Star
          key={index}
          top={`${top}%`}
          left={`${left}%`}
          size={size}
          delay={delay}
          duration={2.8 + (index % 4) * 0.6}
          opacity={0.35 + (index % 3) * 0.2}
        />
      ))}
    </div>
  );
}

/* =========================================================
   PETITES ETOILES EN FORME DE CROIX
========================================================= */

function Sparkle({ top, left, delay = 0, scale = 1 }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        transform: `scale(${scale})`,
        animation: `starFloat 5s ease-in-out ${delay}s infinite`,
      }}
    >
      <div
        className="absolute"
        style={{
          width: 2,
          height: 18,
          left: 7,
          top: 0,
          borderRadius: 999,
          background: COLORS.champagneLight,
          boxShadow: `0 0 12px ${COLORS.champagneLight}`,
        }}
      />

      <div
        className="absolute"
        style={{
          width: 18,
          height: 2,
          left: 0,
          top: 8,
          borderRadius: 999,
          background: COLORS.champagneLight,
          boxShadow: `0 0 12px ${COLORS.champagneLight}`,
        }}
      />
    </div>
  );
}

/* =========================================================
   PETALES
========================================================= */

function Petals({ count = 12, dark = false }) {
  const petals = [
    [5, 0, 7, 8, 0],
    [13, 1, 6, 10, 1.2],
    [21, 0, 8, 9, 2],
    [32, 1, 6, 11, 0.7],
    [43, 0, 7, 8, 1.8],
    [54, 1, 6, 10, 0.3],
    [65, 0, 8, 9, 2.4],
    [76, 1, 6, 11, 1.1],
    [88, 0, 7, 8, 2.8],
    [96, 1, 6, 10, 1.5],
    [27, 0, 5, 12, 3],
    [70, 1, 5, 12, 3.4],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.slice(0, count).map(([left, delay, size, duration, offset], index) => (
        <span
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${left}%`,
            top: '-30px',
            width: `${size}px`,
            height: `${size * 1.55}px`,
            background: dark
              ? index % 3 === 0
                ? 'rgba(228,185,199,.65)'
                : 'rgba(220,199,154,.5)'
              : index % 3 === 0
                ? 'rgba(197,143,165,.42)'
                : 'rgba(220,199,154,.3)',
            borderRadius: '70% 30% 70% 30%',
            filter: 'blur(.1px)',
            animation: `petalFall ${duration}s linear ${delay + offset}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   HALOS LUMINEUX
========================================================= */

function AmbientLights({ dark = true }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{
          background: dark
            ? 'rgba(197,143,165,.14)'
            : 'rgba(197,143,165,.18)',
          animation: 'softGlow 7s ease-in-out infinite',
        }}
      />

      <div
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{
          background: dark
            ? 'rgba(220,199,154,.1)'
            : 'rgba(220,199,154,.16)',
          animation: 'softGlow 9s ease-in-out 1s infinite',
        }}
      />

      <div
        className="absolute top-[35%] left-[45%] w-[300px] h-[300px] rounded-full blur-3xl"
        style={{
          background: dark
            ? 'rgba(66,42,77,.35)'
            : 'rgba(228,185,199,.12)',
          animation: 'softGlow 11s ease-in-out 2s infinite',
        }}
      />
    </div>
  );
}

/* =========================================================
   LUNE
========================================================= */

function Moon() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: 105,
        height: 105,
        borderRadius: '50%',
        background: `
          radial-gradient(
            circle at 35% 30%,
            #fffdf4 0%,
            #f1e5c5 48%,
            #d9c48f 100%
          )
        `,
        animation: 'moonGlow 5s ease-in-out infinite',
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 85,
          height: 85,
          border: '1px solid rgba(255,255,255,.45)',
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: 125,
          height: 125,
          border: '1px solid rgba(220,199,154,.18)',
          animation: 'pulseRing 5s ease-in-out infinite',
        }}
      />
    </div>
  );
}

/* =========================================================
   ORNEMENT
========================================================= */

function Ornament({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div
        className="h-px w-16 md:w-24"
        style={{
          background: light
            ? 'linear-gradient(to right, transparent, rgba(241,229,197,.7))'
            : `linear-gradient(to right, transparent, ${COLORS.champagne})`,
        }}
      />

      <div
        className="relative w-2.5 h-2.5 rotate-45"
        style={{
          background: light ? COLORS.champagneLight : COLORS.champagne,
          boxShadow: `0 0 12px ${
            light ? 'rgba(241,229,197,.55)' : 'rgba(220,199,154,.35)'
          }`,
        }}
      />

      <div
        className="h-px w-16 md:w-24"
        style={{
          background: light
            ? 'linear-gradient(to left, transparent, rgba(241,229,197,.7))'
            : `linear-gradient(to left, transparent, ${COLORS.champagne})`,
        }}
      />
    </div>
  );
}

/* =========================================================
   TITRE SECTION
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="text-center max-w-2xl mx-auto mb-12"
    >
      <p
        className="uppercase tracking-[.35em] text-[10px] md:text-xs mb-4"
        style={{
          color: light ? COLORS.champagneLight : COLORS.rose,
        }}
      >
        {eyebrow}
      </p>

      <h2
        className="font-serif text-4xl md:text-5xl lg:text-6xl"
        style={{
          color: light ? COLORS.ivory : COLORS.night,
          fontFamily: 'Georgia, serif',
        }}
      >
        {title}
      </h2>

      <div className="mt-5 mb-5">
        <Ornament light={light} />
      </div>

      {description && (
        <p
          className="text-sm md:text-base leading-7"
          style={{
            color: light
              ? 'rgba(251,247,241,.7)'
              : COLORS.muted,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* =========================================================
   CARTE PROGRAMME
========================================================= */

function EventCard({
  icon,
  title,
  lieu,
  heure,
  delay = 0,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative overflow-hidden rounded-[28px] p-[1px]"
      style={{
        background: `linear-gradient(
          135deg,
          rgba(220,199,154,.75),
          rgba(197,143,165,.25),
          rgba(220,199,154,.55)
        )`,
      }}
    >
      <div
        className="relative h-full rounded-[27px] p-8 md:p-10 text-center overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle at 50% 0%,
              rgba(197,143,165,.12),
              transparent 45%
            ),
            ${COLORS.ivory}
          `,
        }}
      >
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{
            background: COLORS.rose,
          }}
        />

        <div className="relative">
          <div
            className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
            style={{
              background: 'rgba(66,42,77,.08)',
              border: `1px solid rgba(220,199,154,.7)`,
              color: COLORS.plum,
              animation: 'breathe 5s ease-in-out infinite',
            }}
          >
            {icon}
          </div>

          <p
            className="uppercase tracking-[.3em] text-[10px] mb-3"
            style={{
              color: COLORS.rose,
            }}
          >
            {title}
          </p>

          <h3
            className="font-serif text-2xl md:text-3xl mb-5"
            style={{
              color: COLORS.night,
              fontFamily: 'Georgia, serif',
            }}
          >
            {lieu || 'Lieu à préciser'}
          </h3>

          <div
            className="mx-auto w-12 h-px mb-5"
            style={{
              background: COLORS.champagne,
            }}
          />

          <p
            className="text-sm"
            style={{
              color: COLORS.muted,
            }}
          >
            {heure || 'Heure à préciser'}
          </p>
        </div>

        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              'linear-gradient(120deg, transparent 35%, rgba(255,255,255,.5) 50%, transparent 65%)',
          }}
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   ROYAL FRAME — NOM CONSERVE POUR COMPATIBILITE
========================================================= */

function RoyalFrame({ children, dark = false }) {
  return (
    <div
      className="relative p-3 md:p-5"
      style={{
        border: `1px solid ${
          dark
            ? 'rgba(220,199,154,.35)'
            : 'rgba(66,42,77,.2)'
        }`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-8 h-8 border-t border-l"
        style={{
          borderColor: dark
            ? COLORS.champagne
            : COLORS.plum,
        }}
      />

      <div
        className="absolute top-0 right-0 w-8 h-8 border-t border-r"
        style={{
          borderColor: dark
            ? COLORS.champagne
            : COLORS.plum,
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-8 h-8 border-b border-l"
        style={{
          borderColor: dark
            ? COLORS.champagne
            : COLORS.plum,
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-8 h-8 border-b border-r"
        style={{
          borderColor: dark
            ? COLORS.champagne
            : COLORS.plum,
        }}
      />

      {children}
    </div>
  );
}

/* =========================================================
   DATE
========================================================= */

function formatDate(date) {
  if (!date) return '';

  try {
    return new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return date;
  }
}

/* =========================================================
   ROYAL GOLD
   -> DESIGN REMPLACE PAR "NUIT ROMANTIQUE"
========================================================= */

export default function RoyalGold({ invitation }) {
  if (!invitation) return null;

  const noms = invitation.noms_maries || 'Les Mariés';
  const date = formatDate(invitation.date_mariage);

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.ivory,
        color: COLORS.text,
      }}
    >
      <style>{ambientStyles}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle at 50% 35%,
              rgba(66,42,77,.95) 0%,
              rgba(28,33,69,.96) 30%,
              ${COLORS.nightDeep} 75%
            )
          `,
        }}
      >
        <AmbientLights dark />
        <StarField dense />
        <Petals count={12} dark />

        <Sparkle top="18%" left="15%" delay={0.5} scale={0.8} />
        <Sparkle top="26%" left="80%" delay={1.8} scale={0.65} />
        <Sparkle top="58%" left="12%" delay={2.4} scale={0.55} />
        <Sparkle top="65%" left="87%" delay={1.2} scale={0.9} />

        {/* Lune */}
        <div className="absolute top-[8%] right-[8%] md:right-[13%]">
          <Moon />
        </div>

        {/* Halo central */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(197,143,165,.13), transparent 65%)',
            animation: 'softGlow 8s ease-in-out infinite',
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 w-full max-w-5xl px-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[.5em] text-[10px] md:text-xs mb-7"
            style={{
              color: COLORS.champagneLight,
            }}
          >
            Une histoire • Un amour • Une promesse
          </motion.p>

          <motion.div variants={scaleIn}>
            <Ornament light />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 mb-4 text-sm md:text-base italic"
            style={{
              color: 'rgba(251,247,241,.7)',
              fontFamily: 'Georgia, serif',
            }}
          >
            Nous avons le bonheur de vous inviter à célébrer
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="relative mx-auto max-w-4xl"
          >
            <div
              className="absolute inset-0 blur-3xl opacity-20"
              style={{
                background: COLORS.rose,
              }}
            />

            <h1
              className="relative font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]"
              style={{
                color: COLORS.ivory,
                fontFamily: 'Georgia, serif',
                textShadow:
                  '0 0 35px rgba(228,185,199,.16)',
              }}
            >
              {noms}
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center justify-center gap-5"
          >
            <div
              className="w-12 md:w-20 h-px"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgba(220,199,154,.7))',
              }}
            />

            <span
              className="text-xl"
              style={{
                color: COLORS.champagneLight,
              }}
            >
              ✦
            </span>

            <div
              className="w-12 md:w-20 h-px"
              style={{
                background:
                  'linear-gradient(to left, transparent, rgba(220,199,154,.7))',
              }}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-sm md:text-base capitalize"
            style={{
              color: COLORS.roseLight,
              fontFamily: 'Georgia, serif',
            }}
          >
            {date}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <RoyalFrame dark>
              <div className="px-5 py-4">
                <p
                  className="text-[10px] uppercase tracking-[.35em]"
                  style={{
                    color: 'rgba(251,247,241,.55)',
                  }}
                >
                  Save the date
                </p>

                <p
                  className="mt-2 text-sm italic"
                  style={{
                    color: COLORS.champagneLight,
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  Un jour unique à partager ensemble
                </p>
              </div>
            </RoyalFrame>
          </motion.div>
        </motion.div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span
            className="uppercase tracking-[.3em] text-[9px]"
            style={{
              color: 'rgba(251,247,241,.5)',
            }}
          >
            Découvrir
          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-px h-10"
            style={{
              background:
                'linear-gradient(to bottom, rgba(220,199,154,.8), transparent)',
            }}
          />
        </motion.div>
      </section>

      {/* =====================================================
          BIENVENUE
      ===================================================== */}

      <section
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{
          background: COLORS.ivory,
        }}
      >
        <AmbientLights dark={false} />
        <Petals count={7} />

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={scaleIn}
          >
            <RoyalFrame>
              <div
                className="relative px-6 py-12 md:px-14 md:py-16 text-center overflow-hidden"
                style={{
                  background: `
                    radial-gradient(
                      circle at 50% 0%,
                      rgba(197,143,165,.12),
                      transparent 45%
                    ),
                    ${COLORS.cream}
                  `,
                }}
              >
                <div
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full blur-3xl"
                  style={{
                    background: 'rgba(197,143,165,.12)',
                    animation: 'softGlow 8s ease-in-out infinite',
                  }}
                />

                <div className="relative">
                  <p
                    className="uppercase tracking-[.4em] text-[10px] md:text-xs mb-5"
                    style={{
                      color: COLORS.rose,
                    }}
                  >
                    Bienvenue
                  </p>

                  <h2
                    className="font-serif text-4xl md:text-5xl mb-7"
                    style={{
                      color: COLORS.night,
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    Un moment précieux
                  </h2>

                  <div className="mb-8">
                    <Ornament />
                  </div>

                  <p
                    className="max-w-2xl mx-auto text-sm md:text-base leading-8"
                    style={{
                      color: COLORS.text,
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {invitation.message_bienvenue ||
                      'Nous sommes heureux de partager avec vous ce moment unique et précieux.'}
                  </p>

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="mt-9 text-2xl"
                    style={{
                      color: COLORS.rose,
                    }}
                  >
                    ♡
                  </motion.div>
                </div>
              </div>
            </RoyalFrame>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COMPTE A REBOURS
      ===================================================== */}

      <section
        className="relative py-24 md:py-28 px-6 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle at center,
              ${COLORS.nightSoft} 0%,
              ${COLORS.night} 50%,
              ${COLORS.nightDeep} 100%
            )
          `,
        }}
      >
        <StarField dense />
        <AmbientLights dark />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[480px] h-[480px] rounded-full"
            style={{
              border: '1px solid rgba(220,199,154,.12)',
              animation: 'pulseRing 7s ease-in-out infinite',
            }}
          />

          <div
            className="absolute w-[360px] h-[360px] rounded-full"
            style={{
              border: '1px solid rgba(197,143,165,.1)',
              animation: 'pulseRing 6s ease-in-out 1s infinite',
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Le grand jour approche"
              title="Compte à rebours"
              description="Chaque seconde nous rapproche de ce moment que nous avons hâte de partager avec vous."
              light
            />

            <motion.div
              variants={scaleIn}
              className="relative max-w-3xl mx-auto"
            >
              <div
                className="rounded-[30px] p-5 md:p-8"
                style={{
                  background: 'rgba(255,255,255,.035)',
                  border: '1px solid rgba(220,199,154,.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Countdown
                  dateMariage={invitation.date_mariage}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMME
      ===================================================== */}

      <section
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{
          background: COLORS.ivory,
        }}
      >
        <AmbientLights dark={false} />
        <Petals count={8} />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Le programme"
              title="Notre journée"
              description="Deux moments importants, une seule et même journée à célébrer avec ceux que nous aimons."
            />

            <div className="grid md:grid-cols-2 gap-7 md:gap-9">
              <EventCard
                icon="♡"
                title="La cérémonie"
                lieu={invitation.lieu_ceremonie}
                heure={invitation.heure_ceremonie}
                delay={0}
              />

              <EventCard
                icon="✦"
                title="La réception"
                lieu={invitation.lieu_reception}
                heure={invitation.heure_reception}
                delay={0.15}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          GALERIE
      ===================================================== */}

      <section
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{
          background: `
            linear-gradient(
              145deg,
              ${COLORS.nightDeep},
              ${COLORS.night},
              ${COLORS.plum}
            )
          `,
        }}
      >
        <StarField dense />
        <AmbientLights dark />
        <Petals count={8} dark />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Quelques souvenirs"
              title="Notre histoire en images"
              description="Des instants précieux qui racontent un peu de notre histoire."
              light
            />

            <motion.div
              variants={scaleIn}
              className="relative"
            >
              <div
                className="absolute -inset-5 rounded-[40px] blur-2xl"
                style={{
                  background: 'rgba(197,143,165,.08)',
                }}
              />

              <div
                className="relative rounded-[30px] p-4 md:p-7"
                style={{
                  background: 'rgba(255,255,255,.035)',
                  border: '1px solid rgba(220,199,154,.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Galerie photos={invitation.photos} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LOCALISATION
      ===================================================== */}

      <section
        className="relative py-24 md:py-28 px-6 overflow-hidden"
        style={{
          background: COLORS.cream,
        }}
      >
        <AmbientLights dark={false} />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Retrouvez-nous"
              title="Le lieu de la réception"
              description="Nous avons hâte de vous retrouver pour partager ensemble cette magnifique journée."
            />

            <motion.div
              variants={scaleIn}
              className="relative max-w-4xl mx-auto"
            >
              <div
                className="rounded-[30px] p-2 md:p-3"
                style={{
                  background: `
                    linear-gradient(
                      135deg,
                      ${COLORS.champagne},
                      rgba(197,143,165,.4),
                      ${COLORS.champagne}
                    )
                  `,
                }}
              >
                <div
                  className="rounded-[26px] overflow-hidden"
                  style={{
                    background: COLORS.ivory,
                  }}
                >
                  <div className="p-6 md:p-8 text-center">
                    <p
                      className="uppercase tracking-[.3em] text-[10px] mb-3"
                      style={{
                        color: COLORS.rose,
                      }}
                    >
                      Réception
                    </p>

                    <h3
                      className="font-serif text-2xl md:text-3xl"
                      style={{
                        color: COLORS.night,
                        fontFamily: 'Georgia, serif',
                      }}
                    >
                      {invitation.lieu_reception ||
                        'Lieu de réception'}
                    </h3>
                  </div>

                  <div className="px-2 pb-2 md:px-3 md:pb-3">
                    <div
                      className="overflow-hidden rounded-[22px]"
                      style={{
                        minHeight: 300,
                      }}
                    >
                      <GoogleMap
                        adresse={invitation.lieu_reception}
                      />
                    </div>
                  </div>

                  {invitation.lieu_reception && (
                    <div className="px-6 pb-7 text-center">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          invitation.lieu_reception
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[.18em] transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: COLORS.night,
                          color: COLORS.champagneLight,
                          boxShadow:
                            '0 10px 25px rgba(17,21,47,.15)',
                        }}
                      >
                        <span>⌖</span>
                        Ouvrir dans Google Maps
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PARTAGE
      ===================================================== */}

      <section
        className="relative py-24 md:py-28 px-6 overflow-hidden"
        style={{
          background: COLORS.ivory,
        }}
      >
        <AmbientLights dark={false} />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Faites circuler l'amour"
              title="Partager notre bonheur"
              description="Invitez à votre tour vos proches à découvrir ce moment qui nous est si précieux."
            />

            <motion.div
              variants={scaleIn}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-[35px] blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(197,143,165,.12), transparent 65%)',
                }}
              />

              <div
                className="relative rounded-[30px] p-8 md:p-12"
                style={{
                  background: COLORS.cream,
                  border: '1px solid rgba(220,199,154,.45)',
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="text-4xl mb-6"
                  style={{
                    color: COLORS.rose,
                  }}
                >
                  ♡
                </motion.div>

                <PartageBoutons
                  url={window.location.href}
                  texte={`Vous êtes invité(e) au mariage de ${noms} !`}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="relative py-20 px-6 overflow-hidden text-center"
        style={{
          background: COLORS.nightDeep,
        }}
      >
        <StarField dense />
        <AmbientLights dark />

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-10"
        >
          <Ornament light />

          <p
            className="mt-8 font-serif text-3xl md:text-4xl"
            style={{
              color: COLORS.ivory,
              fontFamily: 'Georgia, serif',
            }}
          >
            {noms}
          </p>

          <p
            className="mt-4 text-sm italic"
            style={{
              color: COLORS.roseLight,
              fontFamily: 'Georgia, serif',
            }}
          >
            Avec tout notre amour
          </p>

          <div
            className="mt-8 text-xl"
            style={{
              color: COLORS.champagneLight,
              animation: 'breathe 3s ease-in-out infinite',
            }}
          >
            ♡
          </div>

          <p
            className="mt-10 text-[9px] uppercase tracking-[.3em]"
            style={{
              color: 'rgba(251,247,241,.35)',
            }}
          >
            Une journée • Un souvenir • Pour toujours
          </p>
        </motion.div>
      </footer>
    </div>
  );
}