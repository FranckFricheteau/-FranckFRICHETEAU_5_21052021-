const mongoose = require('mongoose');
//pour plus facilement résoudre les erreurs générées par défaut par mongodb, installation du paquet mongoose-unique-validator qui pré-valide les informations
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true }, //Identifiant unique MongoDB pour l'utilisateur qui a créé la sauce
    email: { type: String, required: true, unique: true }, //Adresse unique de l'utilisateur [unique]
    password: { type: String, required: true } //Hachage du mot de passe pour l'utilisateur
});

//Apliquer le validator
userSchema.plugin(uniqueValidator);

// Exporter le schema sous forme de model 
module.exports = mongoose.model('User', userSchema);