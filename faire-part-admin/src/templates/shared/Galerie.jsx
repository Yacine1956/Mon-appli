
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Galerie({ photos }) {
  const [photoActive, setPhotoActive] = useState(null);

  if (!photos || photos.length === 0) return null;

  const activeIndex = photoActive
    ? photos.findIndex((photo) => photo.id === photoActive.id)
    : 0;

  const nextPhoto = () => {
    const next = (activeIndex + 1) % photos.length;
    setPhotoActive(photos[next]);
  };

  const previousPhoto = () => {
    const previous =
      (activeIndex - 1 + photos.length) % photos.length;

    setPhotoActive(photos[previous]);
  };

  /*
   * On utilise les premières photos comme éléments
   * principaux de la composition.
   */
  const mainPhoto = photos[0];
  const secondaryPhotos = photos.slice(1, 5);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#faf9f6]">

      {/* =====================================================
          DÉCORATIONS FLOTTANTES
      ====================================================== */}

      <motion.div
        className="
          absolute
          -top-24
          -left-24
          w-72
          h-72
          rounded-full
          bg-amber-100/40
          blur-3xl
        "
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="
          absolute
          top-1/2
          -right-32
          w-96
          h-96
          rounded-full
          bg-rose-100/30
          blur-3xl
        "
        animate={{
          x: [0, -50, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =====================================================
          EN-TÊTE
      ====================================================== */}

      <motion.div
        className="relative text-center px-6 mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <div className="flex items-center justify-center gap-4 mb-7">

          <motion.span
            className="block h-px bg-amber-400"
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.span
            className="text-amber-500 text-xl"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.15, 1],
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
            className="block h-px bg-amber-400"
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

        </div>

        <p className="
          uppercase
          text-[10px]
          tracking-[0.5em]
          text-amber-600
          mb-5
        ">
          Notre histoire en images
        </p>

        <h2 className="
          font-serif
          text-4xl
          md:text-6xl
          text-gray-800
          font-light
        ">
          Quelques instants
          <br />

          <span className="italic text-gray-500">
            pour toujours
          </span>
        </h2>

        <p className="
          max-w-md
          mx-auto
          mt-6
          text-sm
          text-gray-500
          leading-7
        ">
          Des regards, des sourires et des souvenirs
          qui racontent notre histoire.
        </p>

      </motion.div>


      {/* =====================================================
          COMPOSITION PRINCIPALE
      ====================================================== */}

      <div className="
        relative
        max-w-6xl
        mx-auto
        px-6
        min-h-[680px]
        md:min-h-[760px]
      ">

        {/* Cercle décoratif */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[420px]
            h-[420px]
            md:w-[580px]
            md:h-[580px]
            rounded-full
            border
            border-amber-200/60
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 45,
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
            border
            border-dashed
            border-gray-200
          "
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        />


        {/* =================================================
            PETIT TEXTE HAUT
        ================================================== */}

        <motion.div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            text-center
            z-20
          "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="
            text-[9px]
            tracking-[0.35em]
            uppercase
            text-gray-400
          ">
            Love • Memories • Forever
          </span>
        </motion.div>


        {/* =================================================
            GRANDE PHOTO CENTRALE
        ================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[250px]
            h-[350px]
            sm:w-[300px]
            sm:h-[420px]
            md:w-[390px]
            md:h-[530px]
            z-10
            cursor-pointer
          "
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.025,
          }}
          onClick={() => setPhotoActive(mainPhoto)}
        >

          {/* Ombre */}
          <div className="
            absolute
            inset-4
            bg-black/20
            blur-2xl
            rounded-3xl
          " />

          {/* Cadre */}
          <div className="
            relative
            h-full
            w-full
            bg-white
            p-3
            md:p-4
            shadow-[0_30px_80px_rgba(0,0,0,0.16)]
            rounded-[2rem]
          ">

            <div className="
              relative
              h-full
              w-full
              overflow-hidden
              rounded-[1.4rem]
            ">

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
                  duration: 1,
                }}
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
              " />

              {/* Texte sur la grande photo */}
              <div className="
                absolute
                bottom-7
                left-0
                right-0
                text-center
                text-white
              ">

                <p className="
                  uppercase
                  tracking-[0.4em]
                  text-[8px]
                  opacity-80
                ">
                  Un moment précieux
                </p>

                <div className="
                  mt-3
                  text-lg
                  font-serif
                  italic
                ">
                  ♥
                </div>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            PHOTOS FLOTTANTES
        ================================================== */}

        {secondaryPhotos.map((photo, index) => {

          const positions = [
            `
              top-[12%]
              left-[3%]
              md:left-[8%]
              rotate-[-8deg]
            `,
            `
              top-[8%]
              right-[3%]
              md:right-[8%]
              rotate-[7deg]
            `,
            `
              bottom-[9%]
              left-[3%]
              md:left-[10%]
              rotate-[6deg]
            `,
            `
              bottom-[7%]
              right-[3%]
              md:right-[10%]
              rotate-[-7deg]
            `,
          ];

          const animations = [
            { y: [-10, 10, -10], x: [0, 8, 0] },
            { y: [10, -10, 10], x: [0, -8, 0] },
            { y: [8, -8, 8], x: [0, 10, 0] },
            { y: [-8, 8, -8], x: [0, -10, 0] },
          ];

          return (
            <motion.div
              key={photo.id}
              className={`
                absolute
                z-20
                ${positions[index]}
                w-[130px]
                h-[170px]
                sm:w-[160px]
                sm:h-[210px]
                md:w-[190px]
                md:h-[250px]
                cursor-pointer
              `}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: index % 2 === 0 ? -20 : 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: index % 2 === 0 ? -5 : 5,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 1,
                type: 'spring',
                stiffness: 80,
              }}
              animate={animations[index]}
              whileHover={{
                scale: 1.12,
                rotate: 0,
                zIndex: 50,
                transition: {
                  duration: 0.4,
                },
              }}
              onClick={() => setPhotoActive(photo)}
            >

              <div className="
                relative
                w-full
                h-full
                bg-white
                p-2
                md:p-3
                rounded-2xl
                shadow-[0_20px_50px_rgba(0,0,0,0.14)]
              ">

                <div className="
                  relative
                  w-full
                  h-full
                  overflow-hidden
                  rounded-xl
                ">

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
                  />

                  <div className="
                    absolute
                    inset-0
                    bg-white/0
                    hover:bg-white/10
                    transition-colors
                  " />

                </div>

              </div>

            </motion.div>
          );
        })}


        {/* =================================================
            PETIT COEUR CENTRAL BAS
        ================================================== */}

        <motion.div
          className="
            absolute
            bottom-2
            left-1/2
            -translate-x-1/2
            z-30
            w-12
            h-12
            rounded-full
            bg-white
            shadow-lg
            flex
            items-center
            justify-center
            text-amber-500
          "
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ♥
        </motion.div>

      </div>


      {/* =====================================================
          INDICATION
      ====================================================== */}

      <motion.div
        className="text-center mt-12 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >

        <div className="
          inline-flex
          items-center
          gap-3
          px-5
          py-3
          rounded-full
          bg-white
          shadow-sm
          border
          border-gray-100
        ">

          <span className="text-amber-500 text-xs">
            ✦
          </span>

          <span className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-gray-500
          ">
            Cliquez sur une photo
          </span>

          <span className="text-amber-500 text-xs">
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
              bg-black/95
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-5
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPhotoActive(null)}
          >

            {/* Fermer */}
            <button
              type="button"
              onClick={() => setPhotoActive(null)}
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
                border
                border-white/20
                bg-white/10
                text-white
                flex
                items-center
                justify-center
                backdrop-blur-md
                hover:bg-white/20
                transition
              "
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


            {/* Précédente */}
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
                bg-white/10
                border
                border-white/20
                text-white
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
              "
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


            {/* Suivante */}
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
                bg-white/10
                border
                border-white/20
                text-white
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
              "
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


            {/* Image active */}
            <AnimatePresence mode="wait">

              <motion.div
                key={photoActive.id}
                className="
                  relative
                  max-w-5xl
                  max-h-[90vh]
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
                onClick={(e) => e.stopPropagation()}
              >

                <div className="
                  bg-white
                  p-2
                  md:p-4
                  rounded-[1.5rem]
                  shadow-2xl
                ">

                  <img
                    src={photoActive.url}
                    alt=""
                    className="
                      max-w-[85vw]
                      max-h-[80vh]
                      object-contain
                      rounded-xl
                    "
                  />

                </div>

              </motion.div>

            </AnimatePresence>


            {/* Compteur */}
            <div className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
              text-white/60
              text-[10px]
              tracking-[0.35em]
            ">
              {activeIndex + 1} / {photos.length}
            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

