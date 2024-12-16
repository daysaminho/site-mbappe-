import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
                navigate('/login'); // Redirige vers la page de connexion
            } else {
                console.error('Registration failed:', data.message);
                alert(data.message || "Erreur lors de l'inscription.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                {/* Titre de la page */}
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Créez un compte
                </h1>

                {/* Formulaire */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Champ Nom d'utilisateur */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Nom d'utilisateur
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Entrez votre nom d'utilisateur"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Champ Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Adresse Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Entrez votre email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Champ Mot de passe */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Créez un mot de passe"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Champ Confirmation du mot de passe */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirmez le mot de passe
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirmez votre mot de passe"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Bouton d'inscription */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            S'inscrire
                        </button>
                    </div>
                </form>

                {/* Lien de connexion */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Vous avez déjà un compte ?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Connectez-vous ici
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
