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
    <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-300 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Has Mbappé scored a free-kick?</h1>
      <h2 className="text-2xl text-gray-700 mb-8">Nope. Day {daysSince}</h2>
    </div>
  );
}

export default Freekick;
