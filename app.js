const express = require('express');

//body-parser
const bodyParser = require('body-parser');

//MongoDB object modeling tool
const mongoose = require('mongoose');

//pour accéder au path de notre serveur
const path = require('path');

//import des routeurs dans l'application
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const sauce = require('./models/sauce');

//mongodb authentification

mongoose.connect('mongodb+srv://new-user-1:y6q7eeUXStMh6nt@cluster0.bsxcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


//pour créer une application express
const app = express();

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//middleware body-parser (deprecated)
app.use(bodyParser.json());

//gestionnaire de routage pour les images
//__dirname: le dossier où l'on se trouve
app.use('/images', express.static(path.join(__dirname, 'images')));

//enregistrement des routes
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

//exporter cette application pour y accéder depuis les autres fichiers notamment le serveur
module.exports = app;