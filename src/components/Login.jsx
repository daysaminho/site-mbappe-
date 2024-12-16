import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token); // Stocke le token dans localStorage
                navigate('/home'); // Redirige vers la page d'accueil
            } else {
                console.error('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
<div className="bg-gray-100 min-h-screen flex items-center justify-center">
<div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                {/* Titre de la page */}
<h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Connexion à votre compte
</h1>

                {/* Formulaire */}
<form className="space-y-4" onSubmit={handleSubmit}>
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
                            placeholder="Entrez votre mot de passe"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
</div>

                    {/* Bouton de connexion */}
<div>
<button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
>
                            Se connecter
</button>
</div>
</form>

                {/* Lien d'inscription */}
<p className="text-center text-sm text-gray-600 mt-4">
                    Pas encore de compte ?{" "}
<a href="/register" className="text-blue-500 hover:underline">
                        Inscrivez-vous ici
</a>
</p>
</div>
</div>
    );
}

export default Login;