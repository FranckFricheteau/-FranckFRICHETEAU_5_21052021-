//framework standard pour le développement de serveur en Node.js
const express = require('express');

//MongoDB object modeling tool
const mongoose = require('mongoose');

//pour accéder au path de notre serveur
const path = require('path');

//Importation d'helmet, sécuriser l'application Express, Middleware style Connect compatible avec le framework Express
const helmet = require("helmet");

//pour créer une application express
const app = express();

//Installation d'helmet, entête HTTP helmet
app.use(helmet());

//Rate Limit - Middleware de base à limitation de débit pour Express
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 15 // 15 essais max
});

//Limiter les demandes répétées à l'API uniquement sur le login
app.use("/api/auth/login", apiLimiter);

//import des routeurs dans l'application
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
const sauce = require('./models/sauce');

//mongodb authentification
mongoose.connect('mongodb+srv://new-user-1:y6q7eeUXStMh6nt@cluster0.bsxcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

//gestionnaire de routage pour les images
//__dirname: le dossier où l'on se trouve
app.use('/images', express.static(path.join(__dirname, 'images')));

//enregistrement des routes
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);


//exporter cette application pour y accéder depuis les autres fichiers notamment le serveur
module.exports = app;