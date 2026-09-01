import Countdown from '../shared/Countdown';
import Galerie from '../shared/Galerie';
import GoogleMap from '../shared/GoogleMap';
import PartageBoutons from '../shared/PartageBoutons';

export default function RoyalGold({ invitation }) {
  const dateFormatee = new Date(invitation.date_mariage).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-[#FBF7F4] text-[#382C32]">

      {/* =========================================================
          HERO - NOMS DES MARIÉS
      ========================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[#FBF7F4]">

        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#D9A6A6]/10" />
        <div className="absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-[#9B6B7A]/10" />

        <div className="absolute inset-5 md:inset-10 border border-[#B99A6B]/50" />
        <div className="absolute inset-8 md:inset-14 border border-[#D8C4A4]/40" />

        <div className="absolute top-10 left-10 text-[#C5A77D] text-xl">❦</div>
        <div className="absolute top-10 right-10 text-[#C5A77D] text-xl">❦</div>
        <div className="absolute bottom-10 left-10 text-[#C5A77D] text-xl">❦</div>
        <div className="absolute bottom-10 right-10 text-[#C5A77D] text-xl">❦</div>

        <div className="relative z-10 text-center max-w-5xl">
          <p className="uppercase tracking-[0.5em] text-[9px] md:text-[10px] text-[#A07878] mb-10">
            Avec la bénédiction de leurs familles
          </p>

          <p className="font-serif italic text-lg md:text-xl text-[#8B777B] mb-5">
            Deux cœurs, une promesse
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-[#4A303B] leading-tight tracking-wide">
            {invitation.noms_maries}
          </h1>

          <div className="flex items-center justify-center gap-4 my-9">
            <div className="w-16 md:w-28 h-px bg-[#C5A77D]" />
            <span className="text-[#B28B62] text-2xl font-serif">❦</span>
            <div className="w-16 md:w-28 h-px bg-[#C5A77D]" />
          </div>

          <p className="font-serif italic capitalize text-[#76666B] text-base md:text-lg">
            {dateFormatee}
          </p>

          <p className="mt-8 text-[9px] uppercase tracking-[0.35em] text-[#A07878]">
            Nous vous invitons à partager notre bonheur
          </p>
        </div>
      </section>


      {/* =========================================================
          MESSAGE DE BIENVENUE
      ========================================================= */}
      {invitation.message_bienvenue && (
        <section className="relative bg-[#FFFDFC] px-6 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 border-r border-b border-[#D8C2A0]/30 rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-40 h-40 border-l border-t border-[#D8C2A0]/30 rounded-tl-full" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 md:w-20 h-px bg-[#C9A878]" />
              <span className="text-[#B68B62] text-xl">❦</span>
              <div className="w-12 md:w-20 h-px bg-[#C9A878]" />
            </div>

            <p className="uppercase tracking-[0.45em] text-[9px] md:text-[10px] text-[#A47778] mb-6">
              Un mot pour vous
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-[#49343D] mb-10">
              Bienvenue dans notre histoire
            </h2>

            <div className="relative px-5 md:px-12">
              <span className="absolute -top-8 left-0 md:left-4 font-serif text-6xl text-[#D8C2A0]/50">"</span>
              <p className="font-serif italic text-xl md:text-2xl leading-[1.9] text-[#65575C]">
                {invitation.message_bienvenue}
              </p>
              <span className="absolute -bottom-12 right-0 md:right-4 font-serif text-6xl text-[#D8C2A0]/50">"</span>
            </div>

            <div className="mt-14">
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#C9A878] text-xs">✦</span>
                <div className="w-8 h-px bg-[#D8C2A0]" />
                <span className="text-[#A47778] text-sm">♡</span>
                <div className="w-8 h-px bg-[#D8C2A0]" />
                <span className="text-[#C9A878] text-xs">✦</span>
              </div>
              <p className="font-serif italic text-[#8B777B] mt-5">
                Avec toute notre affection
              </p>
            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          COUNTDOWN
      ========================================================= */}
      <section className="relative bg-[#4A303B] text-white px-6 py-24 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full border border-[#D8BFA0]/20" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full border border-[#D8BFA0]/20" />
        <div className="absolute top-10 left-10 text-[#D9C09D]/30 text-3xl">❦</div>
        <div className="absolute bottom-10 right-10 text-[#D9C09D]/30 text-3xl">❦</div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.45em] text-[9px] text-[#D9C09D] mb-5">
            Le grand jour approche
          </p>

          <h2 className="font-serif text-3xl md:text-5xl text-[#FBF7F4]">
            Nous comptons les jours...
          </h2>

          <div className="w-12 h-px bg-[#C5A77D] mx-auto my-8" />

          <div className="border border-[#C5A77D]/40 bg-[#3F2933]/60 px-6 py-10 md:px-12">
            <Countdown dateMariage={invitation.date_mariage} />
          </div>
        </div>
      </section>


      {/* =========================================================
          INFORMATIONS
      ========================================================= */}
      <section className="bg-[#FBF7F4] px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.45em] text-[9px] text-[#A07878] mb-5">
              Le rendez-vous
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#4A303B]">
              Les détails de notre journée
            </h2>
            <p className="font-serif italic text-[#8B777B] mt-4">
              Retrouvez-nous pour célébrer ce moment précieux
            </p>
            <div className="flex items-center justify-center gap-4 mt-7">
              <div className="w-14 h-px bg-[#C5A77D]" />
              <span className="text-[#B28B62]">❦</span>
              <div className="w-14 h-px bg-[#C5A77D]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {invitation.lieu_ceremonie && (
              <div className="relative bg-white border border-[#DCCFC8] p-10 md:p-14 text-center shadow-sm">
                <div className="absolute inset-3 border border-[#E9DED7]" />
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#C5A77D]" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#C5A77D]" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#C5A77D]" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#C5A77D]" />

                <div className="relative">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#F7EDED] border border-[#D8B6B6] flex items-center justify-center text-2xl text-[#A07878] mb-7">
                    ♡
                  </div>
                  <p className="uppercase tracking-[0.4em] text-[9px] text-[#A07878] mb-4">
                    Le premier rendez-vous
                  </p>
                  <h3 className="font-serif text-3xl text-[#4A303B] mb-5">
                    Takku jakka
                  </h3>
                  <div className="w-10 h-px bg-[#C5A77D] mx-auto mb-5" />
                  {invitation.heure_ceremonie && (
                    <p className="font-serif italic text-xl text-[#5F5057]">
                      {invitation.heure_ceremonie}
                    </p>
                  )}
                  <p className="font-serif text-[#82757A] mt-3 leading-relaxed">
                    {invitation.lieu_ceremonie}
                  </p>
                </div>
              </div>
            )}

            {invitation.lieu_reception && (
              <div className="relative bg-[#4A303B] text-white p-10 md:p-14 text-center overflow-hidden shadow-lg">
                <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full border border-[#D8BFA0]/20" />
                <div className="absolute -bottom-24 -left-24 w-52 h-52 rounded-full border border-[#D8BFA0]/20" />
                <div className="absolute inset-3 border border-[#D8BFA0]/40" />
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#D9C09D]" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#D9C09D]" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#D9C09D]" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#D9C09D]" />

                <div className="relative">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#5A3A48] border border-[#D8BFA0]/60 flex items-center justify-center text-xl text-[#D9C09D] mb-7">
                    ✦
                  </div>
                  <p className="uppercase tracking-[0.4em] text-[9px] text-[#D9C09D] mb-4">
                    Puis, place à la fête
                  </p>
                  <h3 className="font-serif text-3xl text-[#FBF7F4] mb-5">
                    La réception
                  </h3>
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="w-8 h-px bg-[#C5A77D]" />
                    <span className="text-[#D9C09D] text-xs">❦</span>
                    <div className="w-8 h-px bg-[#C5A77D]" />
                  </div>
                  {invitation.heure_reception && (
                    <p className="font-serif italic text-xl text-[#F0E3D6]">
                      {invitation.heure_reception}
                    </p>
                  )}
                  <p className="font-serif text-[#D2C5C6] mt-3 leading-relaxed">
                    {invitation.lieu_reception}
                  </p>
                  <p className="uppercase tracking-[0.3em] text-[8px] text-[#C5A77D] mt-8">
                    Dîner • musique • amour
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* =========================================================
          SOUVENIRS (GALERIE) — section joyeuse et lumineuse
      ========================================================= */}
      <section className="relative bg-[#F5E6D3] px-6 py-24 md:py-32 overflow-hidden">

        {/* Confettis décoratifs dispersés */}
        <div className="absolute top-16 left-[8%] text-[#D9A6A6] text-2xl rotate-12">✦</div>
        <div className="absolute top-32 right-[12%] text-[#B28B62] text-lg -rotate-12">❦</div>
        <div className="absolute bottom-24 left-[15%] text-[#C5A77D] text-xl rotate-45">✦</div>
        <div className="absolute bottom-40 right-[8%] text-[#9B6B7A] text-2xl">♡</div>
        <div className="absolute top-1/2 left-[3%] text-[#D9A6A6]/60 text-lg">❦</div>
        <div className="absolute top-1/3 right-[3%] text-[#C5A77D]/60 text-lg">✦</div>

        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#D9A6A6]/15" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-[#C5A77D]/15" />

        <div className="relative max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.5em] text-[9px] text-[#9B6F73] mb-5">
              Notre album
            </p>

            <h2 className="font-serif text-4xl md:text-6xl text-[#4A303B]">
              Des souvenirs à chérir
            </h2>

            <p className="font-serif italic text-[#76666B] mt-5 text-lg">
              Quelques instants de notre histoire, capturés pour toujours
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-px bg-[#C5A77D]" />
              <span className="text-[#B28B62] text-xl">❦</span>
              <div className="w-16 h-px bg-[#C5A77D]" />
            </div>
          </div>

          <div className="relative bg-white p-5 md:p-10 shadow-xl">
            <div className="absolute top-0 left-0 w-14 h-14 border-t-4 border-l-4 border-[#C5A77D]" />
            <div className="absolute top-0 right-0 w-14 h-14 border-t-4 border-r-4 border-[#C5A77D]" />
            <div className="absolute bottom-0 left-0 w-14 h-14 border-b-4 border-l-4 border-[#C5A77D]" />
            <div className="absolute bottom-0 right-0 w-14 h-14 border-b-4 border-r-4 border-[#C5A77D]" />

            <div className="border border-[#E9DED7] p-4 md:p-6">
              <Galerie photos={invitation.photos} />
            </div>
          </div>

          <p className="text-center font-serif italic text-[#806F74] text-lg mt-12">
            "Les plus beaux souvenirs sont ceux que l'on partage."
          </p>
        </div>
      </section>


      {/* =========================================================
          LOCALISATION — section distincte, élégante et raffinée
      ========================================================= */}
      <section className="relative bg-[#4A303B] text-white px-6 py-24 md:py-32 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full border border-[#D8BFA0]/15" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full border border-[#D8BFA0]/15" />
        <div className="absolute top-12 right-[10%] text-[#D9C09D]/30 text-3xl">❦</div>
        <div className="absolute bottom-12 left-[10%] text-[#D9C09D]/30 text-3xl">❦</div>

        <div className="relative max-w-4xl mx-auto text-center">

          <div className="mx-auto w-16 h-16 rounded-full bg-[#5A3A48] border border-[#D8BFA0]/60 flex items-center justify-center text-2xl text-[#D9C09D] mb-8">
            📍
          </div>

          <p className="uppercase tracking-[0.5em] text-[9px] text-[#D9C09D] mb-5">
            Comment nous rejoindre
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#FBF7F4]">
            Le lieu de la fête
          </h2>

          <p className="font-serif italic text-[#D2C5C6] mt-5 text-lg max-w-lg mx-auto">
            Nous serons ravis de vous accueillir à l'adresse ci-dessous
          </p>

          <div className="flex items-center justify-center gap-4 mt-8 mb-14">
            <div className="w-14 h-px bg-[#C5A77D]" />
            <span className="text-[#D9C09D] text-xl">✦</span>
            <div className="w-14 h-px bg-[#C5A77D]" />
          </div>

          <div className="relative bg-[#3F2933]/60 border border-[#C5A77D]/40 p-4 md:p-6">
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#D9C09D]" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#D9C09D]" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#D9C09D]" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#D9C09D]" />

            <GoogleMap adresse={invitation.lieu_reception} />
          </div>
        </div>
      </section>


      {/* =========================================================
          PARTAGE
      ========================================================= */}
      <section className="relative bg-[#FBF7F4] px-6 py-24 text-center overflow-hidden">
        <div className="absolute top-10 left-10 text-[#C5A77D] text-lg">❦</div>
        <div className="absolute top-10 right-10 text-[#C5A77D] text-lg">❦</div>

        <div className="mx-auto w-16 h-16 rounded-full bg-[#F7EDED] border border-[#D8B6B6] flex items-center justify-center text-2xl text-[#A07878] mb-8">
          ✉
        </div>

        <p className="uppercase tracking-[0.45em] text-[9px] text-[#A07878] mb-5">
          Partagez la joie
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-[#4A303B] mb-10">
          Faites-en profiter vos proches
        </h2>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-14 h-px bg-[#C5A77D]" />
          <span className="text-[#B28B62]">❦</span>
          <div className="w-14 h-px bg-[#C5A77D]" />
        </div>

        <PartageBoutons
          url={window.location.href}
          texte={`Vous êtes invité(e) au mariage de ${invitation.noms_maries} !`}
        />
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#38262F] text-white px-6 py-24 text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-5 mb-9">
            <div className="w-16 h-px bg-[#C5A77D]" />
            <span className="text-[#D9C09D] text-xl">❦</span>
            <div className="w-16 h-px bg-[#C5A77D]" />
          </div>

          <p className="font-serif italic text-2xl md:text-3xl text-[#F7F0EA]">
            Deux cœurs,
          </p>

          <p className="font-serif text-2xl md:text-3xl text-[#D9C09D] mt-2">
            une seule histoire.
          </p>

          <p className="uppercase tracking-[0.5em] text-[8px] text-[#C9B49D] mt-10">
            Avec amour • Pour toujours
          </p>
        </div>
      </footer>

    </div>
  );
}