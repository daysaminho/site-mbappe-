import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";  // Icône de cœur

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // Utilisation de useEffect pour récupérer les favoris depuis localStorage ou l'état
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8">
                <h1 className="text-5xl font-bold text-center text-blue-800 mb-8">
                    Mes Favoris
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {favorites.length === 0 ? (
                        <p className="text-center text-gray-600">Aucun favori ajouté</p>
                    ) : (
                        favorites.map((article) => (
                            <div key={article.id} className="border border-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img
                                    src={article.image_url}
                                    alt={article.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                        {article.name}
                                    </h2>
                                    <p className="text-gray-600 mb-4">{article.description}</p>
                                    <Heart className="text-red-500 text-3xl" />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Favorites;
