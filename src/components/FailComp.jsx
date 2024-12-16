import React from "react";

function FailComp() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        Kylian Mbappé the worst player of all time?
      </h1>

      <div className="mb-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0iUSQtanOeM?cc_load_policy=1" // URL pour charger les sous-titres
          title="Kylian Mbappé the worst player of all time?"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-lg text-gray-700">
        Voici une compilation du match de Kylian Mbappé face à Manchester United en 2019, le pire match de sa carrière.
      </p>
    </div>
  );
}

export default FailComp;
