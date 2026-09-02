
import { motion } from 'framer-motion';

import Countdown from '../shared/Countdown';
import Galerie from '../shared/Galerie';
import GoogleMap from '../shared/GoogleMap';
import PartageBoutons from '../shared/PartageBoutons';

/* =========================================================
   VARIANTS
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

const fadeSlow = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
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
   LIGNE DÉCORATIVE
========================================================= */

function DecorativeLine() {
  return (
    <div className="flex items-center justify-center gap-3">
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 55, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px bg-gradient-to-r from-transparent to-[#C9A66B]"
      />

      <motion.span
        animate={{
          rotate: 360,
          scale: [1, 1.15, 1],
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
        className="text-[#B18A4D] text-xs"
      >
        ✦
      </motion.span>

      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 55, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px bg-gradient-to-l from-transparent to-[#C9A66B]"
      />
    </div>
  );
}

/* =========================================================
   PARTICULES
========================================================= */

function FloatingParticles() {
  const particles = [
    { left: '8%', top: '18%', delay: 0 },
    { left: '18%', top: '72%', delay: 1.2 },
    { left: '83%', top: '22%', delay: 0.6 },
    { left: '91%', top: '65%', delay: 1.8 },
    { left: '48%', top: '12%', delay: 2.2 },
    { left: '68%', top: '82%', delay: 0.9 },
  ];

  return (
    <>
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute text-[#C9A66B]/45 text-[10px] pointer-events-none"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.25, 0.8, 0.25],
            rotate: [0, 45, 90],
          }}
          transition={{
            duration: 5 + index * 0.4,
            delay: particle.delay,
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
   ROYAL GOLD
========================================================= */

export default function RoyalGold({ invitation }) {
  const dateFormatee = new Date(
    invitation.date_mariage
  ).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-[#F9F5EF] text-[#443936] overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          py-20
          overflow-hidden
        "
      >
        {/* Lumière rose */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -top-32
            -left-32
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#D8A7A7]/20
            blur-[100px]
          "
        />

        {/* Lumière dorée */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="
            absolute
            -bottom-40
            -right-40
            w-[550px]
            h-[550px]
            rounded-full
            bg-[#C9A66B]/15
            blur-[110px]
          "
        />

        <FloatingParticles />

        {/* Cadre extérieur */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-4
            md:inset-8
            lg:inset-12
            border
            border-[#C9A66B]/30
            pointer-events-none
          "
        />

        {/* Cadre intérieur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1.5,
          }}
          className="
            absolute
            inset-7
            md:inset-11
            lg:inset-16
            border
            border-[#C9A66B]/10
            pointer-events-none
          "
        />

        {/* Contenu */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
            text-center
          "
        >
          <motion.p
            variants={fadeUp}
            className="
              text-[9px]
              uppercase
              tracking-[0.55em]
              text-[#9B7774]
              mb-10
            "
          >
            Avec la bénédiction de leurs familles
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              font-serif
              italic
              text-xl
              md:text-2xl
              text-[#705D5A]
              mb-7
            "
          >
            Deux cœurs, une promesse
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="
              font-serif
              font-normal
              text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-[9rem]
              leading-none
              tracking-tight
              text-[#44312F]
            "
          >
            {invitation.noms_maries}
          </motion.h1>

          {/* Ornement */}
          <motion.div
            variants={fadeSlow}
            className="flex items-center justify-center gap-4 my-9"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{
                width: 'clamp(4rem, 12vw, 7rem)',
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="h-px bg-[#C9A66B]"
            />

            <motion.span
              animate={{
                rotate: 360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="text-[#B18A4D] text-lg"
            >
              ✦
            </motion.span>

            <motion.span
              initial={{ width: 0 }}
              animate={{
                width: 'clamp(4rem, 12vw, 7rem)',
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="h-px bg-[#C9A66B]"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="
              font-serif
              italic
              capitalize
              text-[#796764]
              text-base
              md:text-lg
            "
          >
            {dateFormatee}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              mt-8
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-[#9B7774]
            "
          >
            Nous vous invitons à partager notre bonheur
          </motion.p>

          {/* Scroll */}
          <motion.div
            variants={fadeUp}
            className="mt-20 flex flex-col items-center"
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.45em]
                text-[#A48A83]
                mb-3
              "
            >
              Faire défiler
            </span>

            <motion.div
              animate={{
                scaleY: [0.4, 1, 0.4],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                origin-top
                w-px
                h-12
                bg-[#C9A66B]
              "
            />

            <motion.span
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-[#C9A66B] text-xs mt-2"
            >
              ↓
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      

      
{/* =====================================================
    MOT DE BIENVENUE
===================================================== */}

<section className="relative bg-[#FFFDF9] px-5 sm:px-6 py-24 md:py-32 overflow-hidden">

  {/* Décorations légères */}

  <motion.div
    animate={{
      x: [0, 20, 0],
      y: [0, -15, 0],
      opacity: [0.25, 0.4, 0.25],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="
      absolute
      -top-24
      -left-24
      w-72
      h-72
      rounded-full
      bg-[#D8A7A7]/15
      blur-3xl
      pointer-events-none
    "
  />

  <motion.div
    animate={{
      x: [0, -15, 0],
      y: [0, 20, 0],
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="
      absolute
      -bottom-32
      -right-32
      w-80
      h-80
      rounded-full
      bg-[#C9A66B]/10
      blur-3xl
      pointer-events-none
    "
  />

  <div className="relative max-w-4xl mx-auto">

    {/* Petit titre */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      variants={stagger}
      className="text-center"
    >

      <motion.p
        variants={fadeUp}
        className="
          text-[9px]
          uppercase
          tracking-[0.55em]
          text-[#A57979]
          mb-5
        "
      >
        Avec tout notre cœur
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="
          font-serif
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-normal
          text-[#44312F]
        "
      >
        Mot de bienvenue
      </motion.h2>

      {/* Ornement */}

      <motion.div
        variants={fadeUp}
        className="
          flex
          items-center
          justify-center
          gap-4
          my-8
        "
      >
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A66B]" />

        <motion.span
          animate={{
            rotate: [0, 45, 0, -45, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            text-[#C9A66B]
            text-sm
          "
        >
          ✦
        </motion.span>

        <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A66B]" />
      </motion.div>

    </motion.div>

    {/* =================================================
        MESSAGE
    ================================================= */}

    {invitation.message_bienvenue && (
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
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
        className="
          relative
          mt-10
          md:mt-14
        "
      >

        {/* Cadre extérieur */}

        <div
          className="
            absolute
            inset-3
            md:inset-5
            border
            border-[#C9A66B]/25
            pointer-events-none
          "
        />

        {/* Cadre intérieur */}

        <div
          className="
            relative
            bg-[#F9F5EF]
            border
            border-[#E7DCD4]
            px-8
            py-14
            md:px-16
            md:py-16
            text-center
            shadow-[0_20px_60px_rgba(68,49,47,0.06)]
          "
        >

          {/* Guillemets décoratifs */}

          <span
            className="
              absolute
              top-5
              left-7
              md:left-10
              font-serif
              text-6xl
              leading-none
              text-[#C9A66B]/30
            "
          >
            “
          </span>

          <span
            className="
              absolute
              bottom-0
              right-7
              md:right-10
              font-serif
              text-6xl
              leading-none
              text-[#C9A66B]/30
            "
          >
            ”
          </span>

          {/* Petit cœur */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              relative
              inline-flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              border
              border-[#C9A66B]/40
              bg-[#FFFDF9]
              text-[#A57979]
              text-sm
              mb-8
            "
          >
            ♡
          </motion.div>

          {/* Texte */}

          <p
            className="
              relative
              max-w-2xl
              mx-auto
              font-serif
              text-lg
              md:text-xl
              lg:text-2xl
              leading-[1.9]
              text-[#5E4B47]
              italic
            "
          >
            {invitation.message_bienvenue}
          </p>

          {/* Signature décorative */}

          <div className="flex flex-col items-center mt-10">

            <span className="w-10 h-px bg-[#C9A66B]/60 mb-4" />

            <span
              className="
                font-serif
                italic
                text-sm
                text-[#A57979]
              "
            >
              Avec amour
            </span>

          </div>

        </div>
      </motion.div>
    )}

  </div>
</section>



      {/* =====================================================
          COUNTDOWN
      ===================================================== */}

      <section
        className="
          relative
          bg-[#4A3632]
          text-white
          px-6
          py-24
          md:py-28
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            -left-32
            -top-32
            w-72
            h-72
            rounded-full
            border
            border-[#E0C58E]/10
          "
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
          className="
            absolute
            -right-40
            -bottom-40
            w-96
            h-96
            rounded-full
            border
            border-[#E0C58E]/10
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-80
            h-80
            rounded-full
            bg-[#C9A66B]
            blur-[100px]
          "
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={stagger}
          className="
            relative
            max-w-5xl
            mx-auto
            text-center
          "
        >
          <motion.p
            variants={fadeUp}
            className="
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-[#E0C58E]
              mb-5
            "
          >
            Le grand jour approche
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="
              font-serif
              text-3xl
              md:text-5xl
              font-normal
              text-[#FFF9F0]
            "
          >
            Nous comptons les jours
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="my-8"
          >
            <DecorativeLine />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <Countdown
              dateMariage={invitation.date_mariage}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          DÉTAILS DE LA JOURNÉE
      ===================================================== */}

      
{/* =====================================================
    DÉTAILS DE LA JOURNÉE
===================================================== */}

<section
  className="
    relative
    bg-[#F9F5EF]
    px-5
    sm:px-6
    py-24
    md:py-32
    overflow-hidden
  "
>
  {/* Décoration arrière-plan */}

  <motion.div
    animate={{
      x: [0, 25, 0],
      y: [0, -20, 0],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="
      absolute
      -top-24
      -right-24
      w-72
      h-72
      rounded-full
      bg-[#D8A7A7]/10
      blur-3xl
      pointer-events-none
    "
  />

  <motion.div
    animate={{
      x: [0, -20, 0],
      y: [0, 15, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="
      absolute
      -bottom-32
      -left-32
      w-80
      h-80
      rounded-full
      bg-[#C9A66B]/8
      blur-3xl
      pointer-events-none
    "
  />

  <div className="relative max-w-6xl mx-auto">

    {/* =================================================
        TITRE
    ================================================= */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={stagger}
      className="
        text-center
        mb-16
        md:mb-20
      "
    >
      <motion.p
        variants={fadeUp}
        className="
          text-[9px]
          uppercase
          tracking-[0.55em]
          text-[#A57979]
          mb-4
        "
      >
        Le rendez-vous
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="
          font-serif
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-normal
          text-[#44312F]
          leading-tight
        "
      >
        Les détails de notre journée
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className="my-7"
      >
        <DecorativeLine />
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="
          max-w-xl
          mx-auto
          font-serif
          italic
          text-[#806F6B]
          text-base
          md:text-lg
        "
      >
        Deux instants précieux, une seule journée à célébrer
      </motion.p>
    </motion.div>

    {/* =================================================
        TIMELINE
    ================================================= */}

    <div className="relative">

      {/* Ligne centrale desktop */}

      <div
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-10
          bottom-10
          -translate-x-1/2
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#C9A66B]/50
          to-transparent
        "
      />

      {/* =================================================
          CÉRÉMONIE
      ================================================= */}

      {invitation.lieu_ceremonie && (
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            md:grid
            md:grid-cols-2
            md:gap-16
            items-center
            mb-10
            md:mb-0
          "
        >

          {/* Partie texte */}

          <div
            className="
              relative
              md:text-right
              md:pr-10
              order-2
              md:order-1
            "
          >
            <div
              className="
                relative
                bg-[#FFFDF9]
                border
                border-[#E4D6CC]
                px-7
                py-10
                md:px-10
                md:py-12
                shadow-[0_18px_55px_rgba(68,49,47,0.07)]
                overflow-hidden
              "
            >

              {/* Ligne dorée supérieure */}

              <motion.div
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
                className="
                  absolute
                  top-0
                  right-0
                  left-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#C9A66B]
                  to-transparent
                "
              />

              {/* Petit ornement */}

              <div
                className="
                  flex
                  items-center
                  md:justify-end
                  gap-3
                  mb-6
                "
              >
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    text-[#A57979]
                  "
                >
                  Le premier rendez-vous
                </span>

                <span className="text-[#C9A66B] text-xs">
                  ✦
                </span>
              </div>

              <h3
                className="
                  font-serif
                  text-3xl
                  md:text-4xl
                  text-[#44312F]
                "
              >
                Takku jakka
              </h3>

              <div
                className="
                  flex
                  items-center
                  md:justify-end
                  gap-3
                  my-6
                "
              >
                <span className="w-8 h-px bg-[#C9A66B]" />

                <span className="text-[#C9A66B] text-xs">
                  ♡
                </span>
              </div>

              {/* Heure */}

              {invitation.heure_ceremonie && (
                <motion.p
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    inline-block
                    font-serif
                    italic
                    text-2xl
                    md:text-3xl
                    text-[#A57979]
                    mb-3
                  "
                >
                  {invitation.heure_ceremonie}
                </motion.p>
              )}

              {/* Lieu */}

              <p
                className="
                  font-serif
                  text-base
                  md:text-lg
                  text-[#806F6B]
                  leading-relaxed
                "
              >
                {invitation.lieu_ceremonie}
              </p>

              {/* Décoration basse */}

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  w-24
                  h-px
                  bg-gradient-to-l
                  from-[#C9A66B]/60
                  to-transparent
                "
              />
            </div>
          </div>

          {/* Médaillon central */}

          <div
            className="
              hidden
              md:flex
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-[#F9F5EF]
              border
              border-[#C9A66B]/50
              items-center
              justify-center
              z-10
            "
          >
            <motion.div
              animate={{
                rotate: [0, 8, 0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                w-9
                h-9
                rounded-full
                border
                border-[#C9A66B]/30
                flex
                items-center
                justify-center
                text-[#A57979]
                text-sm
              "
            >
              ♡
            </motion.div>
          </div>

          {/* Numéro */}

          <div
            className="
              hidden
              md:flex
              order-1
              md:order-2
              items-center
              justify-start
              pl-10
            "
          >
            <span
              className="
                font-serif
                italic
                text-7xl
                text-[#C9A66B]/20
              "
            >
              01
            </span>
          </div>
        </motion.div>
      )}

      {/* =================================================
          RÉCEPTION
      ================================================= */}

      {invitation.lieu_reception && (
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            md:grid
            md:grid-cols-2
            md:gap-16
            items-center
            mt-10
            md:mt-16
          "
        >

          {/* Numéro */}

          <div
            className="
              hidden
              md:flex
              items-center
              justify-end
              pr-10
            "
          >
            <span
              className="
                font-serif
                italic
                text-7xl
                text-[#C9A66B]/20
              "
            >
              02
            </span>
          </div>

          {/* Médaillon central */}

          <div
            className="
              hidden
              md:flex
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-[#F9F5EF]
              border
              border-[#C9A66B]/50
              items-center
              justify-center
              z-10
            "
          >
            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
                w-9
                h-9
                rounded-full
                border
                border-[#C9A66B]/30
                flex
                items-center
                justify-center
                text-[#C9A66B]
                text-xs
              "
            >
              ✦
            </motion.div>
          </div>

          {/* Carte réception */}

          <div
            className="
              relative
              bg-[#4A3632]
              text-white
              px-7
              py-10
              md:px-10
              md:py-12
              shadow-[0_20px_60px_rgba(68,49,47,0.18)]
              overflow-hidden
            "
          >

            {/* Halo */}

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                -right-24
                -bottom-24
                w-64
                h-64
                rounded-full
                bg-[#C9A66B]
                blur-3xl
              "
            />

            {/* Ligne dorée */}

            <motion.div
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
              className="
                absolute
                top-0
                left-0
                right-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#E0C58E]
                to-transparent
              "
            />

            <div className="relative z-10">

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-6
                "
              >
                <span className="text-[#E0C58E] text-xs">
                  ✦
                </span>

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    text-[#E0C58E]
                  "
                >
                  Puis, place à la fête
                </span>
              </div>

              <h3
                className="
                  font-serif
                  text-3xl
                  md:text-4xl
                  text-[#FFF9F0]
                "
              >
                La réception
              </h3>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  my-6
                "
              >
                <span className="w-8 h-px bg-[#C9A66B]" />

                <span className="text-[#E0C58E] text-xs">
                  ♡
                </span>
              </div>

              {/* Heure */}

              {invitation.heure_reception && (
                <motion.p
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    inline-block
                    font-serif
                    italic
                    text-2xl
                    md:text-3xl
                    text-[#E0C58E]
                    mb-3
                  "
                >
                  {invitation.heure_reception}
                </motion.p>
              )}

              {/* Lieu */}

              <p
                className="
                  font-serif
                  text-base
                  md:text-lg
                  text-[#D8C8C2]
                  leading-relaxed
                "
              >
                {invitation.lieu_reception}
              </p>

              {/* Bas */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mt-7
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-[#C9A66B]
                "
              >
                <span>Dîner</span>
                <span className="text-[#E0C58E]">•</span>
                <span>Musique</span>
                <span className="text-[#E0C58E]">•</span>
                <span>Amour</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Signature */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="
          flex
          flex-col
          items-center
          mt-16
          md:mt-20
        "
      >
        <span
          className="
            font-serif
            italic
            text-sm
            text-[#927B77]
          "
        >
          Une journée, deux moments,
        </span>

        <span
          className="
            font-serif
            italic
            text-sm
            text-[#A57979]
            mt-1
          "
        >
          mille souvenirs à créer.
        </span>
      </motion.div>

    </div>
  </div>
</section>



      {/* =====================================================
          GALERIE
      ===================================================== */}

      <section
        className="
          relative
          bg-[#EDE0D6]
          py-24
          md:py-32
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            -left-48
            top-1/2
            -translate-y-1/2
            w-96
            h-96
            rounded-full
            border
            border-[#C9A66B]/10
          "
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
            className="
              text-center
              px-6
              mb-14
            "
          >
            <motion.p
              variants={fadeUp}
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-[#A57979]
                mb-4
              "
            >
              Notre album
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                font-serif
                text-4xl
                md:text-6xl
                font-normal
                text-[#44312F]
              "
            >
              Des souvenirs à chérir
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="my-7"
            >
              <DecorativeLine />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="
                font-serif
                italic
                text-[#75635F]
              "
            >
              Faites glisser pour parcourir notre histoire
            </motion.p>
          </motion.div>

          <Galerie photos={invitation.photos} />
        </div>
      </section>

      {/* =====================================================
          LOCALISATION
      ===================================================== */}

      <section
        className="
          relative
          bg-[#F9F5EF]
          px-5
          sm:px-6
          py-20
          md:py-24
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            top-10
            right-10
            w-56
            h-56
            rounded-full
            bg-[#D8A7A7]/15
            blur-3xl
          "
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
          className="
            relative
            max-w-5xl
            mx-auto
          "
        >
          {/* TITRE */}

          <div className="text-center mb-7">
            <motion.p
              variants={fadeUp}
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-[#A57979]
                mb-2
              "
            >
              Le lieu
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                font-serif
                text-3xl
                md:text-4xl
                font-normal
                text-[#44312F]
              "
            >
              Retrouvez-nous
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-4"
            >
              <DecorativeLine />
            </motion.div>
          </div>

          {/* ADRESSE */}

          {invitation.lieu_reception && (
            <motion.p
              variants={fadeUp}
              className="
                text-center
                font-serif
                text-sm
                md:text-base
                text-[#6F5F5B]
                mb-7
              "
            >
              {invitation.lieu_reception}
            </motion.p>
          )}

          {/* CARTE */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -5,
            }}
            className="
              relative
              w-full
              h-[250px]
              sm:h-[280px]
              md:h-[320px]
              overflow-hidden
              rounded-xl
              border
              border-[#DDCFC4]
              bg-[#E8DED5]
              shadow-[0_20px_55px_rgba(68,49,47,0.12)]
            "
          >
            <div
              className="
                absolute
                -inset-2
                rounded-2xl
                border
                border-[#C9A66B]/10
                pointer-events-none
                z-10
              "
            />

            <GoogleMap
              adresse={invitation.lieu_reception}
            />
          </motion.div>

          {/* ITINÉRAIRE */}

          <motion.div
            variants={fadeUp}
            className="text-center mt-6"
          >
            <motion.a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                invitation.lieu_reception || ''
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
              }}
              className="
                inline-flex
                items-center
                gap-3
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-[#8F6D67]
              "
            >
              <span>
                Voir l'itinéraire
              </span>

              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-base"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          PARTAGE
      ===================================================== */}

      <section
        className="
          relative
          bg-[#FFFDF9]
          px-6
          py-24
          md:py-28
          text-center
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[420px]
            h-[420px]
            rounded-full
            border
            border-[#C9A66B]/10
            pointer-events-none
          "
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={stagger}
          className="
            relative
            max-w-2xl
            mx-auto
          "
        >
          <motion.div
            variants={fadeUp}
            whileHover={{
              rotate: 10,
              scale: 1.08,
            }}
            className="
              mx-auto
              w-14
              h-14
              rounded-full
              border
              border-[#D5B3AE]
              flex
              items-center
              justify-center
              text-[#A57979]
              mb-7
            "
          >
            ♡
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-[#A57979]
              mb-4
            "
          >
            Partagez la joie
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="
              font-serif
              text-3xl
              md:text-4xl
              font-normal
              text-[#44312F]
            "
          >
            Faites-en profiter vos proches
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="my-7"
          >
            <DecorativeLine />
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

      <footer
        className="
          relative
          bg-[#382825]
          text-white
          px-6
          py-20
          text-center
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-80
            h-80
            rounded-full
            bg-[#C9A66B]
            blur-[100px]
          "
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={stagger}
          className="
            relative
            max-w-xl
            mx-auto
          "
        >
          <motion.div
            variants={fadeUp}
            className="
              flex
              items-center
              justify-center
              gap-4
              mb-8
            "
          >
            <span className="w-12 h-px bg-[#C9A66B]" />

            <motion.span
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="text-[#E0C58E] text-sm"
            >
              ✦
            </motion.span>

            <span className="w-12 h-px bg-[#C9A66B]" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="
              font-serif
              italic
              text-2xl
              text-[#FFF8EF]
            "
          >
            Deux cœurs,
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              font-serif
              text-2xl
              text-[#E0C58E]
              mt-1
            "
          >
            une seule histoire.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              text-[8px]
              uppercase
              tracking-[0.5em]
              text-[#CDB9A9]
              mt-8
            "
          >
            Avec amour • Pour toujours
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8"
          >
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                inline-block
                text-[#C9A66B]
                text-sm
              "
            >
              ♡
            </motion.span>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}

