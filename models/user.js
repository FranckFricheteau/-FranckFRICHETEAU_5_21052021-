const mongoose = require('mongoose');
//pour plus facilement résoudre les erreurs générées par défaut par mongodb, on installe un paquet qui pré-valide les informations
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({ //unique true fait que les user ne peuvent pas s'incrire avec la meme adresse
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//Apliquer le validator
userSchema.plugin(uniqueValidator);

// Exporter le schema sous forme de model 
module.exports = mongoose.model('User', userSchema);