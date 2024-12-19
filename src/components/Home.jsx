import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

function Home() {
    const [matches, setMatches] = useState([]);
    const [favorites, setFavorites] = useState([]);

    // Récupérer les données depuis l'API
    useEffect(() => {
        fetch("http://localhost:5000/articles")
            .then((response) => response.json())
            .then((data) => setMatches(data))
            .catch((error) => console.error("Erreur de récupération des données:", error));

        // Charger les favoris depuis localStorage
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    // Ajouter/Retirer un favori
    const toggleFavorite = (article) => {
        let updatedFavorites = [...favorites];
        if (favorites.some((fav) => fav.id === article.id)) {
            updatedFavorites = updatedFavorites.filter((fav) => fav.id !== article.id);
        } else {
            updatedFavorites.push(article);
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-screen">
            <div className="container mx-auto px-8 py-12">
                {/* Titre principal */}
                <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-12 tracking-wider drop-shadow-lg">
                    Les Pires Matchs de la misérable carrière de Kylian Mbappé
                </h1>

                {/* Grille des matchs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {matches.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={article.image_url}
                                    alt={article.name}
                                    className="w-full h-56 object-cover transform transition-all duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition duration-300 cursor-pointer">
                                    {article.name}
                                </h2>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {article.description}
                                </p>

                                {/* Icône de favori */}
                                <button
                                    onClick={() => toggleFavorite(article)}
                                    className="text-red-500 hover:text-red-700 transition-colors duration-300"
                                >
                                    <Heart
                                        size={28}
                                        fill={favorites.some((fav) => fav.id === article.id) ? "red" : "none"}
                                        stroke={favorites.some((fav) => fav.id === article.id) ? "none" : "red"}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer
                className="text-center py-4"
                style={{ backgroundColor: "#6C2BD9", color: "white" }}
            >
                <p className="text-sm">
                    Crédits : Suivez-moi sur{" "}
                    <a
                        href="https://x.com/bbyvic93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300 transition-colors duration-200"
                    >
                        Twitter
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default Home;
