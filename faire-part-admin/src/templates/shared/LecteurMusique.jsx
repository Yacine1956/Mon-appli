import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LecteurMusique({ url, demarrer }) {
  const audioRef = useRef(null);
  const [lecture, setLecture] = useState(false);

  useEffect(() => {
    if (demarrer && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setLecture(true))
        .catch(() => {
          // Le navigateur peut bloquer l'autoplay.
        });
    }
  }, [demarrer]);

  if (!url) return null;

  const basculerLecture = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setLecture(true))
        .catch(() => {});
    } else {
      audioRef.current.pause();
      setLecture(false);
    }
  };

  return (
    <>
      {/* =====================================================
          AUDIO
      ====================================================== */}
      <audio
        ref={audioRef}
        src={url}
        loop
        className="hidden"
        onPlay={() => setLecture(true)}
        onPause={() => setLecture(false)}
      />

      {/* =====================================================
          LECTEUR FLOTTANT
      ====================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          x: 40,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed bottom-5 right-5 z-[60]"
      >
        {/* =====================================================
            HALOS LUMINEUX
        ====================================================== */}
        <AnimatePresence>
          {lecture && (
            <>
              {/* Halo rose */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: [0.12, 0.3, 0.12],
                  scale: [1, 1.65, 1],
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="
                  absolute
                  inset-[-8px]
                  rounded-full
                  bg-[#C58FA5]
                  blur-xl
                "
              />

              {/* Halo champagne */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: [0, 0.45, 0],
                  scale: [1, 2, 1],
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.6,
                }}
                className="
                  absolute
                  inset-[-4px]
                  rounded-full
                  border
                  border-[#DCC79A]/80
                "
              />

              {/* Troisième halo */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: [0, 0.2, 0],
                  scale: [1, 2.4, 1],
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 1.2,
                }}
                className="
                  absolute
                  inset-[-3px]
                  rounded-full
                  border
                  border-[#C58FA5]/50
                "
              />
            </>
          )}
        </AnimatePresence>

        {/* =====================================================
            PETITES ÉTOILES AUTOUR DU LECTEUR
        ====================================================== */}
        <AnimatePresence>
          {lecture && (
            <>
              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.4, 1, 0.4],
                  x: [-3, -18, -25],
                  y: [5, -12, -25],
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-1
                  left-2
                  text-[#DCC79A]
                  text-xs
                  pointer-events-none
                "
              >
                ✦
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.3, 1, 0.3],
                  x: [0, 12, 22],
                  y: [0, -20, -36],
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: 0.7,
                }}
                className="
                  absolute
                  top-4
                  right-3
                  text-[#E4B9C7]
                  text-sm
                  pointer-events-none
                "
              >
                ✧
              </motion.span>
            </>
          )}
        </AnimatePresence>

        {/* =====================================================
            BOUTON PRINCIPAL
        ====================================================== */}
        <motion.button
          type="button"
          onClick={basculerLecture}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            relative
            w-16
            h-16
            rounded-full
            flex
            items-center
            justify-center
            overflow-hidden
            bg-gradient-to-br
            from-[#FBF7F1]
            via-[#F1E5C5]
            to-[#DCC79A]
            border
            border-[#DCC79A]
            shadow-[0_12px_40px_rgba(8,11,32,0.55)]
          "
          aria-label={
            lecture
              ? 'Mettre la musique en pause'
              : 'Lire la musique'
          }
        >
          {/* Reflet lumineux */}
          <motion.div
            animate={{
              x: ['-120%', '140%'],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
            className="
              absolute
              top-0
              left-0
              w-1/3
              h-full
              bg-white/40
              blur-md
              rotate-12
              pointer-events-none
            "
          />

          {/* =====================================================
              CERCLE EXTÉRIEUR
          ====================================================== */}
          <motion.div
            animate={
              lecture
                ? {
                    rotate: 360,
                  }
                : {
                    rotate: 0,
                  }
            }
            transition={{
              duration: 10,
              repeat: lecture ? Infinity : 0,
              ease: 'linear',
            }}
            className="
              absolute
              inset-[4px]
              rounded-full
              border
              border-dashed
              border-[#422A4D]/30
            "
          />

          {/* Cercle champagne */}
          <div
            className="
              absolute
              inset-[8px]
              rounded-full
              border
              border-[#C58FA5]/40
            "
          />

          {/* =====================================================
              DISQUE CENTRAL
          ====================================================== */}
          <motion.div
            animate={
              lecture
                ? {
                    rotate: 360,
                  }
                : {
                    rotate: 0,
                  }
            }
            transition={{
              duration: 5,
              repeat: lecture ? Infinity : 0,
              ease: 'linear',
            }}
            className="
              relative
              w-10
              h-10
              rounded-full
              bg-gradient-to-br
              from-[#11152F]
              via-[#422A4D]
              to-[#080B20]
              border
              border-[#DCC79A]/70
              flex
              items-center
              justify-center
              shadow-[0_4px_15px_rgba(8,11,32,0.35)]
            "
          >
            {/* Sillons du disque */}
            <div
              className="
                absolute
                inset-[4px]
                rounded-full
                border
                border-[#DCC79A]/20
              "
            />

            <div
              className="
                absolute
                inset-[8px]
                rounded-full
                border
                border-[#DCC79A]/20
              "
            />

            <div
              className="
                absolute
                inset-[11px]
                rounded-full
                border
                border-[#C58FA5]/30
              "
            />

            {/* Centre */}
            <motion.div
              animate={
                lecture
                  ? {
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 rgba(220,199,154,0)',
                        '0 0 14px rgba(220,199,154,0.65)',
                        '0 0 0 rgba(220,199,154,0)',
                      ],
                    }
                  : {
                      scale: 1,
                    }
              }
              transition={{
                duration: 1.6,
                repeat: lecture ? Infinity : 0,
              }}
              className="
                relative
                w-3
                h-3
                rounded-full
                bg-[#DCC79A]
                flex
                items-center
                justify-center
              "
            >
              <span className="text-[6px] text-[#422A4D]">
                ♥
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================================
              PLAY / PAUSE
          ====================================================== */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!lecture ? (
                <motion.svg
                  key="play"
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
                  transition={{
                    duration: 0.2,
                  }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="
                    w-4
                    h-4
                    text-[#FBF7F1]
                    ml-[2px]
                    drop-shadow-md
                  "
                >
                  <path d="M8 5.14v13.72c0 .79.87 1.27 1.54.84l10.08-6.86a1 1 0 000-1.66L9.54 4.3A1 1 0 008 5.14z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="pause"
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
                  transition={{
                    duration: 0.2,
                  }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="
                    w-4
                    h-4
                    text-[#FBF7F1]
                    drop-shadow-md
                  "
                >
                  <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </motion.button>

        {/* =====================================================
            NOTES MUSICALES
        ====================================================== */}
        <AnimatePresence>
          {lecture && (
            <>
              <motion.span
                initial={{
                  opacity: 0,
                  y: 5,
                  x: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -38,
                  x: -15,
                  scale: [0.5, 1, 0.7],
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-0
                  left-1
                  text-[#C58FA5]
                  text-lg
                  pointer-events-none
                "
              >
                ♪
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  y: 5,
                  x: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -48,
                  x: 16,
                  scale: [0.5, 1, 0.7],
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.8,
                }}
                className="
                  absolute
                  top-1
                  right-1
                  text-[#DCC79A]
                  text-sm
                  pointer-events-none
                "
              >
                ♫
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: -25,
                  x: 25,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.4,
                }}
                className="
                  absolute
                  top-3
                  right-0
                  text-[#E4B9C7]
                  text-xs
                  pointer-events-none
                "
              >
                ✦
              </motion.span>
            </>
          )}
        </AnimatePresence>

        {/* =====================================================
            ÉTIQUETTE "NOTRE CHANSON"
        ====================================================== */}
        <AnimatePresence>
          {lecture && (
            <motion.div
              initial={{
                opacity: 0,
                x: 15,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: 15,
                scale: 0.8,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                right-[72px]
                top-1/2
                -translate-y-1/2
                whitespace-nowrap
                px-3
                py-2
                rounded-full
                bg-[#080B20]/90
                backdrop-blur-xl
                border
                border-[#DCC79A]/30
                shadow-[0_8px_30px_rgba(8,11,32,0.45)]
              "
            >
              <div className="flex items-center gap-2">
                {/* Égaliseur */}
                <div className="flex items-end gap-[2px] h-3">
                  {[1, 2, 3, 4].map((barre) => (
                    <motion.span
                      key={barre}
                      animate={{
                        height: [
                          '25%',
                          '100%',
                          '45%',
                          '80%',
                          '25%',
                        ],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: barre * 0.12,
                      }}
                      className="
                        w-[2px]
                        rounded-full
                        bg-[#DCC79A]
                      "
                    />
                  ))}
                </div>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-[#F1E5C5]
                  "
                >
                  Notre chanson
                </span>

                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="text-[#C58FA5] text-xs"
                >
                  ♡
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}