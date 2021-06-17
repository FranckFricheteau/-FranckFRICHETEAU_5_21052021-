const mongoose = require('mongoose');
//pour plus facilement résoudre les erreurs générées par défaut par mongodb, installation du paquet mongoose-unique-validator qui pré-valide les informations
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true }, //unique true bloque les utilisateurs essayant de s'inscrire avec la meme adresse
    password: { type: String, required: true }
});

//Apliquer le validator
userSchema.plugin(uniqueValidator);

// Exporter le schema sous forme de model 
module.exports = mongoose.model('User', userSchema);