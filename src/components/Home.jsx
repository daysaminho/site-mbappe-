import React, { useEffect, useState } from "react";

function Home() {
    // State pour stocker les produits (matchs)
    const [matches, setMatches] = useState([]);

    // Utilisation de useEffect pour récupérer les données depuis l'API

      useEffect(() => {
        fetch('http://localhost:5000/articles')
            .then(response => response.json())
            .then(data => {
                console.log("Données reçues:", data);  // Ajoute un log pour vérifier les données
                setMatches(data);
            })
            .catch(error => {
                console.error("Erreur de récupération des données:", error);
            });
    }, []);


    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto p-8">
                {/* Titre principal */}
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                    Les Pires Matchs de la misérable carrière de Kylian Mbappé
                </h1>

                {/* Grille de produits */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Affichage dynamique des matchs depuis la base de données */}
                    {matches.map((articles) => (
                        <div key={articles.id} className="border border-gray-300 shadow-md rounded-lg overflow-hidden">
                            <img
                                src={articles.image_url}  // Utilise l'URL de l'image stockée en base
                                alt={articles.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {articles.name}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {articles.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
