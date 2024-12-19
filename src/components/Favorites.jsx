import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react"; // Icône de cœur

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Utilisation de useEffect pour récupérer les favoris depuis localStorage ou l'état
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">
          Mes Favoris
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {favorites.length === 0 ? (
            <p className="text-center text-gray-600 text-xl">Aucun favori ajouté</p>
          ) : (
            favorites.map((article) => (
              <div
                key={article.id}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <img
                  src={article.image_url}
                  alt={article.name}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6 bg-white">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {article.name}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{article.description}</p>
                  <div className="flex justify-between items-center">
                    <Heart className="text-red-500 text-3xl hover:text-red-700 transition-colors duration-200" />
                  </div>
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
