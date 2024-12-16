// database.js
const mysql = require('mysql2');

// Configuration de la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sneakers'
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.log('Erreur de connexion à la base de données');
    } else {
        console.log('Connecté à la base de données');
    }
});

module.exports = db;
