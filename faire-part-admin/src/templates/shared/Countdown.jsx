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
      symbole: '✦',
    },
    {
      label: 'Heures',
      value: restant.heures,
      symbole: '☾',
    },
    {
      label: 'Minutes',
      value: restant.minutes,
      symbole: '✧',
    },
    {
      label: 'Secondes',
      value: restant.secondes,
      symbole: '♡',
    },
  ];

  const etoiles = [
    { left: '7%', top: '16%', delay: 0 },
    { left: '16%', top: '72%', delay: 1.2 },
    { left: '27%', top: '10%', delay: 2 },
    { left: '73%', top: '14%', delay: 0.8 },
    { left: '87%', top: '30%', delay: 1.8 },
    { left: '93%', top: '72%', delay: 2.5 },
    { left: '63%', top: '88%', delay: 1.4 },
    { left: '36%', top: '92%', delay: 2.2 },
  ];

  return (
    <section className="relative overflow-hidden bg-[#080B20] py-16 md:py-20 px-5">

      {/* =====================================================
          AMBIANCE DE FOND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Halo central */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[420px]
            h-[420px]
            rounded-full
            bg-[#422A4D]/25
            blur-[100px]
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Halo rose */}
        <motion.div
          className="
            absolute
            -left-32
            top-1/3
            w-72
            h-72
            rounded-full
            bg-[#C58FA5]/10
            blur-[100px]
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

        {/* Halo champagne */}
        <motion.div
          className="
            absolute
            -right-32
            bottom-0
            w-80
            h-80
            rounded-full
            bg-[#DCC79A]/10
            blur-[110px]
          "
          animate={{
            x: [0, -40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Étoiles */}
        {etoiles.map((etoile, index) => (
          <motion.span
            key={index}
            className="
              absolute
              text-[#DCC79A]/60
              text-[9px]
            "
            style={{
              left: etoile.left,
              top: etoile.top,
            }}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [0.7, 1.25, 0.7],
            }}
            transition={{
              duration: 3 + index * 0.3,
              delay: etoile.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ✦
          </motion.span>
        ))}

        {/* Petits points lumineux */}
        {[1, 2, 3, 4].map((item) => (
          <motion.span
            key={item}
            className="
              absolute
              w-1
              h-1
              rounded-full
              bg-[#C58FA5]/50
            "
            style={{
              left: `${15 + item * 18}%`,
              top: `${25 + (item % 2) * 45}%`,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + item,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Ligne supérieure */}
        <div className="
          absolute
          top-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#DCC79A]/30
          to-transparent
        " />

        {/* Ligne inférieure */}
        <div className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#C58FA5]/20
          to-transparent
        " />

      </div>

      {/* =====================================================
          CONTENU
      ====================================================== */}

      <div className="relative max-w-4xl mx-auto">

        {/* =================================================
            TITRE
        ================================================== */}

        <motion.div
          className="text-center mb-11"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
          }}
        >

          {/* Ornement */}
          <div className="
            flex
            items-center
            justify-center
            gap-4
            mb-5
          ">

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="
                h-px
                bg-gradient-to-r
                from-transparent
                to-[#DCC79A]/70
              "
            />

            <motion.span
              className="text-[#DCC79A] text-sm"
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              ✦
            </motion.span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="
                h-px
                bg-gradient-to-l
                from-transparent
                to-[#DCC79A]/70
              "
            />

          </div>

          <p className="
            uppercase
            tracking-[0.42em]
            text-[10px]
            text-[#DCC79A]
            mb-3
          ">
            Le grand jour approche
          </p>

          <h2 className="
            font-serif
            text-3xl
            md:text-5xl
            text-[#FBF7F1]
            font-light
          ">
            Plus que quelques instants...
          </h2>

          <motion.p
            className="
              mt-4
              text-sm
              text-[#D8D3DD]/65
              italic
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
              delay: 0.3,
            }}
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
          gap-3
          md:gap-5
          max-w-3xl
          mx-auto
        ">

          {unites.map((u, index) => (

            <motion.div
              key={u.label}
              className="relative"
              initial={{
                opacity: 0,
                y: 45,
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
                  -inset-2
                  rounded-[1.7rem]
                  bg-[#C58FA5]/15
                  blur-xl
                "
                animate={{
                  opacity: [0.25, 0.55, 0.25],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Carte */}
              <motion.div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-gradient-to-br
                  from-[#181C3C]
                  via-[#11152F]
                  to-[#0C1028]
                  border
                  border-[#DCC79A]/20
                  px-3
                  py-6
                  md:py-8
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
                whileHover={{
                  y: -7,
                  scale: 1.03,
                  borderColor: 'rgba(220,199,154,0.5)',
                  boxShadow:
                    '0 25px 70px rgba(0,0,0,0.5)',
                }}
                transition={{
                  duration: 0.35,
                }}
              >

                {/* Reflet */}
                <motion.div
                  className="
                    absolute
                    top-0
                    left-[-100%]
                    w-[60%]
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
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

                {/* Petit symbole */}
                <motion.div
                  className="
                    mx-auto
                    mb-4
                    w-8
                    h-8
                    rounded-full
                    bg-[#DCC79A]/10
                    border
                    border-[#DCC79A]/20
                    text-[#DCC79A]
                    flex
                    items-center
                    justify-center
                    text-xs
                  "
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {u.symbole}
                </motion.div>

                {/* Chiffre */}
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
                        text-[#FBF7F1]
                        font-light
                        tabular-nums
                      "
                      initial={{
                        opacity: 0,
                        y: -18,
                        scale: 0.8,
                        filter: 'blur(5px)',
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: 'blur(0px)',
                      }}
                      exit={{
                        opacity: 0,
                        y: 18,
                        scale: 0.8,
                        filter: 'blur(5px)',
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {String(u.value).padStart(2, '0')}
                    </motion.span>

                  </AnimatePresence>

                </div>

                {/* Ligne champagne */}
                <div className="
                  w-9
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#DCC79A]
                  to-transparent
                  mx-auto
                  my-4
                " />

                {/* Label */}
                <p className="
                  uppercase
                  tracking-[0.28em]
                  text-[9px]
                  text-[#D8D3DD]/55
                ">
                  {u.label}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>

        {/* =================================================
            SIGNATURE
        ================================================== */}

        <motion.div
          className="
            flex
            items-center
            justify-center
            gap-4
            mt-11
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
            bg-gradient-to-r
            from-transparent
            to-[#DCC79A]/40
          " />

          <motion.div
            className="
              relative
              w-11
              h-11
              rounded-full
              bg-[#11152F]
              border
              border-[#DCC79A]/25
              flex
              items-center
              justify-center
              text-[#C58FA5]
              text-sm
              shadow-[0_10px_30px_rgba(0,0,0,0.3)]
            "
            animate={{
              scale: [1, 1.12, 1],
              boxShadow: [
                '0 10px 30px rgba(0,0,0,0.3)',
                '0 10px 40px rgba(197,143,165,0.18)',
                '0 10px 30px rgba(0,0,0,0.3)',
              ],
            }}
            transition={{
              duration: 2.2,
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
            bg-gradient-to-l
            from-transparent
            to-[#DCC79A]/40
          " />

        </motion.div>

        <motion.p
          className="
            mt-4
            text-center
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-[#FBF7F1]/30
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
            delay: 1,
          }}
        >
          Chaque seconde nous rapproche de ce moment
        </motion.p>

      </div>
    </section>
  );
}