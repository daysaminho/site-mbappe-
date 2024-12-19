const express = require('express');
const db = require('./database'); // Import de la connexion à la DB
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const app = express();
const PORT = 5000;

app.use(cors())



// Middleware pour vérifier le token JWT
function authenticateToken(req, res, next) {
    const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ', '');  // Récupère le token de l'en-tête

    if (!token) {
        return res.status(403).json({ message: 'Accès refusé, token manquant' });
    }

    try {
        // Vérifie le token avec la clé secrète
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;  // Stocke les informations de l'utilisateur dans la requête
        next();  // Passe au middleware suivant (dans ce cas, la route de suppression)
    } catch (error) {
        return res.status(401).json({ message: 'Token invalide' });
    }
}










// Middleware pour parser le JSON
app.use(express.json());







app.get('/articles', (req, res) => {
    const sql = 'SELECT * FROM articles';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur SQL:', err);  // Ajoute un log d'erreur détaillé
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.post('/articles', (req, res) => {
    const { name, description, image_url } = req.body;

    if (!name || !description || !image_url) {
        return res.status(400).json({ error: 'Name, description, and image_url are required' });
    }

    const sql = 'INSERT INTO articles (name, description, image_url) VALUES (?, ?, ?)';
    db.query(sql, [name, description, image_url], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, name, description, image_url });
    });
});


// Route DELETE pour supprimer une paire de sneakers
app.delete('/articles/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM articles WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'articles not found' });
        }

        res.status(200).json({ message: 'articles deleted successfully' });
    });
});

// Route d'enregistrement (register)
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Vérification si l'utilisateur existe déjà
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertion de l'utilisateur dans la base de données
        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur lors de l\'enregistrement' });
            }
            res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
        });
    });
});

// Route de connexion (login)
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Vérification si l'utilisateur existe
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        if (results.length === 0) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        // Vérification du mot de passe
        bcrypt.compare(password, results[0].password, (err, isarticles) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur de comparaison du mot de passe' });
            }

            if (!isarticles) {
                return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
            }

            // Création du token JWT
            const token = jwt.sign({ id: results[0].id, username: results[0].username }, 'secretkey', { expiresIn: '1h' });

            res.status(200).json({ message: 'Connexion réussie', token });
        });
    });
});
















// Démarrage du serveur
app.listen(PORT, () => {
    console.log('Serveur en cours d\'exécution sur le port', PORT);
});
