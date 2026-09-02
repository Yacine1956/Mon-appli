
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function calculerRestant(dateMariage) {
  const diff = new Date(dateMariage) - new Date();

  if (diff <= 0) {
    return {
      jours: 0,
      heures: 0,
      minutes: 0,
      secondes: 0,
    };
  }

  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ dateMariage }) {
  const [restant, setRestant] = useState(() =>
    calculerRestant(dateMariage)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRestant(calculerRestant(dateMariage));
    }, 1000);

    return () => clearInterval(interval);
  }, [dateMariage]);

  const unites = [
    {
      label: 'Jours',
      value: restant.jours,
    },
    {
      label: 'Heures',
      value: restant.heures,
    },
    {
      label: 'Minutes',
      value: restant.minutes,
    },
    {
      label: 'Secondes',
      value: restant.secondes,
    },
  ];

  return (
    <section className="relative py-16 px-5 overflow-hidden">

      {/* =====================================================
          HALOS DÉCORATIFS
      ====================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-80
          h-80
          rounded-full
          bg-amber-100/30
          blur-3xl
          pointer-events-none
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="
          absolute
          -left-20
          top-1/2
          w-48
          h-48
          rounded-full
          bg-rose-100/20
          blur-3xl
          pointer-events-none
        "
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =====================================================
          CONTENU
      ====================================================== */}

      <div className="relative max-w-4xl mx-auto">

        {/* =================================================
            TITRE
        ================================================== */}

        <motion.div
          className="text-center mb-12"
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
          }}
          transition={{
            duration: 0.9,
          }}
        >

          {/* décoration */}
          <div className="
            flex
            items-center
            justify-center
            gap-4
            mb-6
          ">

            <motion.span
              className="h-px bg-amber-300"
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />

            <motion.span
              className="text-amber-500 text-xl"
              animate={{
                rotate: [0, 180, 360],
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
              className="h-px bg-amber-300"
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />

          </div>

          <p className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-amber-600
            mb-4
          ">
            Le grand jour approche
          </p>

          <h2 className="
            font-serif
            text-3xl
            md:text-5xl
            text-gray-800
            font-light
          ">
            Plus que quelques instants...
          </h2>

          <motion.p
            className="
              mt-4
              text-sm
              text-gray-500
              italic
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Avant de célébrer notre amour avec vous
          </motion.p>

        </motion.div>


        {/* =================================================
            COMPTE À REBOURS
        ================================================== */}

        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-4
          md:gap-6
          max-w-3xl
          mx-auto
        ">

          {unites.map((u, index) => (

            <motion.div
              key={u.label}
              className="relative"
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: 0.15 + index * 0.12,
                duration: 0.7,
                type: 'spring',
                stiffness: 100,
              }}
            >

              {/* Halo */}
              <motion.div
                className="
                  absolute
                  inset-3
                  rounded-[2rem]
                  bg-amber-200/30
                  blur-xl
                  opacity-0
                  group-hover:opacity-100
                "
              />

              {/* Carte */}
              <motion.div
                className="
                  group
                  relative
                  bg-white/80
                  backdrop-blur-sm
                  border
                  border-white
                  rounded-[2rem]
                  px-4
                  py-7
                  md:py-9
                  shadow-[0_15px_45px_rgba(0,0,0,0.07)]
                  overflow-hidden
                "
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow:
                    '0 25px 55px rgba(0,0,0,0.11)',
                }}
                transition={{
                  duration: 0.35,
                }}
              >

                {/* reflet */}
                <motion.div
                  className="
                    absolute
                    top-0
                    left-[-100%]
                    w-[60%]
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/50
                    to-transparent
                    skew-x-[-20deg]
                    pointer-events-none
                  "
                  animate={{
                    left: ['-100%', '180%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                />

                {/* petit symbole */}
                <motion.div
                  className="
                    mx-auto
                    mb-4
                    w-7
                    h-7
                    rounded-full
                    bg-amber-50
                    text-amber-500
                    flex
                    items-center
                    justify-center
                    text-xs
                  "
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  ✦
                </motion.div>


                {/* CHIFFRE */}
                <div className="
                  relative
                  h-14
                  md:h-16
                  flex
                  items-center
                  justify-center
                ">

                  <AnimatePresence mode="popLayout">

                    <motion.span
                      key={u.value}
                      className="
                        absolute
                        font-serif
                        text-4xl
                        md:text-5xl
                        text-gray-800
                        font-light
                        tabular-nums
                      "
                      initial={{
                        opacity: 0,
                        y: -18,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 18,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {String(u.value).padStart(2, '0')}
                    </motion.span>

                  </AnimatePresence>

                </div>


                {/* Ligne */}
                <div className="
                  w-8
                  h-px
                  bg-amber-300
                  mx-auto
                  my-4
                " />

                {/* Label */}
                <p className="
                  uppercase
                  tracking-[0.3em]
                  text-[9px]
                  text-gray-500
                ">
                  {u.label}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>


        {/* =================================================
            COEUR
        ================================================== */}

        <motion.div
          className="
            flex
            items-center
            justify-center
            gap-4
            mt-12
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8,
          }}
        >

          <span className="
            h-px
            w-14
            md:w-20
            bg-gray-200
          " />

          <motion.div
            className="
              w-10
              h-10
              rounded-full
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              text-amber-500
              text-sm
            "
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ♥
          </motion.div>

          <span className="
            h-px
            w-14
            md:w-20
            bg-gray-200
          " />

        </motion.div>

      </div>
    </section>
  );
}

