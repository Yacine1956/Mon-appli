import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
};

/* =========================================================
   ANIMATIONS CSS
========================================================= */

const galleryStyles = `
  @keyframes starTwinkle {
    0%, 100% {
      opacity: .2;
      transform: scale(.7);
    }

    50% {
      opacity: 1;
      transform: scale(1.25);
    }
  }

  @keyframes softGlow {
    0%, 100% {
      opacity: .25;
      transform: scale(1);
    }

    50% {
      opacity: .5;
      transform: scale(1.12);
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

  @keyframes rotateReverse {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0deg);
    }
  }

  @keyframes floatSoft {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }

    50% {
      transform: translateY(-14px) translateX(8px);
    }
  }

  @keyframes pulseHeart {
    0%, 100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.15);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-130%);
    }

    100% {
      transform: translateX(130%);
    }
  }

  @keyframes petalFall {
    0% {
      transform:
        translate3d(0, -80px, 0)
        rotate(0deg);
      opacity: 0;
    }

    10% {
      opacity: .7;
    }

    50% {
      transform:
        translate3d(30px, 380px, 0)
        rotate(160deg);
    }

    100% {
      transform:
        translate3d(-20px, 850px, 0)
        rotate(320deg);
      opacity: 0;
    }
  }
`;

/* =========================================================
   ETOILES
========================================================= */

function Stars() {
  const stars = [
    [7, 8, 3, 0],
    [13, 23, 2, 1.2],
    [18, 78, 3, 2],
    [27, 45, 2, .7],
    [34, 90, 2, 1.5],
    [42, 12, 3, 2.2],
    [48, 68, 2, .4],
    [56, 31, 3, 1.7],
    [64, 84, 2, .9],
    [71, 17, 2, 2.5],
    [78, 55, 3, 1],
    [86, 93, 2, 1.8],
    [91, 37, 3, .3],
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map(([top, left, size, delay], index) => (
        <span
          key={index}
          className="absolute rounded-full"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            background: COLORS.champagneLight,
            boxShadow: `0 0 ${size * 5}px rgba(241,229,197,.7)`,
            animation: `starTwinkle ${
              2.5 + (index % 4) * .7
            }s ease-in-out ${delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   PETITES ETOILES CROIX
========================================================= */

function Sparkle({
  top,
  left,
  delay = 0,
  size = 1,
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        scale: size,
      }}
      animate={{
        rotate: [0, 180, 360],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div
        className="absolute"
        style={{
          width: 2,
          height: 20,
          left: 9,
          top: 0,
          borderRadius: 999,
          background: COLORS.champagneLight,
          boxShadow:
            '0 0 12px rgba(241,229,197,.8)',
        }}
      />

      <div
        className="absolute"
        style={{
          width: 20,
          height: 2,
          left: 0,
          top: 9,
          borderRadius: 999,
          background: COLORS.champagneLight,
          boxShadow:
            '0 0 12px rgba(241,229,197,.8)',
        }}
      />
    </motion.div>
  );
}

/* =========================================================
   PETALS
========================================================= */

function Petals() {
  const petals = [
    [5, 0, 7, 9],
    [17, 1.5, 5, 11],
    [29, .5, 6, 10],
    [43, 2.2, 7, 12],
    [57, 1, 5, 9],
    [69, 2.8, 6, 11],
    [82, .8, 7, 10],
    [94, 2, 5, 12],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map(([left, delay, size, duration], index) => (
        <span
          key={index}
          className="absolute"
          style={{
            left: `${left}%`,
            top: '-30px',
            width: `${size}px`,
            height: `${size * 1.5}px`,
            background:
              index % 2 === 0
                ? 'rgba(228,185,199,.55)'
                : 'rgba(220,199,154,.38)',
            borderRadius: '70% 30% 70% 30%',
            animation: `petalFall ${duration}s linear ${delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   GALERIE
========================================================= */

export default function Galerie({ photos }) {
  const [photoActive, setPhotoActive] = useState(null);

  if (!photos || photos.length === 0) {
    return null;
  }

  const activeIndex = photoActive
    ? photos.findIndex(
        (photo) => photo.id === photoActive.id
      )
    : 0;

  const nextPhoto = () => {
    const next =
      (activeIndex + 1) % photos.length;

    setPhotoActive(photos[next]);
  };

  const previousPhoto = () => {
    const previous =
      (activeIndex - 1 + photos.length) %
      photos.length;

    setPhotoActive(photos[previous]);
  };

  const mainPhoto = photos[0];

  const secondaryPhotos = photos.slice(1, 5);

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
      "
      style={{
        background: `
          radial-gradient(
            circle at 50% 35%,
            ${COLORS.nightSoft} 0%,
            ${COLORS.night} 42%,
            ${COLORS.nightDeep} 100%
          )
        `,
      }}
    >
      <style>{galleryStyles}</style>

      {/* =====================================================
          AMBIANCE
      ====================================================== */}

      <Stars />
      <Petals />

      <Sparkle
        top="13%"
        left="12%"
        delay={0.5}
        size={0.7}
      />

      <Sparkle
        top="22%"
        left="87%"
        delay={1.7}
        size={0.9}
      />

      <Sparkle
        top="72%"
        left="8%"
        delay={2.4}
        size={0.6}
      />

      <Sparkle
        top="78%"
        left="91%"
        delay={1}
        size={0.75}
      />

      {/* Halo gauche */}

      <motion.div
        className="
          absolute
          -top-40
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          blur-3xl
          pointer-events-none
        "
        style={{
          background:
            'rgba(197,143,165,.13)',
        }}
        animate={{
          x: [0, 70, 0],
          y: [0, 45, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Halo droit */}

      <motion.div
        className="
          absolute
          top-[45%]
          -right-48
          w-[520px]
          h-[520px]
          rounded-full
          blur-3xl
          pointer-events-none
        "
        style={{
          background:
            'rgba(220,199,154,.08)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Halo central */}

      <div
        className="
          absolute
          left-1/2
          top-[40%]
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          blur-3xl
          pointer-events-none
        "
        style={{
          background:
            'rgba(66,42,77,.28)',
          animation:
            'softGlow 9s ease-in-out infinite',
        }}
      />

      {/* =====================================================
          EN-TÊTE
      ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          text-center
          px-6
          mb-20
        "
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Ornement */}

        <div className="flex items-center justify-center gap-4 mb-7">
          <motion.span
            className="block h-px w-14 md:w-20"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(220,199,154,.8))',
            }}
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          />

          <motion.span
            className="text-lg md:text-xl"
            style={{
              color: COLORS.champagneLight,
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.18, 1],
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
            className="block h-px w-14 md:w-20"
            style={{
              background:
                'linear-gradient(to left, transparent, rgba(220,199,154,.8))',
            }}
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          />
        </div>

        <p
          className="
            uppercase
            text-[10px]
            md:text-xs
            tracking-[0.5em]
            mb-5
          "
          style={{
            color: COLORS.roseLight,
          }}
        >
          Notre histoire en images
        </p>

        <h2
          className="
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-light
            leading-tight
          "
          style={{
            color: COLORS.ivory,
            fontFamily: 'Georgia, serif',
          }}
        >
          Quelques instants
          <br />

          <span
            className="italic"
            style={{
              color: COLORS.roseLight,
            }}
          >
            pour toujours
          </span>
        </h2>

        <p
          className="
            max-w-md
            mx-auto
            mt-6
            text-sm
            leading-7
          "
          style={{
            color:
              'rgba(251,247,241,.62)',
          }}
        >
          Des regards, des sourires et des souvenirs
          qui racontent notre histoire.
        </p>
      </motion.div>

      {/* =====================================================
          COMPOSITION
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-6
          min-h-[700px]
          md:min-h-[780px]
        "
      >
        {/* =================================================
            CERCLES DECORATIFS
        ================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[410px]
            h-[410px]
            md:w-[570px]
            md:h-[570px]
            rounded-full
            pointer-events-none
          "
          style={{
            border:
              '1px solid rgba(220,199,154,.25)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            md:w-[680px]
            md:h-[680px]
            rounded-full
            pointer-events-none
          "
          style={{
            border:
              '1px dashed rgba(228,185,199,.15)',
          }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Petit anneau */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[340px]
            h-[340px]
            md:w-[470px]
            md:h-[470px]
            rounded-full
            pointer-events-none
          "
          style={{
            border:
              '1px solid rgba(197,143,165,.12)',
          }}
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =================================================
            TEXTE HAUT
        ================================================== */}

        <motion.div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            text-center
            z-30
            whitespace-nowrap
          "
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          <span
            className="
              text-[8px]
              md:text-[9px]
              tracking-[0.4em]
              uppercase
            "
            style={{
              color:
                'rgba(251,247,241,.42)',
            }}
          >
            Love • Memories • Forever
          </span>
        </motion.div>

        {/* =================================================
            GRANDE PHOTO
        ================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[245px]
            h-[350px]
            sm:w-[290px]
            sm:h-[415px]
            md:w-[380px]
            md:h-[525px]
            z-20
            cursor-pointer
          "
          initial={{
            opacity: 0,
            scale: 0.72,
            rotate: -6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.025,
          }}
          onClick={() =>
            setPhotoActive(mainPhoto)
          }
        >
          {/* Halo derrière */}

          <div
            className="
              absolute
              -inset-8
              rounded-[3rem]
              blur-3xl
              opacity-40
            "
            style={{
              background:
                'rgba(197,143,165,.22)',
            }}
          />

          {/* Ombre */}

          <div
            className="
              absolute
              inset-5
              rounded-[2rem]
              blur-3xl
            "
            style={{
              background:
                'rgba(0,0,0,.5)',
            }}
          />

          {/* Cadre */}

          <div
            className="
              relative
              h-full
              w-full
              p-2
              md:p-3
              rounded-[2rem]
              overflow-hidden
            "
            style={{
              background: `
                linear-gradient(
                  145deg,
                  ${COLORS.champagne},
                  ${COLORS.ivory},
                  ${COLORS.rose}
                )
              `,
              boxShadow:
                '0 30px 90px rgba(0,0,0,.35)',
            }}
          >
            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[1.5rem]
              "
            >
              <motion.img
                src={mainPhoto.url}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                "
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 1.2,
                }}
              />

              {/* Dégradé */}

              <div
                className="
                  absolute
                  inset-0
                "
                style={{
                  background:
                    'linear-gradient(to top, rgba(8,11,32,.7), transparent 55%, rgba(8,11,32,.08))',
                }}
              />

              {/* Reflet */}

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  pointer-events-none
                "
              >
                <div
                  className="
                    absolute
                    top-0
                    bottom-0
                    w-[35%]
                  "
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent)',
                    animation:
                      'shimmer 7s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Texte */}

              <div
                className="
                  absolute
                  bottom-7
                  left-0
                  right-0
                  text-center
                  text-white
                "
              >
                <p
                  className="
                    uppercase
                    tracking-[0.4em]
                    text-[8px]
                  "
                  style={{
                    color:
                      'rgba(251,247,241,.75)',
                  }}
                >
                  Un moment précieux
                </p>

                <motion.div
                  className="mt-3 text-xl"
                  style={{
                    color:
                      COLORS.roseLight,
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                >
                  ♥
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            PHOTOS SECONDAIRES
        ================================================== */}

        {secondaryPhotos.map(
          (photo, index) => {
            const positions = [
              `
                top-[10%]
                left-[2%]
                md:left-[7%]
                rotate-[-8deg]
              `,
              `
                top-[8%]
                right-[2%]
                md:right-[7%]
                rotate-[8deg]
              `,
              `
                bottom-[8%]
                left-[2%]
                md:left-[9%]
                rotate-[7deg]
              `,
              `
                bottom-[6%]
                right-[2%]
                md:right-[9%]
                rotate-[-8deg]
              `,
            ];

            const animations = [
              {
                y: [-8, 12, -8],
                x: [0, 8, 0],
              },
              {
                y: [10, -10, 10],
                x: [0, -8, 0],
              },
              {
                y: [8, -8, 8],
                x: [0, 10, 0],
              },
              {
                y: [-8, 8, -8],
                x: [0, -10, 0],
              },
            ];

            return (
              <motion.div
                key={photo.id}
                className={`
                  absolute
                  z-20
                  ${positions[index]}
                  w-[125px]
                  h-[165px]
                  sm:w-[155px]
                  sm:h-[205px]
                  md:w-[185px]
                  md:h-[245px]
                  cursor-pointer
                `}
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate:
                    index % 2 === 0
                      ? -20
                      : 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate:
                    index % 2 === 0
                      ? -5
                      : 5,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    0.45 + index * 0.18,
                  duration: 1,
                  type: 'spring',
                  stiffness: 75,
                }}
                animate={animations[index]}
                whileHover={{
                  scale: 1.12,
                  rotate: 0,
                  zIndex: 60,
                }}
                onClick={() =>
                  setPhotoActive(photo)
                }
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -inset-3
                    rounded-3xl
                    blur-xl
                    opacity-0
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      'rgba(197,143,165,.22)',
                  }}
                />

                {/* Cadre */}

                <div
                  className="
                    relative
                    w-full
                    h-full
                    p-2
                    md:p-3
                    rounded-2xl
                  "
                  style={{
                    background: `
                      linear-gradient(
                        145deg,
                        rgba(251,247,241,1),
                        rgba(220,199,154,.9)
                      )
                    `,
                    boxShadow:
                      '0 25px 55px rgba(0,0,0,.3)',
                  }}
                >
                  <div
                    className="
                      relative
                      w-full
                      h-full
                      overflow-hidden
                      rounded-xl
                    "
                  >
                    <motion.img
                      src={photo.url}
                      alt=""
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                    />

                    <div
                      className="
                        absolute
                        inset-0
                      "
                      style={{
                        background:
                          'linear-gradient(to bottom, transparent 65%, rgba(8,11,32,.28))',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          }
        )}

        {/* =================================================
            COEUR CENTRAL
        ================================================== */}

        <motion.div
          className="
            absolute
            bottom-1
            left-1/2
            -translate-x-1/2
            z-40
            w-14
            h-14
            rounded-full
            flex
            items-center
            justify-center
          "
          style={{
            background:
              'rgba(17,21,47,.9)',
            border:
              '1px solid rgba(220,199,154,.45)',
            boxShadow:
              '0 0 35px rgba(197,143,165,.2)',
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span
            style={{
              color: COLORS.roseLight,
              fontSize: 19,
            }}
          >
            ♥
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          INDICATION
      ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          text-center
          mt-12
          px-6
        "
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.4,
        }}
      >
        <div
          className="
            inline-flex
            items-center
            gap-4
            px-6
            py-3
            rounded-full
          "
          style={{
            background:
              'rgba(255,255,255,.045)',
            border:
              '1px solid rgba(220,199,154,.18)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span
            className="text-xs"
            style={{
              color: COLORS.champagne,
            }}
          >
            ✦
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.28em]
            "
            style={{
              color:
                'rgba(251,247,241,.55)',
            }}
          >
            Cliquez sur une photo
          </span>

          <span
            className="text-xs"
            style={{
              color: COLORS.champagne,
            }}
          >
            ✦
          </span>
        </div>
      </motion.div>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      <AnimatePresence>
        {photoActive && (
          <motion.div
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              p-5
            "
            style={{
              background:
                'rgba(5,7,20,.96)',
              backdropFilter:
                'blur(18px)',
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setPhotoActive(null)
            }
          >
            {/* Etoiles lightbox */}

            <Stars />

            {/* =================================================
                FERMER
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                setPhotoActive(null)
              }
              className="
                absolute
                top-6
                right-6
                md:top-8
                md:right-8
                z-50
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-300
              "
              style={{
                background:
                  'rgba(255,255,255,.08)',
                border:
                  '1px solid rgba(255,255,255,.16)',
                color: COLORS.ivory,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* =================================================
                PRECEDENTE
            ================================================== */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousPhoto();
              }}
              className="
                absolute
                left-4
                md:left-8
                top-1/2
                -translate-y-1/2
                z-50
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-300
              "
              style={{
                background:
                  'rgba(255,255,255,.08)',
                border:
                  '1px solid rgba(255,255,255,.16)',
                color: COLORS.ivory,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* =================================================
                SUIVANTE
            ================================================== */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="
                absolute
                right-4
                md:right-8
                top-1/2
                -translate-y-1/2
                z-50
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-300
              "
              style={{
                background:
                  'rgba(255,255,255,.08)',
                border:
                  '1px solid rgba(255,255,255,.16)',
                color: COLORS.ivory,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* =================================================
                PHOTO ACTIVE
            ================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={photoActive.id}
                className="
                  relative
                  max-w-5xl
                  max-h-[90vh]
                  z-20
                "
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: -3,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: 3,
                  y: -30,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                {/* Halo */}

                <div
                  className="
                    absolute
                    -inset-8
                    rounded-[3rem]
                    blur-3xl
                    opacity-40
                  "
                  style={{
                    background:
                      'rgba(197,143,165,.25)',
                  }}
                />

                {/* Cadre */}

                <div
                  className="
                    relative
                    p-2
                    md:p-4
                    rounded-[1.7rem]
                  "
                  style={{
                    background: `
                      linear-gradient(
                        145deg,
                        ${COLORS.champagne},
                        ${COLORS.ivory},
                        ${COLORS.rose}
                      )
                    `,
                    boxShadow:
                      '0 35px 100px rgba(0,0,0,.5)',
                  }}
                >
                  <img
                    src={photoActive.url}
                    alt=""
                    className="
                      relative
                      max-w-[85vw]
                      max-h-[80vh]
                      object-contain
                      rounded-xl
                    "
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                COMPTEUR
            ================================================== */}

            <div
              className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                z-50
                text-[10px]
                tracking-[0.35em]
              "
              style={{
                color:
                  'rgba(251,247,241,.5)',
              }}
            >
              {activeIndex + 1} /{' '}
              {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}