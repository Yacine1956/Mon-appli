
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
      {/* Audio */}
      <audio
        ref={audioRef}
        src={url}
        loop
        className="hidden"
        onPlay={() => setLecture(true)}
        onPause={() => setLecture(false)}
      />

      {/* =====================================================
          BOUTON MUSIQUE FLOTTANT
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 40, y: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed bottom-5 right-5 z-[60]"
      >

        {/* Halo extérieur */}
        <AnimatePresence>
          {lecture && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: [0.15, 0, 0.15],
                  scale: [1, 1.7, 1],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute inset-0 rounded-full bg-amber-400 blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [1, 2, 1],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.7,
                }}
                className="absolute inset-0 rounded-full border border-amber-400"
              />
            </>
          )}
        </AnimatePresence>

        {/* Bouton principal */}
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
            bg-white/95
            backdrop-blur-md
            border
            border-amber-200
            shadow-[0_10px_35px_rgba(120,90,40,0.25)]
            overflow-hidden
          "
          aria-label={lecture ? 'Mettre la musique en pause' : 'Lire la musique'}
        >

          {/* Cercle doré intérieur */}
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
              duration: 8,
              repeat: lecture ? Infinity : 0,
              ease: 'linear',
            }}
            className="
              absolute
              inset-[5px]
              rounded-full
              border
              border-dashed
              border-amber-300/70
            "
          />

          {/* Petit disque central */}
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
              duration: 4,
              repeat: lecture ? Infinity : 0,
              ease: 'linear',
            }}
            className="
              relative
              w-10
              h-10
              rounded-full
              bg-gradient-to-br
              from-amber-100
              via-white
              to-amber-200
              border
              border-amber-200
              flex
              items-center
              justify-center
              shadow-inner
            "
          >

            {/* Motif du disque */}
            <div className="absolute inset-2 rounded-full border border-amber-300/50" />
            <div className="absolute inset-[9px] rounded-full border border-amber-300/40" />

            {/* Centre */}
            <motion.div
              animate={
                lecture
                  ? {
                      scale: [1, 1.15, 1],
                    }
                  : {
                      scale: 1,
                    }
              }
              transition={{
                duration: 1.5,
                repeat: lecture ? Infinity : 0,
              }}
              className="
                w-3
                h-3
                rounded-full
                bg-amber-500
                flex
                items-center
                justify-center
              "
            >
              <span className="text-[6px] text-white">♥</span>
            </motion.div>

          </motion.div>

          {/* Icône play/pause */}
          <div className="absolute inset-0 flex items-center justify-center">

            <AnimatePresence mode="wait">
              {!lecture ? (
                <motion.svg
                  key="play"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="
                    w-4
                    h-4
                    text-stone-700
                    ml-[2px]
                  "
                >
                  <path d="M8 5.14v13.72c0 .79.87 1.27 1.54.84l10.08-6.86a1 1 0 000-1.66L9.54 4.3A1 1 0 008 5.14z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="pause"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-stone-700"
                >
                  <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
                </motion.svg>
              )}
            </AnimatePresence>

          </div>

        </motion.button>

        {/* =====================================================
            PETITES NOTES MUSICALES
        ====================================================== */}
        <AnimatePresence>
          {lecture && (
            <>
              <motion.span
                initial={{ opacity: 0, y: 5, x: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -35,
                  x: -12,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
                className="
                  absolute
                  top-0
                  left-2
                  text-amber-500
                  text-lg
                  pointer-events-none
                "
              >
                ♪
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -45,
                  x: 15,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  delay: 0.8,
                }}
                className="
                  absolute
                  top-2
                  right-1
                  text-amber-400
                  text-sm
                  pointer-events-none
                "
              >
                ♫
              </motion.span>
            </>
          )}
        </AnimatePresence>

        {/* =====================================================
            INDICATEUR "MUSIQUE"
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
              transition={{ duration: 0.4 }}
              className="
                absolute
                right-[72px]
                top-1/2
                -translate-y-1/2
                whitespace-nowrap
                px-3
                py-2
                rounded-full
                bg-white/90
                backdrop-blur-md
                border
                border-amber-100
                shadow-lg
              "
            >
              <div className="flex items-center gap-2">

                {/* Barres musicales */}
                <div className="flex items-end gap-[2px] h-3">
                  {[1, 2, 3, 4].map((barre) => (
                    <motion.span
                      key={barre}
                      animate={{
                        height: ['25%', '100%', '45%', '80%', '25%'],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: barre * 0.12,
                      }}
                      className="w-[2px] rounded-full bg-amber-500"
                    />
                  ))}
                </div>

                <span className="text-[9px] uppercase tracking-[0.18em] text-stone-600">
                  Notre chanson
                </span>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </>
  );
}

