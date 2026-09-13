import { motion } from 'framer-motion';
import Countdown from '../shared/Countdown';
import Galerie from '../shared/Galerie';
import GoogleMap from '../shared/GoogleMap';
import PartageBoutons from '../shared/PartageBoutons';

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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeSlow = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: 'easeOut',
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

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
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

/* =========================================================
   LIGNE DECORATIVE
========================================================= */

function DecorativeLine({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div
        className={`h-px w-16 md:w-24 ${
          light ? 'bg-[#D9B878]/50' : 'bg-[#B78A5A]/40'
        }`}
      />

      <div
        className={`w-2 h-2 rotate-45 border ${
          light
            ? 'border-[#E5C98B] bg-[#D9B878]/20'
            : 'border-[#A86F63] bg-[#C99B91]/20'
        }`}
      />

      <div
        className={`h-px w-16 md:w-24 ${
          light ? 'bg-[#D9B878]/50' : 'bg-[#B78A5A]/40'
        }`}
      />
    </div>
  );
}

/* =========================================================
   PETITES PARTICULES
========================================================= */

function FloatingParticles({ dark = false }) {
  const particles = Array.from({ length: 14 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => (
        <motion.span
          key={index}
          className={`absolute rounded-full ${
            dark ? 'bg-[#E1BE7A]' : 'bg-[#B98C78]'
          }`}
          style={{
            width: `${2 + (index % 3)}px`,
            height: `${2 + (index % 3)}px`,
            left: `${5 + ((index * 17) % 90)}%`,
            top: `${8 + ((index * 23) % 85)}%`,
            opacity: 0.2 + (index % 4) * 0.08,
          }}
          animate={{
            y: [-10, 15, -10],
            x: [0, index % 2 === 0 ? 8 : -8, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            delay: index * 0.25,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   PETITE FLEUR DECORATIVE
========================================================= */

function FloralDecoration({ position = 'left', dark = false }) {
  return (
    <div
      className={`absolute pointer-events-none ${
        position === 'left'
          ? 'left-0 top-10'
          : 'right-0 bottom-10'
      }`}
    >
      <motion.div
        animate={{
          rotate: position === 'left' ? [0, 4, 0] : [0, -4, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`relative w-32 h-32 md:w-44 md:h-44 ${
          position === 'left' ? '-translate-x-12' : 'translate-x-12'
        }`}
      >
        {/* Tiges */}
        <div
          className={`absolute w-28 h-px rotate-[35deg] ${
            dark ? 'bg-[#D9B878]/40' : 'bg-[#A96C64]/30'
          }`}
          style={{
            left: '15px',
            top: '75px',
          }}
        />

        <div
          className={`absolute w-24 h-px -rotate-[25deg] ${
            dark ? 'bg-[#D9B878]/30' : 'bg-[#A96C64]/25'
          }`}
          style={{
            left: '35px',
            top: '90px',
          }}
        />

        {/* Fleur 1 */}
        <div
          className={`absolute w-8 h-8 rounded-full ${
            dark ? 'bg-[#B97872]/60' : 'bg-[#A96762]/35'
          } blur-[1px]`}
          style={{
            left: '30px',
            top: '35px',
          }}
        />

        <div
          className={`absolute w-7 h-7 rounded-full ${
            dark ? 'bg-[#D5A0A0]/50' : 'bg-[#C8918A]/30'
          }`}
          style={{
            left: '42px',
            top: '25px',
          }}
        />

        <div
          className={`absolute w-7 h-7 rounded-full ${
            dark ? 'bg-[#D5A0A0]/50' : 'bg-[#C8918A]/30'
          }`}
          style={{
            left: '48px',
            top: '42px',
          }}
        />

        <div
          className={`absolute w-4 h-4 rounded-full ${
            dark ? 'bg-[#E2C17F]' : 'bg-[#C79A63]'
          }`}
          style={{
            left: '43px',
            top: '39px',
          }}
        />

        {/* Feuilles */}
        <div
          className={`absolute w-9 h-4 rounded-full rotate-[30deg] ${
            dark ? 'bg-[#7D8060]/50' : 'bg-[#77775A]/25'
          }`}
          style={{
            left: '73px',
            top: '73px',
          }}
        />

        <div
          className={`absolute w-9 h-4 rounded-full -rotate-[25deg] ${
            dark ? 'bg-[#7D8060]/50' : 'bg-[#77775A]/25'
          }`}
          style={{
            left: '18px',
            top: '77px',
          }}
        />
      </motion.div>
    </div>
  );
}

/* =========================================================
   TITRE DE SECTION
========================================================= */

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="text-center relative z-10"
    >
      <p
        className={`text-[10px] md:text-xs uppercase tracking-[0.35em] mb-4 ${
          light ? 'text-[#D9B878]' : 'text-[#A86F63]'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-serif text-3xl md:text-5xl tracking-wide ${
          light ? 'text-[#F8EEDB]' : 'text-[#573E39]'
        }`}
      >
        {title}
      </h2>

      <DecorativeLine light={light} />

      {subtitle && (
        <p
          className={`max-w-xl mx-auto text-sm md:text-base leading-relaxed ${
            light ? 'text-[#E8D9C1]' : 'text-[#806D67]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(date) {
  if (!date) return '';

  try {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  } catch {
    return date;
  }
}

/* =========================================================
   ROYAL GOLD
========================================================= */

export default function RoyalGold({ invitation }) {
  return (
    <main className="bg-[#F8F2EC] text-[#443936] overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8F2EC]">

        {/* Lumières */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#B97872]/20 blur-[100px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#D6B06D]/15 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 w-96 h-72 rounded-full bg-[#A96762]/10 blur-[100px]" />

        <FloatingParticles />

        <FloralDecoration position="left" />
        <FloralDecoration position="right" />

        {/* Cadre extérieur */}
        <div className="absolute inset-5 md:inset-10 border border-[#B58B62]/25 pointer-events-none" />

        {/* Cadre intérieur */}
        <div className="absolute inset-8 md:inset-16 border border-[#B58B62]/10 pointer-events-none" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >

          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-[#9A6A63] mb-6"
          >
            Avec la bénédiction de leurs familles
          </motion.p>

          <motion.div variants={scaleIn}>
            <div className="flex justify-center items-center gap-3 mb-7">
              <span className="w-12 md:w-20 h-px bg-[#C29A67]/50" />

              <span className="text-[#B48554] text-xl">
                ✦
              </span>

              <span className="w-12 md:w-20 h-px bg-[#C29A67]/50" />
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-serif italic text-xl md:text-2xl text-[#80615C] mb-5"
          >
            Deux cœurs, une promesse
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl sm:text-6xl md:text-8xl text-[#553A37] leading-tight tracking-wide"
          >
            {invitation.noms_maries}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-7 mb-8"
          >
            <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#9A7B70]">
              Célébrer notre amour
            </p>

            <p className="font-serif text-xl md:text-2xl text-[#A76F64] mt-2">
              {formatDate(invitation.date_mariage)}
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <DecorativeLine />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-serif italic text-base md:text-lg text-[#76625D] max-w-lg mx-auto leading-relaxed"
          >
            Nous vous invitons à partager notre bonheur
            <br />
            et à être témoins de ce jour précieux.
          </motion.p>
        </motion.div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#9A7B70]">
              Découvrir
            </span>

            <span className="text-[#A87568] text-lg">
              ↓
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          BIENVENUE
      ===================================================== */}

      <section className="relative py-24 md:py-32 px-6 bg-[#FFF9F4] overflow-hidden">

        <FloralDecoration position="left" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center relative z-10"
        >

          <SectionTitle
            eyebrow="Notre histoire"
            title="Mot de bienvenue"
            subtitle=""
          />

          {invitation.message_bienvenue && (
            <motion.div
              variants={fadeUp}
              className="relative mt-10 px-6 md:px-12"
            >

              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl font-serif text-[#C99788]/20">
                “
              </span>

              <p className="font-serif text-lg md:text-2xl leading-[1.9] text-[#66534E] italic">
                {invitation.message_bienvenue}
              </p>

              <span className="block mt-8 text-[#B4875A] text-xl">
                ♥
              </span>

              <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[#9C756D]">
                Avec amour
              </p>
            </motion.div>
          )}
        </motion.div>

        <FloralDecoration position="right" />
      </section>

      {/* =====================================================
          COUNTDOWN
      ===================================================== */}

      <section className="relative py-24 md:py-28 px-6 bg-[#4A302E] overflow-hidden">

        <FloatingParticles dark />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,163,101,0.12),transparent_60%)]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative z-10 max-w-5xl mx-auto"
        >

          <SectionTitle
            eyebrow="Le grand jour approche"
            title="Compte à rebours"
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
          DETAILS
      ===================================================== */}

      <section className="relative py-24 md:py-32 px-6 bg-[#F7EFE8] overflow-hidden">

        <FloralDecoration position="left" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="relative z-10 max-w-5xl mx-auto"
        >

          <SectionTitle
            eyebrow="Le programme"
            title="Les détails de la cérémonie"
            subtitle="Retrouvez-nous pour célébrer ensemble ce moment unique."
          />

          <div className="mt-16 relative">

            {/* Ligne centrale desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#C39A6A]/30 -translate-x-1/2" />

            <div className="space-y-10 md:space-y-20">

              {/* Cérémonie */}
              {invitation.lieu_ceremonie && (
                <motion.div
                  variants={fadeUp}
                  className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                >

                  <div className="md:text-right md:pr-14">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#B78A5A]/40 text-[#A56D62] font-serif text-lg bg-[#FFF9F4] shadow-sm">
                      I
                    </span>

                    <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#A87568]">
                      Cérémonie
                    </p>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#573E39] mt-2">
                      Takku jakka
                    </h3>
                  </div>

                  <div className="md:pl-14">
                    <div className="bg-[#FFF9F4] border border-[#C9A87A]/20 rounded-2xl p-6 md:p-8 shadow-[0_15px_50px_rgba(93,57,47,0.06)]">
                      <p className="font-serif text-2xl text-[#A56D62]">
                        {invitation.heure_ceremonie}
                      </p>

                      <div className="w-10 h-px bg-[#C39A6A]/40 my-4" />

                      <p className="text-sm leading-relaxed text-[#76645F]">
                        {invitation.lieu_ceremonie}
                      </p>
                    </div>
                  </div>

                </motion.div>
              )}

              {/* Réception */}
              {invitation.lieu_reception && (
                <motion.div
                  variants={fadeUp}
                  className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                >

                  <div className="md:order-2 md:text-left md:pl-14">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#B78A5A]/40 text-[#A56D62] font-serif text-lg bg-[#FFF9F4] shadow-sm">
                      II
                    </span>

                    <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#A87568]">
                      Réception
                    </p>

                    <h3 className="font-serif text-2xl md:text-3xl text-[#573E39] mt-2">
                      Réception
                    </h3>
                  </div>

                  <div className="md:order-1 md:text-right md:pr-14">
                    <div className="bg-[#FFF9F4] border border-[#C9A87A]/20 rounded-2xl p-6 md:p-8 shadow-[0_15px_50px_rgba(93,57,47,0.06)] md:text-left">
                      <p className="font-serif text-2xl text-[#A56D62]">
                        {invitation.heure_reception}
                      </p>

                      <div className="w-10 h-px bg-[#C39A6A]/40 my-4" />

                      <p className="text-sm leading-relaxed text-[#76645F]">
                        {invitation.lieu_reception}
                      </p>
                    </div>
                  </div>

                </motion.div>
              )}

            </div>
          </div>

        </motion.div>

        <FloralDecoration position="right" />
      </section>

      {/* =====================================================
          GALERIE
      ===================================================== */}

      <section className="relative py-24 md:py-32 px-6 bg-[#EADBD2] overflow-hidden">

        <FloatingParticles />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="relative z-10 max-w-6xl mx-auto"
        >

          <SectionTitle
            eyebrow="Quelques souvenirs"
            title="Notre galerie"
            subtitle="Des instants précieux qui racontent notre histoire."
          />

          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <Galerie photos={invitation.photos} />
          </motion.div>

        </motion.div>
      </section>

      {/* =====================================================
          LOCALISATION
      ===================================================== */}

      <section className="relative py-20 md:py-24 px-6 bg-[#FFF9F4] overflow-hidden">

        <FloralDecoration position="left" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="relative z-10 max-w-5xl mx-auto"
        >

          <SectionTitle
            eyebrow="Nous rejoindre"
            title="Lieu de réception"
            subtitle="Retrouvez-nous pour partager cette belle journée."
          />

          {invitation.lieu_reception && (
            <motion.div
              variants={fadeUp}
              className="mt-10"
            >

              <div className="max-w-3xl mx-auto bg-[#F8F0E9] border border-[#C9A87A]/20 rounded-3xl p-3 md:p-4 shadow-[0_20px_60px_rgba(75,47,39,0.08)]">

                <div className="rounded-2xl overflow-hidden bg-[#EDE2DA]">

                  <GoogleMap
                    adresse={invitation.lieu_reception}
                  />

                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 px-4 md:px-7 py-5">

                  <div className="flex items-center gap-4 text-center sm:text-left">

                    <div className="w-11 h-11 rounded-full bg-[#5B3834] flex items-center justify-center text-[#E3C27D] shrink-0">
                      <span className="text-lg">
                        ♧
                      </span>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-[#A87568] mb-1">
                        Adresse
                      </p>

                      <p className="text-sm text-[#695852] max-w-md">
                        {invitation.lieu_reception}
                      </p>
                    </div>

                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      invitation.lieu_reception || ''
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#5B3834] text-[#F5E7CB] text-[10px] uppercase tracking-[0.18em] hover:bg-[#704640] transition-all duration-300 shadow-md"
                  >
                    <span>Voir l'itinéraire</span>
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </motion.div>
          )}

        </motion.div>

        <FloralDecoration position="right" />
      </section>

      {/* =====================================================
          PARTAGE
      ===================================================== */}

      <section className="relative py-24 md:py-28 px-6 bg-[#4A302E] overflow-hidden">

        <FloatingParticles dark />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,176,109,0.12),transparent_65%)]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >

          <SectionTitle
            eyebrow="Partagez notre bonheur"
            title="À très bientôt"
            subtitle="Votre présence rendra cette journée encore plus belle."
            light
          />

          <motion.div
            variants={fadeUp}
            className="mt-10"
          >
            <PartageBoutons
              url={window.location.href}
              texte={`Invitation de mariage - ${invitation.noms_maries}`}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex justify-center items-center gap-3"
          >
            <span className="w-16 h-px bg-[#D8B879]/30" />

            <span className="text-[#D8B879] text-lg">
              ♥
            </span>

            <span className="w-16 h-px bg-[#D8B879]/30" />
          </motion.div>

        </motion.div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative bg-[#352321] text-center py-10 px-6 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#C7A36B] to-transparent" />

        <p className="font-serif text-xl text-[#E5CC9B]">
          {invitation.noms_maries}
        </p>

        <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-[#BCA69E]">
          Une histoire • Un amour • Une vie
        </p>

        <div className="mt-5 text-[#C9A06B] text-sm">
          ♥
        </div>

        <p className="mt-5 text-[9px] text-[#907A73]">
          Avec amour, pour toujours.
        </p>

      </footer>

    </main>
  );
}