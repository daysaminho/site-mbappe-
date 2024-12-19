import React, { useState } from "react";

function Profile() {
  const [username, setUsername] = useState("Utilisateur");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSave = () => {
    alert(`Votre profil a été mis à jour !\nPseudo : ${username}`);
    // Vous pouvez ajouter ici une logique pour sauvegarder les données dans un backend ou localStorage.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 max-w-md">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Modification du Profil</h2>

        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-800 font-semibold mb-2 text-lg">
            Pseudo
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-800 font-semibold mb-2 text-lg">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default Profile;
