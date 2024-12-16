import React from 'react';
import { Link } from 'react-router-dom';
import { House, LogIn, UserPen, Heart, Video, Hourglass } from 'lucide-react'; // Ajout des icônes Video et Hourglass

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-white">Kylian Mbatard</span>
          </div>

          {/* Nav Links Desktop */}
          <div className="flex items-center space-x-6">
            <Link to="/Home" className="hover:text-gray-200 transition-colors duration-200">
              <House size={24} />
            </Link>
            <Link to="/Login" className="hover:text-gray-200 transition-colors duration-200">
              <LogIn size={24} />
            </Link>
            <Link to="/Profile" className="hover:text-gray-200 transition-colors duration-200">
              <UserPen size={24} />
            </Link>
            <Link to="/Favorites" className="hover:text-gray-200 transition-colors duration-200">
              <Heart size={24} />
            </Link>
            {/* Onglet pour le compteur de freekick */}
            <Link to="/Freekick" className="hover:text-gray-200 transition-colors duration-200">
              <Hourglass size={24} />
            </Link>
            {/* Onglet pour la vidéo */}
            <Link to="/FailComp" className="hover:text-gray-200 transition-colors duration-200">
              <Video size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
