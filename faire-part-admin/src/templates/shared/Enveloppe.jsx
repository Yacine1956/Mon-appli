import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LecteurMusique from './LecteurMusique';

/* =========================================================
   INITIALLES
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
   PETITE FLEUR
========================================================= */
function Fleur({ className = '', style = {}, scale = 1 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: [0.55, 1, 0.7],
        scale: [0.95 * scale, 1.05 * scale, 0.98 * scale],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className="relative"
        style={{
          width: `${42 * scale}px`,
          height: `${42 * scale}px`,
        }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <span
            key={angle}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: `${15 * scale}px`,
              height: `${24 * scale}px`,
              transform: `
                translate(-50%, -50%)
                rotate(${angle}deg)
                translateY(-9px)
              `,
              transformOrigin: '50% 100%',
              background:
                'linear-gradient(135deg, #fff1f2 0%, #f8c8d0 55%, #d89aa6 100%)',
              boxShadow: '0 2px 7px rgba(90, 20, 35, 0.12)',
            }}
          />
        ))}

        <span
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: `${10 * scale}px`,
            height: `${10 * scale}px`,
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle at 35% 30%, #fff8d7, #d7a83f 65%, #9b6b19)',
            boxShadow: '0 0 8px rgba(215,168,63,.45)',
          }}
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   BRANCHE FLORALE
========================================================= */
function BrancheFlorale({ flip = false }) {
  return (
    <svg
      viewBox="0 0 180 150"
      className={`absolute w-[150px] sm:w-[190px] pointer-events-none ${
        flip ? 'scale-x-[-1]' : ''
      }`}
      fill="none"
    >
      <path
        d="M12 138 C45 105, 58 74, 93 45 C119 24, 142 13, 169 9"
        stroke="#b48a38"
        strokeWidth="1.5"
        opacity=".65"
      />

      <path
        d="M47 105 C39 89, 29 82, 18 78"
        stroke="#b48a38"
        strokeWidth="1.2"
        opacity=".55"
      />

      <path
        d="M71 76 C70 58, 63 48, 53 39"
        stroke="#b48a38"
        strokeWidth="1.2"
        opacity=".55"
      />

      <path
        d="M103 42 C100 29, 104 20, 111 13"
        stroke="#b48a38"
        strokeWidth="1.2"
        opacity=".55"
      />

      <ellipse
        cx="27"
        cy="76"
        rx="8"
        ry="4"
        transform="rotate(32 27 76)"
        fill="#d8b96a"
        opacity=".6"
      />

      <ellipse
        cx="57"
        cy="41"
        rx="8"
        ry="4"
        transform="rotate(45 57 41)"
        fill="#d8b96a"
        opacity=".6"
      />

      <ellipse
        cx="111"
        cy="13"
        rx="8"
        ry="4"
        transform="rotate(-20 111 13)"
        fill="#d8b96a"
        opacity=".6"
      />

      <circle cx="53" cy="39" r="4" fill="#efd4da" />
      <circle cx="111" cy="13" r="4" fill="#efd4da" />
      <circle cx="18" cy="78" r="4" fill="#efd4da" />
    </svg>
  );
}

/* =========================================================
   PARTICULE
========================================================= */
function Particule({ style, delay = 0 }) {
  return (
    <motion.span
      className="absolute w-1 h-1 rounded-full bg-[#f4d78a]"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        y: [-5, -22],
      }}
      transition={{
        duration: 3.5,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

/* =========================================================
   ENVELOPPE FLEURIE ROMANTIQUE
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
    document.body.style.overflow = ouverte ? 'hidden' : 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [ouverte]);

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
    }, 2300);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 50% 35%, #6f1d2c 0%, #4c101d 38%, #26070f 100%)',
      }}
    >
      {/* =====================================================
          HALOS LUMINEUX
      ===================================================== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle at center, rgba(232,190,95,.16), transparent 42%)',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(255,220,180,.08), transparent 25%), radial-gradient(circle at 80% 80%, rgba(255,190,200,.07), transparent 30%)',
        }}
      />

      {/* =====================================================
          PARTICULES
      ===================================================== */}
      <Particule style={{ left: '12%', bottom: '24%' }} delay={0} />
      <Particule style={{ left: '21%', bottom: '37%' }} delay={1.2} />
      <Particule style={{ left: '30%', bottom: '17%' }} delay={2.1} />
      <Particule style={{ left: '70%', bottom: '25%' }} delay={0.7} />
      <Particule style={{ left: '79%', bottom: '40%' }} delay={1.8} />
      <Particule style={{ left: '88%', bottom: '18%' }} delay={2.5} />

      {/* =====================================================
          FLEURS DÉCORATIVES
      ===================================================== */}
      <Fleur
        className="left-[5%] top-[10%]"
        scale={1}
      />

      <Fleur
        className="right-[5%] top-[14%]"
        scale={0.8}
      />

      <Fleur
        className="left-[8%] bottom-[12%]"
        scale={0.65}
      />

      <Fleur
        className="right-[8%] bottom-[10%]"
        scale={0.7}
      />

      <BrancheFlorale
        flip={false}
        style={{
          left: '-10px',
          top: '20px',
        }}
      />

      <div className="absolute right-0 top-0">
        <BrancheFlorale flip />
      </div>

      {/* =====================================================
          CONTENU CENTRAL
      ===================================================== */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.94 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-[390px]"
        >
          {/* =================================================
              OMBRE
          ================================================= */}
          <motion.div
            className="absolute left-1/2 top-[92%] h-12 w-[85%] -translate-x-1/2 rounded-full bg-black/40 blur-2xl"
            animate={{
              scaleX: ouverte ? 0.7 : 1,
              opacity: ouverte ? 0.18 : 0.45,
            }}
            transition={{ duration: 1 }}
          />

          {/* =================================================
              ENVELOPPE
          ================================================= */}
          <div
            className="relative"
            style={{
              perspective: '1400px',
            }}
          >
            {/* =================================================
                CARTE INTÉRIEURE
            ================================================= */}
            <motion.div
              className="absolute left-[7%] top-[5%] z-[1] w-[86%] overflow-hidden rounded-[4px]"
              initial={{
                y: 0,
                opacity: 0,
              }}
              animate={{
                y: ouverte ? '-62%' : 0,
                opacity: ouverte ? 1 : 0,
              }}
              transition={{
                duration: 1.4,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                height: '84%',
                background:
                  'linear-gradient(145deg, #fffdf8 0%, #fff8ed 100%)',
                boxShadow:
                  '0 18px 45px rgba(0,0,0,.25), inset 0 0 0 1px rgba(180,138,56,.25)',
              }}
            >
              {/* bordure intérieure */}
              <div className="absolute inset-3 border border-[#d6b76a]/40" />

              <div className="relative flex h-full flex-col items-center justify-center px-7 text-center">
                <div className="mb-3 text-[9px] uppercase tracking-[0.38em] text-[#a47a32]">
                  Une invitation spéciale
                </div>

                <div className="mb-2 font-serif text-2xl text-[#5b1725]">
                  Vous êtes invités
                </div>

                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c8a04b] to-transparent" />

                <div className="mt-4 text-[10px] tracking-[0.18em] text-[#8a6a3a]">
                  À NOTRE HISTOIRE D'AMOUR
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CORPS DE L'ENVELOPPE
            ================================================= */}
            <motion.div
              className="relative z-[3] overflow-hidden rounded-[5px]"
              animate={{
                scale: ouverte ? 0.96 : 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.8,
              }}
              style={{
                height: '255px',
                background:
                  'linear-gradient(145deg, #7b2032 0%, #641424 45%, #4a0d19 100%)',
                boxShadow:
                  '0 30px 70px rgba(0,0,0,.42), inset 0 0 0 1px rgba(244,215,138,.5)',
                border: '1px solid rgba(232,194,101,.55)',
              }}
            >
              {/* texture */}
              <div
                className="absolute inset-0 opacity-[0.13] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(255,255,255,.7) .5px, transparent .5px)',
                  backgroundSize: '7px 7px',
                }}
              />

              {/* coins lumineux */}
              <div className="absolute left-4 top-4 h-16 w-16 rounded-full bg-[#e8c56c]/10 blur-xl" />
              <div className="absolute right-4 bottom-4 h-20 w-20 rounded-full bg-[#f2c7cf]/10 blur-xl" />

              {/* =================================================
                  RABAT SUPÉRIEUR
              ================================================= */}
              <motion.div
                className="absolute left-0 top-0 z-[7] h-[52%] w-full"
                animate={{
                  rotateX: ouverte ? -178 : 0,
                  translateY: ouverte ? '-3%' : '0%',
                }}
                transition={{
                  duration: 1.35,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: '50% 0%',
                  transformStyle: 'preserve-3d',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background:
                    'linear-gradient(145deg, #8b293d 0%, #671625 55%, #4c0d19 100%)',
                  borderBottom: '1px solid rgba(236,199,111,.55)',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* bordure du rabat */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    borderTop: '1px solid rgba(245,220,151,.45)',
                  }}
                />

                {/* petites fleurs sur le rabat */}
                <div className="absolute left-[18%] top-[18%]">
                  <Fleur scale={0.38} />
                </div>

                <div className="absolute right-[18%] top-[18%]">
                  <Fleur scale={0.38} />
                </div>
              </motion.div>

              {/* =================================================
                  CÔTÉS DE L'ENVELOPPE
              ================================================= */}
              <div
                className="absolute bottom-0 left-0 z-[5] h-[72%] w-[52%]"
                style={{
                  clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
                  background:
                    'linear-gradient(145deg, #741c2d 0%, #54101e 100%)',
                  borderRight: '1px solid rgba(226,187,99,.35)',
                }}
              />

              <div
                className="absolute bottom-0 right-0 z-[5] h-[72%] w-[52%]"
                style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                  background:
                    'linear-gradient(225deg, #7c2032 0%, #500f1c 100%)',
                  borderLeft: '1px solid rgba(226,187,99,.35)',
                }}
              />

              {/* =================================================
                  BAS DE L'ENVELOPPE
              ================================================= */}
              <div
                className="absolute bottom-0 left-0 z-[6] h-[62%] w-full"
                style={{
                  clipPath: 'polygon(0 100%, 50% 18%, 100% 100%)',
                  background:
                    'linear-gradient(180deg, #691626 0%, #4c0d19 100%)',
                }}
              />

              {/* =================================================
                  ORNEMENT CENTRAL
              ================================================= */}
              <motion.div
                className="absolute left-1/2 top-[55%] z-[20] -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: ouverte ? 0.85 : 1,
                  opacity: ouverte ? 0 : 1,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                }}
              >
                {/* halo */}
                <div className="absolute inset-[-18px] rounded-full bg-[#e8c56c]/10 blur-xl" />

                {/* cercle extérieur */}
                <div
                  className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full"
                  style={{
                    background:
                      'linear-gradient(145deg, #e8ca78, #a97621)',
                    boxShadow:
                      '0 10px 28px rgba(0,0,0,.35), inset 0 2px 4px rgba(255,255,255,.5)',
                  }}
                >
                  {/* sceau */}
                  <div
                    className="flex h-[68px] w-[68px] items-center justify-center rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle at 35% 30%, #9c3046, #681627 68%, #450b16)',
                      border: '2px solid rgba(255,232,163,.75)',
                      boxShadow:
                        'inset 0 3px 8px rgba(255,255,255,.12), inset 0 -5px 10px rgba(0,0,0,.25)',
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="font-serif text-[18px] tracking-wide"
                        style={{
                          color: '#f8e3a8',
                          textShadow: '0 1px 2px rgba(0,0,0,.3)',
                        }}
                      >
                        {initiales}
                      </div>

                      <div className="mt-0.5 text-[7px] uppercase tracking-[0.25em] text-[#efdba0]">
                        amour
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  TEXTE
              ================================================= */}
              <motion.div
                className="absolute bottom-[17px] left-0 z-[15] w-full text-center"
                animate={{
                  opacity: ouverte ? 0 : 1,
                  y: ouverte ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-serif text-[17px] italic text-[#f7e8c3]">
                  Ouvrez votre invitation
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.32em] text-[#d8bb73]">
                  Touchez le sceau
                </p>
              </motion.div>

              {/* =================================================
                  FLEURS BAS GAUCHE / DROITE
              ================================================= */}
              <div className="absolute bottom-[-4px] left-[5px] z-[10]">
                <Fleur scale={0.52} />
              </div>

              <div className="absolute bottom-[-3px] right-[5px] z-[10]">
                <Fleur scale={0.48} />
              </div>
            </motion.div>

            {/* =================================================
                BOUTON INVISIBLE
            ================================================= */}
            {!ouverte && (
              <button
                type="button"
                aria-label="Ouvrir l'invitation"
                onClick={handleClick}
                className="absolute inset-0 z-[50] cursor-pointer"
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          MESSAGE APRÈS OUVERTURE
      ===================================================== */}
      <AnimatePresence>
        {animationTerminee && (
          <motion.div
            className="absolute bottom-7 left-1/2 z-[100] -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <div className="rounded-full border border-[#e6c778]/25 bg-black/10 px-5 py-2 backdrop-blur-sm">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#ecd79d]">
                Bienvenue dans notre histoire
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FLASH D'OUVERTURE
      ===================================================== */}
      <AnimatePresence>
        {ouverte && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-[200] bg-[#fff8e8]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.22, 0],
            }}
            transition={{
              duration: 1.2,
              delay: 0.75,
              times: [0, 0.25, 1],
            }}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MUSIQUE
      ===================================================== */}
      <LecteurMusique
        url={musiqueUrl}
        demarrer={ouverte}
      />

      {/* =====================================================
          CONTENU DE L'INVITATION
      ===================================================== */}
      <AnimatePresence>
        {animationTerminee && (
          <motion.div
            className="absolute inset-0 z-[300] overflow-y-auto"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
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