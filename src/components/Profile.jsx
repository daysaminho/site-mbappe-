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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Profil</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
            Pseudo
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-200"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default Profile;
