import { motion } from 'framer-motion';

import Countdown from '../shared/Countdown';
import Galerie from '../shared/Galerie';
import GoogleMap from '../shared/GoogleMap';
import PartageBoutons from '../shared/PartageBoutons';

/* =========================================================
   PALETTE
========================================================= */

const COLORS = {
  burgundy: '#4A1824',
  burgundyLight: '#6B2635',
  burgundyDark: '#321019',
  gold: '#D6B36A',
  goldLight: '#E7CB91',
  ivory: '#FBF5EA',
  cream: '#F4EBDD',
  rose: '#B98282',
  text: '#4B3434',
};

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.88,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   ORNEMENT DORÉ
========================================================= */

function GoldOrnament({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={`w-16 md:w-24 h-px ${
          light
            ? 'bg-gradient-to-r from-transparent to-[#D6B36A]'
            : 'bg-gradient-to-r from-transparent to-[#B98C4D]'
        }`}
      />

      <motion.span
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 1.12, 1],
        }}
        transition={{
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className={`text-sm ${
          light ? 'text-[#E7CB91]' : 'text-[#B98C4D]'
        }`}
      >
        ✦
      </motion.span>

      <span
        className={`w-16 md:w-24 h-px ${
          light
            ? 'bg-gradient-to-l from-transparent to-[#D6B36A]'
            : 'bg-gradient-to-l from-transparent to-[#B98C4D]'
        }`}
      />
    </div>
  );
}

/* =========================================================
   FLEURS DÉCORATIVES
========================================================= */

function Flower({ className = '' }) {
  return (
    <motion.div
      animate={{
        rotate: [-3, 3, -3],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute pointer-events-none ${className}`}
    >
      <div className="relative w-28 h-28">

        <span className="absolute left-10 top-2 w-10 h-16 rounded-full bg-[#8B3C4B]/55 rotate-[35deg]" />

        <span className="absolute left-4 top-8 w-10 h-16 rounded-full bg-[#A65463]/45 -rotate-[35deg]" />

        <span className="absolute left-12 top-11 w-10 h-16 rounded-full bg-[#762D3C]/55 rotate-[80deg]" />

        <span className="absolute left-1 top-11 w-10 h-16 rounded-full bg-[#B66D78]/35 -rotate-[75deg]" />

        <span className="absolute left-10 top-10 w-8 h-8 rounded-full bg-[#D6B36A]" />

        <span className="absolute left-12 top-12 w-4 h-4 rounded-full bg-[#F0D69D]" />

        <span className="absolute left-20 top-17 w-9 h-3 rounded-full bg-[#69704D]/50 rotate-[35deg]" />

        <span className="absolute left-8 top-23 w-9 h-3 rounded-full bg-[#69704D]/45 -rotate-[25deg]" />

        <span className="absolute left-14 top-20 w-16 h-px bg-[#69704D]/50 rotate-[20deg]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PETITES ÉTOILES
========================================================= */

function GoldenParticles() {
  const items = [
    ['8%', '18%'],
    ['16%', '72%'],
    ['87%', '17%'],
    ['91%', '63%'],
    ['43%', '11%'],
    ['71%', '83%'],
    ['57%', '92%'],
    ['27%', '35%'],
  ];

  return (
    <>
      {items.map(([left, top], index) => (
        <motion.span
          key={index}
          className="absolute text-[#D6B36A]/50 text-[9px] pointer-events-none"
          style={{ left, top }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 4 + index * 0.4,
            delay: index * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ✦
        </motion.span>
      ))}
    </>
  );
}

/* =========================================================
   CADRE ROYAL
========================================================= */

function RoyalFrame({ children, dark = false }) {
  return (
    <div className="relative">

      <div
        className={`absolute inset-2 md:inset-4 border pointer-events-none ${
          dark
            ? 'border-[#D6B36A]/30'
            : 'border-[#B98C4D]/25'
        }`}
      />

      <div
        className={`absolute inset-5 md:inset-7 border pointer-events-none ${
          dark
            ? 'border-[#D6B36A]/10'
            : 'border-[#B98C4D]/10'
        }`}
      />

      {children}
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
      variants={stagger}
      className="text-center relative z-10"
    >
      <motion.p
        variants={fadeUp}
        className={`text-[9px] uppercase tracking-[0.5em] mb-4 ${
          light ? 'text-[#E2C98F]' : 'text-[#8D5260]'
        }`}
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className={`font-serif text-4xl md:text-5xl lg:text-6xl font-normal ${
          light ? 'text-[#FFF8EB]' : 'text-[#4A1824]'
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className="my-6"
      >
        <GoldOrnament light={light} />
      </motion.div>

      {description && (
        <motion.p
          variants={fadeUp}
          className={`max-w-xl mx-auto font-serif italic text-sm md:text-base leading-relaxed ${
            light ? 'text-[#DECDB5]' : 'text-[#806D68]'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
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
   ROYAL GOLD — NOUVEAU MODÈLE
========================================================= */

export default function RoyalGold({ invitation }) {
  const dateFormatee = formatDate(
    invitation.date_mariage
  );

  return (
    <main className="min-h-screen bg-[#FBF5EA] text-[#4B3434] overflow-hidden">

      {/* =====================================================
          HERO — STYLE ENVELOPPE BORDEAUX
      ===================================================== */}

      <section className="relative min-h-screen bg-[#4A1824] overflow-hidden flex items-center justify-center px-5 py-16">

        {/* Lumières */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#D6B36A] blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.05, 0.16, 0.05],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full bg-[#A65463] blur-[130px]"
        />

        <GoldenParticles />

        <Flower className="-left-8 top-12 opacity-80" />
        <Flower className="-right-8 bottom-12 rotate-180 opacity-70" />

        {/* Cadre */}

        <RoyalFrame dark>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
            }}
            className="relative z-10 w-[calc(100vw-60px)] max-w-6xl min-h-[80vh] flex items-center justify-center px-8 py-20 md:px-16"
          >

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center max-w-5xl"
            >

              <motion.p
                variants={fadeUp}
                className="text-[9px] uppercase tracking-[0.55em] text-[#E2C98F] mb-8"
              >
                Avec la bénédiction de leurs familles
              </motion.p>

              <motion.div
                variants={scaleIn}
                className="flex justify-center mb-7"
              >
                <div className="w-16 h-16 rounded-full border border-[#D6B36A]/50 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full border border-[#D6B36A]/30 flex items-center justify-center">
                    <span className="text-[#E7CB91] text-lg">
                      ♡
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="font-serif italic text-xl md:text-2xl text-[#E8D7C3]"
              >
                Deux cœurs, une promesse
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="font-serif font-normal text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] leading-none text-[#FFF8EB] mt-5"
              >
                {invitation.noms_maries}
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="my-9"
              >
                <GoldOrnament light />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="font-serif italic capitalize text-[#E5D2B6] text-base md:text-xl"
              >
                {dateFormatee}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-8 text-[9px] uppercase tracking-[0.4em] text-[#D6B36A]"
              >
                Nous vous invitons à partager notre bonheur
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex justify-center"
              >
                <div className="w-8 h-8 border border-[#D6B36A]/50 rotate-45 flex items-center justify-center">
                  <span className="-rotate-45 text-[#E7CB91] text-xs">
                    ✦
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </RoyalFrame>

        {/* Scroll */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
        >
          <span className="block text-[8px] uppercase tracking-[0.4em] text-[#DCC8AB] mb-2">
            Découvrir
          </span>

          <motion.span
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="block text-[#D6B36A]"
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      {/* =====================================================
          BIENVENUE — CARTE IVOIRE
      ===================================================== */}

      <section className="relative bg-[#FBF5EA] px-5 py-24 md:py-32 overflow-hidden">

        <Flower className="-left-10 top-10 opacity-50" />
        <Flower className="-right-10 bottom-0 rotate-180 opacity-40" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >

          <SectionHeading
            eyebrow="Notre histoire"
            title="Mot de bienvenue"
            description="Un mot venant du cœur pour vous accueillir dans notre bonheur."
          />

          {invitation.message_bienvenue && (
            <motion.div
              variants={scaleIn}
              className="relative mt-14 max-w-4xl mx-auto"
            >

              <div className="bg-[#4A1824] p-2 shadow-[0_25px_70px_rgba(74,24,36,0.16)]">

                <div className="border border-[#D6B36A]/35 p-2">

                  <div className="relative border border-[#D6B36A]/15 px-7 py-14 md:px-20 md:py-16 text-center">

                    <span className="absolute top-3 left-5 md:left-10 text-6xl font-serif text-[#D6B36A]/30">
                      “
                    </span>

                    <span className="absolute bottom-0 right-5 md:right-10 text-6xl font-serif text-[#D6B36A]/30">
                      ”
                    </span>

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="mx-auto mb-8 w-12 h-12 rounded-full border border-[#D6B36A]/50 flex items-center justify-center text-[#E7CB91]"
                    >
                      ♡
                    </motion.div>

                    <p className="relative font-serif italic text-lg md:text-2xl leading-[1.9] text-[#F8EBDC]">
                      {invitation.message_bienvenue}
                    </p>

                    <div className="mt-9">
                      <GoldOrnament light />
                    </div>

                    <p className="mt-5 font-serif italic text-sm text-[#D6B36A]">
                      Avec amour
                    </p>

                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* =====================================================
          COUNTDOWN — BORDEAUX
      ===================================================== */}

      <section className="relative bg-[#321019] px-5 py-24 md:py-28 overflow-hidden">

        <GoldenParticles />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-32 -top-32 w-72 h-72 rounded-full border border-[#D6B36A]/15"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full border border-[#D6B36A]/10"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >

          <SectionHeading
            eyebrow="Le grand jour approche"
            title="Le compte à rebours"
            description="Chaque seconde nous rapproche de ce moment tant attendu."
            light
          />

          <motion.div
            variants={scaleIn}
            className="mt-12"
          >
            <Countdown
              dateMariage={invitation.date_mariage}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          DÉTAILS
      ===================================================== */}

      <section className="relative bg-[#F4EBDD] px-5 py-24 md:py-32 overflow-hidden">

        <Flower className="-left-12 top-20 opacity-40" />
        <Flower className="-right-12 bottom-10 rotate-180 opacity-40" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="relative z-10 max-w-6xl mx-auto"
        >

          <SectionHeading
            eyebrow="Le programme"
            title="Le déroulement"
            description="Deux moments précieux pour célébrer notre union avec ceux que nous aimons."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8">

            {/* CÉRÉMONIE */}

            {invitation.lieu_ceremonie && (
              <motion.div
                variants={fadeLeft}
                className="relative"
              >

                <div className="bg-[#FBF5EA] p-2 shadow-[0_20px_55px_rgba(74,24,36,0.10)]">

                  <div className="border border-[#B98C4D]/35 p-2">

                    <div className="border border-[#B98C4D]/10 px-7 py-10 md:px-10 md:py-12 text-center">

                      <div className="mx-auto w-16 h-16 rounded-full bg-[#4A1824] border border-[#D6B36A] flex items-center justify-center text-[#E7CB91] text-xl">
                        I
                      </div>

                      <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-[#8D5260]">
                        Premier rendez-vous
                      </p>

                      <h3 className="font-serif text-3xl md:text-4xl text-[#4A1824] mt-3">
                        Takku jakka
                      </h3>

                      <div className="my-6">
                        <GoldOrnament />
                      </div>

                      {invitation.heure_ceremonie && (
                        <p className="font-serif italic text-2xl text-[#8D5260]">
                          {invitation.heure_ceremonie}
                        </p>
                      )}

                      <p className="mt-4 font-serif text-base md:text-lg text-[#6E5A55] leading-relaxed">
                        {invitation.lieu_ceremonie}
                      </p>

                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* RÉCEPTION */}

            {invitation.lieu_reception && (
              <motion.div
                variants={fadeRight}
                className="relative"
              >

                <div className="bg-[#4A1824] p-2 shadow-[0_20px_60px_rgba(74,24,36,0.22)]">

                  <div className="border border-[#D6B36A]/35 p-2">

                    <div className="border border-[#D6B36A]/10 px-7 py-10 md:px-10 md:py-12 text-center">

                      <div className="mx-auto w-16 h-16 rounded-full border border-[#D6B36A] flex items-center justify-center text-[#E7CB91] text-xl">
                        II
                      </div>

                      <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-[#E2C98F]">
                        Puis, place à la fête
                      </p>

                      <h3 className="font-serif text-3xl md:text-4xl text-[#FFF8EB] mt-3">
                        La réception
                      </h3>

                      <div className="my-6">
                        <GoldOrnament light />
                      </div>

                      {invitation.heure_reception && (
                        <p className="font-serif italic text-2xl text-[#E7CB91]">
                          {invitation.heure_reception}
                        </p>
                      )}

                      <p className="mt-4 font-serif text-base md:text-lg text-[#E0D0C2] leading-relaxed">
                        {invitation.lieu_reception}
                      </p>

                      <div className="mt-7 flex justify-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#D6B36A]">
                        <span>Dîner</span>
                        <span>•</span>
                        <span>Musique</span>
                        <span>•</span>
                        <span>Amour</span>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          <motion.div
            variants={fadeUp}
            className="text-center mt-12"
          >
            <p className="font-serif italic text-[#7B6460]">
              Une journée, deux moments, mille souvenirs à créer.
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* =====================================================
          GALERIE — NOUVEAU STYLE
      ===================================================== */}

      <section className="relative bg-[#4A1824] px-5 py-24 md:py-32 overflow-hidden">

        <GoldenParticles />

        <Flower className="-left-10 top-10 opacity-60" />
        <Flower className="-right-10 bottom-10 rotate-180 opacity-60" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="relative z-10 max-w-7xl mx-auto"
        >

          <SectionHeading
            eyebrow="Notre album"
            title="Des souvenirs précieux"
            description="Quelques instants de notre histoire que nous avons le plaisir de partager avec vous."
            light
          />

          <motion.div
            variants={scaleIn}
            className="mt-14 bg-[#FBF5EA] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
          >

            <div className="border border-[#B98C4D]/40 p-2">

              <div className="border border-[#B98C4D]/15 p-3 md:p-5">

                <Galerie
                  photos={invitation.photos}
                />

              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* =====================================================
          LOCALISATION
      ===================================================== */}

      <section className="relative bg-[#FBF5EA] px-5 py-20 md:py-24 overflow-hidden">

        <Flower className="-right-10 top-5 rotate-180 opacity-35" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative z-10 max-w-5xl mx-auto"
        >

          <SectionHeading
            eyebrow="Le lieu"
            title="Retrouvez-nous"
            description="Nous serons heureux de vous retrouver pour célébrer ensemble ce jour exceptionnel."
          />

          {invitation.lieu_reception && (
            <>

              {/* Adresse */}

              <motion.div
                variants={fadeUp}
                className="mt-10 text-center"
              >

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#4A1824] border border-[#D6B36A]/40 shadow-lg">

                  <span className="text-[#E7CB91]">
                    ✦
                  </span>

                  <span className="font-serif text-sm text-[#F4E5D3]">
                    {invitation.lieu_reception}
                  </span>

                </div>

              </motion.div>

              {/* Carte */}

              <motion.div
                variants={scaleIn}
                className="mt-8 max-w-4xl mx-auto"
              >

                <div className="bg-[#4A1824] p-2 shadow-[0_20px_60px_rgba(74,24,36,0.18)]">

                  <div className="border border-[#D6B36A]/35 p-2">

                    <div className="relative h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden border border-[#D6B36A]/15">

                      <GoogleMap
                        adresse={invitation.lieu_reception}
                      />

                    </div>

                  </div>
                </div>

              </motion.div>

              {/* Bouton */}

              <motion.div
                variants={fadeUp}
                className="text-center mt-7"
              >

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    invitation.lieu_reception || ''
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#4A1824] text-[#F8E9D4] border border-[#D6B36A]/50 text-[9px] uppercase tracking-[0.3em] hover:bg-[#6B2635] transition-all duration-300"
                >
                  <span>Voir l'itinéraire</span>
                  <span className="text-[#E7CB91]">
                    →
                  </span>
                </a>

              </motion.div>
            </>
          )}

        </motion.div>
      </section>

      {/* =====================================================
          PARTAGE
      ===================================================== */}

      <section className="relative bg-[#F4EBDD] px-5 py-24 md:py-28 overflow-hidden">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] rounded-full border border-[#B98C4D]/10"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >

          <motion.div
            variants={scaleIn}
            className="mx-auto w-16 h-16 rounded-full bg-[#4A1824] border border-[#D6B36A] flex items-center justify-center text-[#E7CB91] text-xl"
          >
            ♡
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-[9px] uppercase tracking-[0.5em] text-[#8D5260]"
          >
            Partagez notre bonheur
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-[#4A1824] mt-4"
          >
            Faites-en profiter vos proches
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="my-7"
          >
            <GoldOrnament />
          </motion.div>

          <motion.div variants={fadeUp}>
            <PartageBoutons
              url={window.location.href}
              texte={`Vous êtes invité(e) au mariage de ${invitation.noms_maries} !`}
            />
          </motion.div>

        </motion.div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative bg-[#321019] px-6 py-20 text-center overflow-hidden">

        <GoldenParticles />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 max-w-xl mx-auto"
        >

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-16 h-px bg-[#D6B36A]/60" />

            <span className="text-[#E7CB91]">
              ✦
            </span>

            <span className="w-16 h-px bg-[#D6B36A]/60" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-serif italic text-2xl md:text-3xl text-[#FFF8EB]"
          >
            {invitation.noms_maries}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[8px] uppercase tracking-[0.45em] text-[#D6B36A]"
          >
            Une histoire • Un amour • Une vie
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="inline-block text-[#D6B36A]"
            >
              ♡
            </motion.span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[8px] text-[#A88C86]"
          >
            Avec amour • Pour toujours
          </motion.p>

        </motion.div>
      </footer>

    </main>
  );
}