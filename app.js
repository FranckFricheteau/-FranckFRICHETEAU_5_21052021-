const express = require('express');

//MongoDB object modeling tool
const mongoose = require('mongoose');

//mongodb authentification

mongoose.connect('mongodb+srv://new-user-1:y6q7eeUXStMh6nt@cluster0.bsxcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//pour accéder au path de notre serveur
const path = require('path');

//import des routeurs dans l'application
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

//pour créer une application express
const app = express();

//Rate Limit
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 100 // nb dessaie 100
});

app.use("/api/auth/login", limiter);


//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_APP_URL);
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

app.use('/api', sauceRoutes);


//exporter cette application pour y accéder depuis les autres fichiers notamment le serveur
module.exports = app;