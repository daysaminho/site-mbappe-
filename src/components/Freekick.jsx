import React, { useEffect, useState } from "react";

function Freekick() {
  const [daysSince, setDaysSince] = useState(0);

  // Calculer le nombre de jours depuis le 8 décembre 2015
  useEffect(() => {
    const startDate = new Date("2015-12-08"); // Date correcte : 8 décembre 2015
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Conversion en jours
    setDaysSince(diffDays);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Vidéo en fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/mbappefreekick.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      {/* Contenu par-dessus la vidéo */}
      <div className="relative z-10 bg-white bg-opacity-70 rounded-lg p-8 text-center shadow-lg">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Has Mbappé scored a free-kick?</h1>
        <h2 className="text-2xl text-gray-700">Nope. Day {daysSince}</h2>
      </div>
    </div>
  );
}

export default Freekick;